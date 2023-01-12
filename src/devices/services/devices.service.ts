import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateDeviceDTO } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';
import { DeviceEntity } from '../entities/device.entity';
import { DeviceInfoEntity } from '../entities/device-info.entity';
import { UserDeviceLocationEntity } from 'src/users/entities/user-devices-location.entity';
import { deviceLocals } from '../enum/locals.enum';
import { addDeviceLocalDTO } from '../dto/add-device-local.dto';

@Injectable()
export class DevicesService {
  constructor(private jwtService: JwtService,
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<DeviceEntity>,
    @Inject('DEVICE_INFO_REPOSITORY')
    private deviceInfoRepository: Repository<DeviceInfoEntity>,
    @Inject('DEVICES_LOCATION_REPOSITORY')
    private devicesLocationRepository: Repository<UserDeviceLocationEntity>
  ) { }

  createDevice(deviceData: CreateDeviceDTO): Promise<DeviceEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, type, madeBy, photoUrl, info } = deviceData;

        const deviceInfo = this.deviceInfoRepository.create();
        deviceInfo.virtual_id = info.virtual_id;
        deviceInfo.ip_address = info.ip_address;
        deviceInfo.mac_address = info.mac_address;
        deviceInfo.signal = info.signal;

        const device = this.deviceRepository.create();
        device.name = name;
        device.type = type;
        device.madeBy = madeBy;
        device.photoUrl = photoUrl;
        device.info = deviceInfo;
        const deviceCreated = await this.deviceRepository.save(device);

        resolve(deviceCreated);

      } catch (error) {
        reject({ code: error.code, detail: error.detail })
      }
    })
  }

  createDeviceLocal(locals: addDeviceLocalDTO) {
    const { local } = locals;
    return new Promise(async (resolve, reject) => {
      try {
        const localDevice = this.devicesLocationRepository.create();
        localDevice.deviceLocation = local;

        const localDeviceCreated = await this.devicesLocationRepository.save(localDevice);

        resolve(localDeviceCreated);

      } catch (error) {
        reject({ code: error.code, detail: error.detail })
      }
    })
  }
}
