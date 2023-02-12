"use strict";
exports.__esModule = true;
exports.userProviders = void 0;
var address_entity_1 = require("./entities/address.entity");
var user_devices_location_entity_1 = require("./entities/user-devices-location.entity");
var user_devices_entity_1 = require("./entities/user-devices.entity");
var user_entity_1 = require("./entities/user.entity");
exports.userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(user_entity_1.UserEntity); },
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'ADDRESS_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(address_entity_1.AddressEntity); },
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'USER_DEVICES_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(user_devices_entity_1.UserDevicesEntity); },
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'USER_DEVICES_LOCATION_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(user_devices_location_entity_1.UserDeviceLocationEntity); },
        inject: ['DATA_SOURCE']
    }
];
