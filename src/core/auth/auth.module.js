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
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var database_providers_1 = require("../database/database.providers");
var auth_service_1 = require("./services/auth.service");
var jwt_1 = require("@nestjs/jwt");
var auth_controller_1 = require("./controllers/auth.controller");
var users_providers_1 = require("../../users/users.providers");
var jwt_strategy_1 = require("./guards/strategy/jwt.strategy");
var config_1 = require("@nestjs/config");
var users_module_1 = require("../../users/users.module");
var devices_module_1 = require("../../devices/devices.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRET,
                    signOptions: {
                        expiresIn: 60 * 5 * 6
                    }
                }),
                config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
                users_module_1.UsersModule,
                devices_module_1.DevicesModule
            ],
            controllers: [auth_controller_1.AuthController],
            providers: __spreadArray(__spreadArray(__spreadArray([], database_providers_1.databaseProviders, true), users_providers_1.userProviders, true), [
                jwt_strategy_1.JwtStrategy,
                auth_service_1.AuthService
            ], false)
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
