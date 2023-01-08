import { Inject, Injectable } from '@nestjs/common';
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

  async findOne(payload):Promise <UserEntity> {
    const { user } = payload;
   
    const getUser = await this.userRepository.findOne({
      where: {
        id: user.id
      },
    })
    delete getUser.password;
    delete getUser.salt;
  
    return getUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
