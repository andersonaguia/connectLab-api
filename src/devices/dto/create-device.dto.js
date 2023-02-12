"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateDeviceDTO = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var device_info_dto_1 = require("./device-info.dto");
var CreateDeviceDTO = /** @class */ (function () {
    function CreateDeviceDTO() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: 'name cannot be empty' }),
        (0, class_validator_1.IsString)({ message: 'name must be a string' }),
        (0, class_validator_1.MaxLength)(100, { message: "name cannot be more than 100 characters" })
    ], CreateDeviceDTO.prototype, "name");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'type must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'type cannot be empty' }),
        (0, class_validator_1.MaxLength)(100, { message: "type cannot be more than 100 characters" })
    ], CreateDeviceDTO.prototype, "type");
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: 'madeBy cannot be empty' }),
        (0, class_validator_1.IsString)({ message: 'madeBy must be a string' }),
        (0, class_validator_1.MaxLength)(100, { message: "madeBy cannot be more than 100 characters" })
    ], CreateDeviceDTO.prototype, "madeBy");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'photoUrl must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'photoUrl cannot be empty' })
    ], CreateDeviceDTO.prototype, "photoUrl");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return device_info_dto_1.DeviceInfoDTO; })
    ], CreateDeviceDTO.prototype, "info");
    return CreateDeviceDTO;
}());
exports.CreateDeviceDTO = CreateDeviceDTO;
