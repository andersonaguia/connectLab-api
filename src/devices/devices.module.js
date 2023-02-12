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
exports.DevicesModule = void 0;
var common_1 = require("@nestjs/common");
var devices_service_1 = require("./services/devices.service");
var devices_controller_1 = require("./controllers/devices.controller");
var devices_providers_1 = require("./devices.providers");
var database_providers_1 = require("../core/database/database.providers");
var jwt_1 = require("@nestjs/jwt");
var DevicesModule = /** @class */ (function () {
    function DevicesModule() {
    }
    DevicesModule = __decorate([
        (0, common_1.Module)({
            controllers: [devices_controller_1.DevicesController],
            providers: __spreadArray(__spreadArray(__spreadArray([], database_providers_1.databaseProviders, true), devices_providers_1.deviceProviders, true), [
                jwt_1.JwtService,
                devices_service_1.DevicesService
            ], false)
        })
    ], DevicesModule);
    return DevicesModule;
}());
exports.DevicesModule = DevicesModule;
