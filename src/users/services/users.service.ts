import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Equal, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { AuthService } from 'src/core/auth/auth.service';
import { addDeviceToUserDTO } from '../dto/add-device-to-user.dto';
import { UserDevicesEntity } from '../entities/user-devices.entity';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { UserDeviceLocationEntity } from '../entities/user-devices-location.entity';
import { userDeviceDetailDTO } from '../dto/user-device-detail.dto';

@Injectable()
export class UsersService {
  constructor(
    private authService: AuthService,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
    @Inject('USER_DEVICES_REPOSITORY')
    private userDevicesRepository: Repository<UserDevicesEntity>,
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<DeviceEntity>,
    @Inject('USER_DEVICES_LOCATION_REPOSITORY')
    private userDevicesLocationRepository: Repository<UserDeviceLocationEntity>
  ) { }

  async findUser(req): Promise<UserEntity> {
    const { user } = req;
    return new Promise(async (resolve, reject) => {
      try {
        const getUser = await this.userRepository.findOne({
          where: {
            id: Equal(user.id)
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
          device._id = deviceId;
          const deviceLocals = await this.userDevicesLocationRepository.find();
          const localId = deviceLocals.find(el => el.deviceLocation === local);

          const idLocal = new UserDeviceLocationEntity();
          idLocal.id = localId.id;

          const userDevice = this.userDevicesRepository.create();
          userDevice.isOn = true;
          userDevice.userId = user.id;
          userDevice.information = "Dispositivo Ligado";
          userDevice.device = device;
          userDevice.location = idLocal;
          userDevice.room = room;

          const deviceCreated = await this.userDevicesRepository.save(userDevice);

          resolve(deviceCreated);
        }
        reject({
          code: 404,
          detail: 'device id is not found'
        })
      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail
        })
      }
    })
  }

  async findUserDeviceDetail(deviceId: number, req) {
    const { id } = req.user;
    const userDevice: UserDevicesEntity = await this.userDevicesRepository.findOne({
      where:
      {
        id: deviceId,
        userId: Equal(id)
      }
    })

    if (userDevice) {
      const deviceDetails = this.deviceToReturn(userDevice);

      return deviceDetails;
    }
    throw new NotFoundException('Device id is not found.')
  }

  async findAllUserDevices(req, page: number, limit: number, local: number) {
    const allUserDevices: UserDevicesEntity[] = await this.userDevicesRepository.find({
      where: {
        userId: Equal(req.user.id),
        location: Equal(local)
      },
      skip: (page - 1) * limit,
      take: limit
    })

    if (allUserDevices.length > 0) {
      const userDevices = [];
      allUserDevices.map((userDevice) => {
        userDevices.push(this.deviceToReturn(userDevice));
      })
      return userDevices;
    }
    return null;
  }

  async deviceExists(deviceId: number) {
    const device = await this.deviceRepository.findOne({
      where: {
        _id: deviceId,
      }
    })

    if (device) {
      return true;
    }
    return false;
  }

  deviceToReturn(userDevice) {
    const deviceDetails: userDeviceDetailDTO = new userDeviceDetailDTO();
    deviceDetails.id = userDevice.id;
    deviceDetails.name = userDevice.device.name;
    deviceDetails.type = userDevice.device.type;
    deviceDetails.madeBy = userDevice.device.madeBy;
    deviceDetails.isOn = userDevice.isOn;
    deviceDetails.information = userDevice.information;
    deviceDetails.ipAddress = userDevice.device.info.ipAddress;
    deviceDetails.macAddress = userDevice.device.info.macAddress;

    return deviceDetails;
  }
}
