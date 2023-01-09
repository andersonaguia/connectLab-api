import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { AuthService } from 'src/core/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(private authService: AuthService,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>
  ) { }

  async findOne(req): Promise<UserEntity> {
    const { user } = req;

    return new Promise(async (resolve, reject) => {
      try {
        const getUser = await this.userRepository.findOne({
          where: {
            id: user.id
          },
        })

        if(getUser){
          if (getUser.phone?.length < 1) {
            delete getUser.phone;
          }
      
          delete getUser.password;
          delete getUser.salt;
      
          resolve(getUser);
        }

      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail
        });
      }
    })    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
