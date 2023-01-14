import { Inject, Injectable } from '@nestjs/common';
import { Equal, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { AuthService } from 'src/core/auth/auth.service';
import { addDeviceToUserDTO } from '../dto/add-device-to-user.dto';
import { UserDevicesEntity } from '../entities/user-devices.entity';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { UserDeviceLocationEntity } from '../entities/user-devices-location.entity';
import { userDeviceDetailDTO } from '../dto/user-device-detail.dto';
import { UpdateUserDeviceDTO } from '../dto/update-user-device.dto';
import { stat } from 'fs';
import { DeviceDataDTO } from '../dto/device-data.dto';

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

  async findUser(req: any): Promise<UserEntity> {
    const { user } = req;
    return new Promise(async (resolve, reject) => {
      try {
        const userExists = await this.userRepository.findOne({
          where: {
            id: Equal(user.id)
          },
        })

        if (userExists) {
          if (userExists.phone?.length < 1) {
            delete userExists.phone;
          }
          delete userExists.password;
          delete userExists.salt;
          resolve(userExists);
        }

        resolve(null);
      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail
        });
      }
    })
  }

  async addDeviceToUser(deviceData: addDeviceToUserDTO, req: any): Promise<UserDevicesEntity> {
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

          if (!localId) {
            resolve(null);
          } else {
            const idLocal = new UserDeviceLocationEntity();
            idLocal.id = localId.id;

            const userDevice = this.userDevicesRepository.create();
            userDevice.isOn = true;
            userDevice.userId = user.id;
            userDevice.information = "Dispositivo Ligado";
            userDevice.device = device;
            userDevice.location = idLocal;
            userDevice.room = room;
            userDevice.createdAt = new Date();
            userDevice.updatedAt = new Date();

            const deviceCreated = await this.userDevicesRepository.save(userDevice);
            resolve(deviceCreated);
          }
        }
        resolve(null);
      } catch (error) {
        console.log("catch")
        reject({
          code: error.code,
          detail: error.detail
        })
      }
    })
  }

  findUserDeviceById(userDeviceId: number, req: any): Promise<userDeviceDetailDTO> {
    const { id } = req.user;
    return new Promise(async (resolve, reject) => {
      try {
        const userDevice = await this.userDeviceExists(userDeviceId);

        if ((userDevice !== null) && userDevice.userId.id === id) {
          const deviceDetails = this.modelDetailsUserDevices(userDevice);
          resolve(deviceDetails);
        }
        resolve(null);

      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail
        })
      }
    })

  }

  async findAllUserDevices(req: any, page: number, limit: number, local: number): Promise<userDeviceDetailDTO[]> {
    const userId = req.user.id;
    return new Promise(async (resolve, reject) => {
      try {
        let allUserDevices: UserDevicesEntity[] = [];
        if (local === null) {
          allUserDevices = await this.userDevicesRepository.find({
            where: {
              userId: Equal(userId)
            },
            skip: (page - 1) * limit,
            take: limit
          })
        } else {
          allUserDevices = await this.userDevicesRepository.find({
            where: {
              userId: Equal(userId),
              location: Equal(local)
            },
            skip: (page - 1) * limit,
            take: limit
          })
        }
        const userDevices: userDeviceDetailDTO[] = [];
        if (allUserDevices.length > 0) {

          allUserDevices.map((userDevice) => {
            userDevices.push(this.modelDetailsUserDevices(userDevice));
          })

          resolve(userDevices);
        }
        resolve(userDevices);
      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail
        })
      }
    })
  }

  async deviceExists(deviceId: number): Promise<boolean> {
    const device = await this.deviceRepository.findOne({
      where: {
        _id: Equal(deviceId),
      }
    })

    if (device) {
      return true;
    }
    return false;
  }

  async userDeviceExists(userDeviceId: number): Promise<UserDevicesEntity> {
    const userDevice: UserDevicesEntity = await this.userDevicesRepository.findOne({
      where: {
        id: Equal(userDeviceId),
      }
    })

    if (userDevice) {
      return userDevice;
    }
    return null;
  }

  modelDetailsUserDevices(userDevice: any): userDeviceDetailDTO {
    const deviceDetails: userDeviceDetailDTO = new userDeviceDetailDTO();
    deviceDetails.id = userDevice.id;
    deviceDetails.name = userDevice.device.name;
    deviceDetails.type = userDevice.device.type;
    deviceDetails.madeBy = userDevice.device.madeBy;
    deviceDetails.isOn = userDevice.isOn;
    deviceDetails.information = userDevice.information;
    deviceDetails.ipAddress = userDevice.device.info.ip_address;
    deviceDetails.macAddress = userDevice.device.info.mac_address;

    return deviceDetails;
  }

  async removeUserDevice(id: number, req: any): Promise<number> {
    const userId = req.user.id;
    return new Promise(async (resolve, reject) => {
      try {
        const { affected } = await this.userDevicesRepository.delete({
          id: id,
          userId: userId
        })
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

  updateDeviceStatus(deviceData: DeviceDataDTO, req: any): Promise<number> {
    const { user } = req;
    const { deviceId, isOn } = deviceData;
    const dataToUpdate = new UpdateUserDeviceDTO()
    dataToUpdate.isOn = isOn;
    isOn ? dataToUpdate.information = "Dispositivo Ligado" : dataToUpdate.information = "Dispositivo Desligado";
    dataToUpdate.updatedAt = new Date();

    return new Promise(async (resolve, reject) => {
      try {
        const { affected } = await this.userDevicesRepository.update({ id: deviceId, userId: user.id }, dataToUpdate);
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
