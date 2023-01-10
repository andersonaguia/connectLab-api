import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { AuthService } from 'src/core/auth/auth.service';
import { addDeviceToUserDTO } from '../dto/add-device-to-user.dto';
import { UserDevicesEntity } from '../entities/user-devices.entity';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { UserDeviceLocationEntity } from '../entities/user-devices-location.entity';

@Injectable()
export class UsersService {
  constructor(private authService: AuthService,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
    @Inject('USER_DEVICES_REPOSITORY')
    private userDevicesRepository: Repository<UserDevicesEntity>,
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<DeviceEntity>,
    @Inject('USER_DEVICES_LOCATION_REPOSITORY')
    private userDevicesLocationRepository: Repository<UserDeviceLocationEntity>
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

        if (getUser) {
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

  async addDeviceToUser(deviceData: addDeviceToUserDTO, req) {
    const { user } = req;
    const { deviceId, local, room } = deviceData;
    return new Promise(async (resolve, reject) => {
      try {
        const deviceExists = await this.deviceExists(deviceId);

        if (deviceExists) {
          const device = this.deviceRepository.create();
          device.id = deviceId;

          const localDevice = this.userDevicesLocationRepository.create();
          localDevice.deviceLocation = local;

          const userDevice = this.userDevicesRepository.create();
          userDevice.isOn = true;
          userDevice.userId = user.id;
          userDevice.information = "Dispositivo Ligado";
          userDevice.device = device;
          userDevice.location = localDevice;
          userDevice.room = room;

          const userDeviceToCreate = await this.userDevicesRepository.save(userDevice);

          resolve(userDeviceToCreate);
        }
        //throw new NotFoundException('deviceId is not found');
      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail
        })
      }
    })
  }

  async findUserDeviceDetail(deviceId: number, req) {
    const device = await this.userDevicesRepository.findOne({
      where: {
        userId: req.user.id,
        id: deviceId
      }
    })
    /*if (user && (await user.checkPassword(password))) {
        return user;
    }*/
    if (device) {
      
      return device;
    }
    return null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async deviceExists(deviceId: number) {
    const device = await this.deviceRepository.findOne({
      where: {
        id: deviceId,
      }
    })

    if (device) {
      return true;
    }
    return false;
  }
}
