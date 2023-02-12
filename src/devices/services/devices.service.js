"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DevicesService = void 0;
var common_1 = require("@nestjs/common");
var devices_array_1 = require("../utils/devices.array");
var DevicesService = /** @class */ (function () {
    function DevicesService(jwtService, deviceRepository, devicesLocationRepository) {
        this.jwtService = jwtService;
        this.deviceRepository = deviceRepository;
        this.devicesLocationRepository = devicesLocationRepository;
    }
    DevicesService.prototype.createDevice = function (deviceData) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var device, deviceCreated, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        device = this.deviceRepository.create(deviceData);
                        return [4 /*yield*/, this.deviceRepository.save(device)];
                    case 1:
                        deviceCreated = _a.sent();
                        resolve(deviceCreated);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject({ code: error_1.code, detail: error_1.detail });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DevicesService.prototype.createDeviceLocal = function (locals) {
        var _this = this;
        var local = locals.local;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var localDevice, localDeviceCreated, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        localDevice = this.devicesLocationRepository.create();
                        localDevice.deviceLocation = local.toUpperCase();
                        return [4 /*yield*/, this.devicesLocationRepository.save(localDevice)];
                    case 1:
                        localDeviceCreated = _a.sent();
                        resolve(localDeviceCreated);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        reject(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DevicesService.prototype.findAllLocals = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var allLocals, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.devicesLocationRepository.find()];
                    case 1:
                        allLocals = _a.sent();
                        resolve(allLocals);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        reject(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DevicesService.prototype.findAllDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var allDevices, devices, error_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, this.findDevices()];
                                case 1:
                                    allDevices = _a.sent();
                                    if (allDevices.length > 0) {
                                        resolve(allDevices);
                                    }
                                    this.insertDevices();
                                    return [4 /*yield*/, this.findDevices()];
                                case 2:
                                    devices = _a.sent();
                                    resolve(devices);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_4 = _a.sent();
                                    reject(error_4);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DevicesService.prototype.insertDevices = function () {
        var _this = this;
        var devices = devices_array_1.devicesArray;
        devices.map(function (device) { return __awaiter(_this, void 0, void 0, function () {
            var deviceToInsert, deviceCreated, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        deviceToInsert = this.deviceRepository.create(device);
                        return [4 /*yield*/, this.deviceRepository.save(deviceToInsert)];
                    case 1:
                        deviceCreated = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, error_5];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return;
    };
    DevicesService.prototype.findDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deviceRepository.find()];
                    case 1:
                        devices = _a.sent();
                        return [2 /*return*/, devices];
                }
            });
        });
    };
    DevicesService = __decorate([
        (0, common_1.Injectable)(),
        __param(1, (0, common_1.Inject)('DEVICE_REPOSITORY')),
        __param(2, (0, common_1.Inject)('DEVICES_LOCATION_REPOSITORY'))
    ], DevicesService);
    return DevicesService;
}());
exports.DevicesService = DevicesService;
