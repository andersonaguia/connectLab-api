"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeviceInfoDTO = void 0;
var class_validator_1 = require("class-validator");
var DeviceInfoDTO = /** @class */ (function () {
    function DeviceInfoDTO() {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: 'virtual_id must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'virtual_id cannot be empty' }),
        (0, class_validator_1.MaxLength)(50, { message: "virtual_id cannot be more than 100 characters" })
    ], DeviceInfoDTO.prototype, "virtual_id");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'ip_address must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'ip_address cannot be empty' }),
        (0, class_validator_1.MaxLength)(30, { message: "ip_address cannot be more than 100 characters" })
    ], DeviceInfoDTO.prototype, "ip_address");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'mac_address must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'mac_address cannot be empty' }),
        (0, class_validator_1.MaxLength)(50, { message: "mac_address cannot be more than 100 characters" })
    ], DeviceInfoDTO.prototype, "mac_address");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'signal must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'signal cannot be empty' }),
        (0, class_validator_1.MaxLength)(10, { message: "signal cannot be more than 100 characters" })
    ], DeviceInfoDTO.prototype, "signal");
    return DeviceInfoDTO;
}());
exports.DeviceInfoDTO = DeviceInfoDTO;
