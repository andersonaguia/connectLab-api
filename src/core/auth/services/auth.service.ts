import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { CredentialsDTO } from '../dto/credentials.dto';
import { AddressEntity } from 'src/users/entities/address.entity';
import { ChangePasswordDTO } from '../dto/change-password.dto';
import { UpdateUserPasswordDTO } from '../dto/updateUserPassword.dto';
import { TokenDTO } from '../dto/token.dto';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<UserEntity>,
        @Inject('ADDRESS_REPOSITORY')
        private addressRepository: Repository<AddressEntity>
    ) { }

    async signUp(userData: CreateUserDto): Promise<UserEntity> {
        return new Promise(async (resolve, reject) => {
            try {
                if (userData.password != userData.passwordConfirmation) {
                    resolve(null);
                }
                const { fullName, photoUrl, email, password, phone, address, role } = userData;

                const createAddress = new AddressEntity()
                createAddress.zipCode = address.zipCode;
                createAddress.street = address.street;
                createAddress.number = address.number;
                createAddress.neighborhood = address.neighborhood;
                createAddress.city = address.city;
                createAddress.state = address.state;
                createAddress.complement = address.complement;

                const user = this.userRepository.create();

                user.fullName = fullName;
                photoUrl.length > 0 ? user.photoUrl = photoUrl : user.photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAKvlSuCAVIu5B45Fgjsdrasym0LWbSzbVQ&usqp=CAU";
                user.email = email;
                user.phone = phone;
                user.address = createAddress;
                user.active = true;
                user.role = role;
                user.salt = await bcrypt.genSalt(12);
                user.password = await this.hashPassword(password, user.salt);
                const userCreated = await this.userRepository.save(user);
                delete userCreated.password;
                delete userCreated.salt;
                resolve(userCreated);
            } catch (error) {
                reject({
                    code: error.code,
                    detail: error.detail
                });
            }
        })
    }

    async signIn(credentials: CredentialsDTO): Promise<TokenDTO> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await this.checkCredentials(credentials);
                if (user === null) {
                    resolve(null)
                }
                const firstName = user.fullName.split(' ');

                const jwtPayload = {
                    id: user.id,
                    firstName: firstName[0],
                    photoUrl: user.photoUrl,
                    email: user.email,                    
                    role: user.role
                }
                const token = new TokenDTO();                
                token.token = this.jwtService.sign(jwtPayload);              
                resolve(token)
            } catch (error) {
                reject({
                    code: error.code,
                    detail: error.detail
                });
            }
        })
    }

    async checkCredentials(credentials: CredentialsDTO) {
        const { email, password } = credentials;
        const user = await this.userRepository.findOne({
            where: {
                email: email,
                active: true
            }
        })

        if (user && (await user.checkPassword(password))) {
            return user;
        }
        return null;
    }

    async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

    validateToken(jwtToken: string) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.jwtService.verifyAsync(jwtToken, {
                    ignoreExpiration: false
                }))
            } catch (error) {
                reject({
                    code: 401,
                    detail: 'JWT expired.'
                })
            }
        })
    }

    decodedToken(jwtToken: string) {
        return this.jwtService.decode(jwtToken);
    }

    async changePassword(data: ChangePasswordDTO): Promise<number> {
        const { email, oldPassword, newPassword } = data;
        return new Promise(async (resolve, reject) => {
            try {
                const credentials: CredentialsDTO = new CredentialsDTO()
                credentials.email = email;
                credentials.password = oldPassword;

                const user = await this.checkCredentials(credentials);

                if (user === null) {
                    resolve(null);
                }
                const dataToUpdate = new UpdateUserPasswordDTO();
                dataToUpdate.password = await this.hashPassword(newPassword, user.salt);
                dataToUpdate.updatedAt = new Date();
                user.salt = await bcrypt.genSalt(12);

                const success = await this.updateUserPassword(user.id, dataToUpdate);
                resolve(success);
            } catch (error) {
                reject({
                    code: error.code,
                    detail: error.detail
                });
            }
        })
    }

    updateUserPassword(id: number, dataToUpdate: UpdateUserPasswordDTO): Promise<number> {
        return new Promise(async (resolve, reject) => {
            try {
                const { affected } = await this.userRepository.update({ id: id }, dataToUpdate);
                if (affected === 0) {
                    resolve(affected)
                }
                resolve(affected)
            } catch (error) {
                reject({
                    code: error.code,
                    detail: error.detail
                })
            }
        })
    }
}