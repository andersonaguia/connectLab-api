import { DataSource } from 'typeorm';
import { AddressEntity } from './entities/address.entity';
import { UserDeviceLocationEntity } from './entities/user-devices-location.entity';
import { UserDevicesEntity } from './entities/user-devices.entity';
import { UserEntity } from './entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ADDRESS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AddressEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_DEVICES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserDevicesEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_DEVICES_LOCATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserDeviceLocationEntity),
    inject: ['DATA_SOURCE'],
  }
];