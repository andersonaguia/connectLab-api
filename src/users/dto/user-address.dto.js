"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserAddressDTO = void 0;
var class_validator_1 = require("class-validator");
var UserAddressDTO = /** @class */ (function () {
    function UserAddressDTO() {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: 'zipCode must be a string' }),
        (0, class_validator_1.MinLength)(8, { message: 'zipCode must contain 8 characters' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'zipCode cannot be empty' })
    ], UserAddressDTO.prototype, "zipCode");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'street must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'street cannot be empty' })
    ], UserAddressDTO.prototype, "street");
    __decorate([
        (0, class_validator_1.IsNumber)({}, { message: 'number must be a number' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'number cannot be empty' })
    ], UserAddressDTO.prototype, "number");
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: 'neighborhood cannot be empty' }),
        (0, class_validator_1.IsString)({ message: 'neighborhood must be a string' })
    ], UserAddressDTO.prototype, "neighborhood");
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: 'city cannot be empty' }),
        (0, class_validator_1.IsString)({ message: 'city must be a string' })
    ], UserAddressDTO.prototype, "city");
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: 'state cannot be empty' }),
        (0, class_validator_1.IsString)({ message: 'state must be a string' })
    ], UserAddressDTO.prototype, "state");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'complement must be a string' })
    ], UserAddressDTO.prototype, "complement");
    return UserAddressDTO;
}());
exports.UserAddressDTO = UserAddressDTO;
