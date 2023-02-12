"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeviceInfoEntity = void 0;
var typeorm_1 = require("typeorm");
var device_entity_1 = require("./device.entity");
var DeviceInfoEntity = /** @class */ (function () {
    function DeviceInfoEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DeviceInfoEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ length: 50 })
    ], DeviceInfoEntity.prototype, "virtual_id");
    __decorate([
        (0, typeorm_1.Column)({ length: 30 })
    ], DeviceInfoEntity.prototype, "ip_address");
    __decorate([
        (0, typeorm_1.Column)({ length: 50 })
    ], DeviceInfoEntity.prototype, "mac_address");
    __decorate([
        (0, typeorm_1.Column)({ length: 10 })
    ], DeviceInfoEntity.prototype, "signal");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return device_entity_1.DeviceEntity; }, function (device) { return device._id; })
    ], DeviceInfoEntity.prototype, "deviceId");
    DeviceInfoEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'device_info' })
    ], DeviceInfoEntity);
    return DeviceInfoEntity;
}());
exports.DeviceInfoEntity = DeviceInfoEntity;
