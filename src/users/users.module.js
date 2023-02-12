"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@nestjs/common");
var users_service_1 = require("./services/users.service");
var users_controller_1 = require("./controllers/users.controller");
var users_providers_1 = require("./users.providers");
var database_providers_1 = require("../core/database/database.providers");
var auth_service_1 = require("../core/auth/services/auth.service");
var jwt_1 = require("@nestjs/jwt");
var devices_providers_1 = require("../devices/devices.providers");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            controllers: [users_controller_1.UsersController],
            providers: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], database_providers_1.databaseProviders, true), users_providers_1.userProviders, true), devices_providers_1.deviceProviders, true), [
                jwt_1.JwtService,
                users_service_1.UsersService,
                auth_service_1.AuthService
            ], false)
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
