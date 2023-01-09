import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateDeviceDTO } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';
import { DeviceEntity } from '../entities/device.entity';
import { InfoEntity } from '../entities/info.entity';

@Injectable()
export class DevicesService {
  constructor(private jwtService: JwtService,
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<DeviceEntity>,
    @Inject('DEVICE_INFO_REPOSITORY')
    private deviceInfoRepository: Repository<InfoEntity>
  ) { }
  
  create(deviceData: CreateDeviceDTO): Promise<DeviceEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, type, madeBy, photoUrl, info } = deviceData;

        const deviceInfo = this.deviceInfoRepository.create();
        deviceInfo.ipAddress = info.ipAddress;
        deviceInfo.macAddress = info.macAddress;
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

  findAll() {
    return `This action returns all devices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
