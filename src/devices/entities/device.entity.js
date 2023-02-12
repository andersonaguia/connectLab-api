"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeviceEntity = void 0;
var user_devices_entity_1 = require("../../users/entities/user-devices.entity");
var typeorm_1 = require("typeorm");
var device_info_entity_1 = require("./device-info.entity");
var DeviceEntity = /** @class */ (function () {
    function DeviceEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DeviceEntity.prototype, "_id");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], DeviceEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], DeviceEntity.prototype, "type");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], DeviceEntity.prototype, "madeBy");
    __decorate([
        (0, typeorm_1.Column)()
    ], DeviceEntity.prototype, "photoUrl");
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return device_info_entity_1.DeviceInfoEntity; }, function (info) { return info.id; }, { cascade: true, eager: true, onDelete: 'SET NULL' }),
        (0, typeorm_1.JoinColumn)({ name: 'deviceInfo_id' })
    ], DeviceEntity.prototype, "info");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return user_devices_entity_1.UserDevicesEntity; }, function (userDevice) { return userDevice.id; })
    ], DeviceEntity.prototype, "userDevice");
    DeviceEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'devices' })
    ], DeviceEntity);
    return DeviceEntity;
}());
exports.DeviceEntity = DeviceEntity;
