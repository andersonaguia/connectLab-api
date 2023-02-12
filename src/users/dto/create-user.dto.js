"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var match_decorator_1 = require("../../core/constraints/match.decorator");
var user_address_dto_1 = require("./user-address.dto");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: 'fullName cannot be empty' }),
        (0, class_validator_1.IsString)({ message: 'fullName must be a string' })
    ], CreateUserDto.prototype, "fullName");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'photoURL must be a string' })
    ], CreateUserDto.prototype, "photoUrl");
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: 'email cannot be empty' }),
        (0, class_validator_1.IsEmail)({}, {
            message: 'email must be a valid email'
        })
    ], CreateUserDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'password must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'password cannot be empty' }),
        (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
            message: 'The password must contain at least 8 characters, including at least one letter, one number and one special character'
        })
    ], CreateUserDto.prototype, "password");
    __decorate([
        (0, match_decorator_1.Match)('password', { message: 'passwords do not match' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'passwordConfirmation cannot be empty' })
    ], CreateUserDto.prototype, "passwordConfirmation");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'phone must be a string' })
    ], CreateUserDto.prototype, "phone");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return user_address_dto_1.UserAddressDTO; })
    ], CreateUserDto.prototype, "address");
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
