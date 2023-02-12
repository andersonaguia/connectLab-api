"use strict";
exports.__esModule = true;
exports.deviceProviders = void 0;
var device_entity_1 = require("./entities/device.entity");
var device_info_entity_1 = require("./entities/device-info.entity");
var user_devices_location_entity_1 = require("../users/entities/user-devices-location.entity");
exports.deviceProviders = [
    {
        provide: 'DEVICE_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(device_entity_1.DeviceEntity); },
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'DEVICE_INFO_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(device_info_entity_1.DeviceInfoEntity); },
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'DEVICES_LOCATION_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(user_devices_location_entity_1.UserDeviceLocationEntity); },
        inject: ['DATA_SOURCE']
    }
];
