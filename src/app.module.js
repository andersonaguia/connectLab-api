"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var users_module_1 = require("./users/users.module");
var devices_module_1 = require("./devices/devices.module");
var transform_response_interceptor_1 = require("./core/http/transform-response-interceptor");
var core_1 = require("@nestjs/core");
var auth_module_1 = require("./core/auth/auth.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                auth_module_1.AuthModule,
                users_module_1.UsersModule,
                devices_module_1.DevicesModule
            ],
            controllers: [],
            providers: [
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: common_1.ClassSerializerInterceptor
                },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: transform_response_interceptor_1.TransformResponseInterceptor
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
