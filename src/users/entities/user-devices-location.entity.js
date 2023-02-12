"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDeviceLocationEntity = void 0;
var typeorm_1 = require("typeorm");
var UserDeviceLocationEntity = /** @class */ (function () {
    function UserDeviceLocationEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserDeviceLocationEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            length: 30,
            unique: true
        })
    ], UserDeviceLocationEntity.prototype, "deviceLocation");
    UserDeviceLocationEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'user_devices_location' })
    ], UserDeviceLocationEntity);
    return UserDeviceLocationEntity;
}());
exports.UserDeviceLocationEntity = UserDeviceLocationEntity;
