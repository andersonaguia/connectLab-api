"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDevicesEntity = void 0;
var device_entity_1 = require("../../devices/entities/device.entity");
var typeorm_1 = require("typeorm");
var user_devices_location_entity_1 = require("./user-devices-location.entity");
var user_entity_1 = require("./user.entity");
var UserDevicesEntity = /** @class */ (function () {
    function UserDevicesEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserDevicesEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], UserDevicesEntity.prototype, "isOn");
    __decorate([
        (0, typeorm_1.Column)({ length: 50 })
    ], UserDevicesEntity.prototype, "information");
    __decorate([
        (0, typeorm_1.Column)({ length: 50 })
    ], UserDevicesEntity.prototype, "room");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_devices_location_entity_1.UserDeviceLocationEntity; }, function (userDeviceLocation) { return userDeviceLocation.deviceLocation; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'deviceLocation' })
    ], UserDevicesEntity.prototype, "location");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return device_entity_1.DeviceEntity; }, function (device) { return device._id; }, { eager: true, onDelete: 'SET NULL' }),
        (0, typeorm_1.JoinColumn)({ name: 'device_id' })
    ], UserDevicesEntity.prototype, "device");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.UserEntity; }, function (user) { return user.id; }, { eager: true, onDelete: 'SET NULL' }),
        (0, typeorm_1.JoinColumn)({ name: 'user_id' })
    ], UserDevicesEntity.prototype, "userId");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], UserDevicesEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], UserDevicesEntity.prototype, "updatedAt");
    UserDevicesEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'user_devices' })
    ], UserDevicesEntity);
    return UserDevicesEntity;
}());
exports.UserDevicesEntity = UserDevicesEntity;
