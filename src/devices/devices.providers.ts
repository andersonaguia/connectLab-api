import { DataSource } from 'typeorm';
import { DeviceEntity } from './entities/device.entity';
import { InfoEntity } from './entities/info.entity';

export const deviceProviders = [
  {
    provide: 'DEVICE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DeviceEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'DEVICE_INFO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(InfoEntity),
    inject: ['DATA_SOURCE'],
  }
];