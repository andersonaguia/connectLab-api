import { DataSource } from 'typeorm';
import { DeviceEntity } from './entities/device.entity';
import { DeviceInfoEntity } from './entities/device-info.entity';
import { UserDeviceLocationEntity } from 'src/users/entities/user-devices-location.entity';

export const deviceProviders = [
  {
    provide: 'DEVICE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DeviceEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'DEVICE_INFO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DeviceInfoEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'DEVICES_LOCATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserDeviceLocationEntity),
    inject: ['DATA_SOURCE'],
  }
];