import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateDeviceDTO } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';
import { DeviceEntity } from '../entities/device.entity';
import { DeviceInfoEntity } from '../entities/device-info.entity';
import { UserDeviceLocationEntity } from 'src/users/entities/user-devices-location.entity';
import { deviceLocals } from '../enum/locals.enum';
import { addDeviceLocalDTO } from '../dto/add-device-local.dto';
import { devicesArray } from '../utils/devices.array';

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
        const device = this.deviceRepository.create(deviceData);
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

  async findAllDevices(): Promise<DeviceEntity[]> {
    const allDevices = await this.findDevices();

    if (allDevices.length > 0) {
      return allDevices;
    }

    await this.insertDevices();

    const devices = await this.findDevices();

    return devices;

  }

  insertDevices() {
    const devices = devicesArray;

    devices.map(async (device) => {
      try {
        const deviceToInsert = await this.deviceRepository.create(device);
        const deviceCreated = await this.deviceRepository.save(deviceToInsert);
      } catch (error) {
        console.log(error);
      }
    })
    return
  }

  async findDevices() {
    const devices = await this.deviceRepository.find();
    return devices;
  }
}
