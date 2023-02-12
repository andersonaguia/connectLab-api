"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChangePasswordDTO = void 0;
var class_validator_1 = require("class-validator");
var match_decorator_1 = require("../../constraints/match.decorator");
var ChangePasswordDTO = /** @class */ (function () {
    function ChangePasswordDTO() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: 'email cannot be empty' }),
        (0, class_validator_1.IsString)({ message: 'email must be a string' }),
        (0, class_validator_1.IsEmail)({ message: 'email must be a valid e-mail' }),
        (0, class_validator_1.MaxLength)(30)
    ], ChangePasswordDTO.prototype, "email");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'oldPassword must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'oldPassword cannot be empty' })
    ], ChangePasswordDTO.prototype, "oldPassword");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'newPassword must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'newPassword cannot be empty' }),
        (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
            message: 'The newPassword must contain at least 8 characters, including at least one letter, one number and one special character'
        })
    ], ChangePasswordDTO.prototype, "newPassword");
    __decorate([
        (0, class_validator_1.IsString)({ message: 'newPasswordConfirmation must be a string' }),
        (0, class_validator_1.IsNotEmpty)({ message: 'newPasswordConfirmation cannot be empty' }),
        (0, match_decorator_1.Match)('newPassword', { message: 'new passwords do not match' })
    ], ChangePasswordDTO.prototype, "newPasswordConfirmation");
    return ChangePasswordDTO;
}());
exports.ChangePasswordDTO = ChangePasswordDTO;
