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
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var user_devices_location_entity_1 = require("../entities/user-devices-location.entity");
var user_device_detail_dto_1 = require("../dto/user-device-detail.dto");
var update_user_device_dto_1 = require("../dto/update-user-device.dto");
var UsersService = /** @class */ (function () {
    function UsersService(authService, userRepository, userDevicesRepository, deviceRepository, userDevicesLocationRepository) {
        this.authService = authService;
        this.userRepository = userRepository;
        this.userDevicesRepository = userDevicesRepository;
        this.deviceRepository = deviceRepository;
        this.userDevicesLocationRepository = userDevicesLocationRepository;
    }
    UsersService.prototype.findUser = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            var _this = this;
            return __generator(this, function (_a) {
                user = req.user;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var userExists, error_1;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.userRepository.findOne({
                                            where: {
                                                id: (0, typeorm_1.Equal)(user.id)
                                            }
                                        })];
                                case 1:
                                    userExists = _b.sent();
                                    if (userExists) {
                                        if (((_a = userExists.phone) === null || _a === void 0 ? void 0 : _a.length) < 1) {
                                            delete userExists.phone;
                                        }
                                        delete userExists.id;
                                        delete userExists.createdAt;
                                        delete userExists.updatedAt;
                                        delete userExists.active;
                                        delete userExists.role;
                                        delete userExists.address.id;
                                        delete userExists.password;
                                        delete userExists.salt;
                                        resolve(userExists);
                                    }
                                    resolve(null);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_1 = _b.sent();
                                    reject(error_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    UsersService.prototype.addDeviceToUser = function (deviceData, req) {
        return __awaiter(this, void 0, void 0, function () {
            var user, deviceId, local, room;
            var _this = this;
            return __generator(this, function (_a) {
                user = req.user;
                deviceId = deviceData.deviceId, local = deviceData.local, room = deviceData.room;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var deviceExists, device, deviceLocal, location_1, userDevice, deviceCreated, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 6, , 7]);
                                    return [4 /*yield*/, this.deviceExists(deviceId)];
                                case 1:
                                    deviceExists = _a.sent();
                                    if (!deviceExists) return [3 /*break*/, 5];
                                    device = this.deviceRepository.create();
                                    device._id = deviceId;
                                    return [4 /*yield*/, this.userDevicesLocationRepository.findOne({
                                            where: {
                                                deviceLocation: (0, typeorm_1.Equal)(local.toUpperCase())
                                            }
                                        })];
                                case 2:
                                    deviceLocal = _a.sent();
                                    if (!!deviceLocal) return [3 /*break*/, 3];
                                    resolve(null);
                                    return [3 /*break*/, 5];
                                case 3:
                                    location_1 = new user_devices_location_entity_1.UserDeviceLocationEntity();
                                    location_1.id = deviceLocal.id;
                                    userDevice = this.userDevicesRepository.create();
                                    userDevice.isOn = true;
                                    userDevice.userId = user.id;
                                    userDevice.information = "Dispositivo Ligado";
                                    userDevice.device = device;
                                    userDevice.location = location_1;
                                    userDevice.room = room;
                                    userDevice.createdAt = new Date();
                                    userDevice.updatedAt = new Date();
                                    return [4 /*yield*/, this.userDevicesRepository.save(userDevice)];
                                case 4:
                                    deviceCreated = _a.sent();
                                    resolve(deviceCreated);
                                    _a.label = 5;
                                case 5:
                                    resolve(null);
                                    return [3 /*break*/, 7];
                                case 6:
                                    error_2 = _a.sent();
                                    reject(error_2);
                                    return [3 /*break*/, 7];
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    UsersService.prototype.findUserDeviceById = function (userDeviceId, req) {
        var _this = this;
        var id = req.user.id;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var userDevice, deviceDetails, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userDeviceExists(userDeviceId)];
                    case 1:
                        userDevice = _a.sent();
                        if ((userDevice !== null) && userDevice.userId.id === id) {
                            deviceDetails = this.modelDetailsUserDevices(userDevice);
                            resolve(deviceDetails);
                        }
                        resolve(null);
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
    UsersService.prototype.findAllUserDevices = function (req, page, limit, local) {
        return __awaiter(this, void 0, void 0, function () {
            var userId;
            var _this = this;
            return __generator(this, function (_a) {
                userId = req.user.id;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var allUserDevices, userDevices_1, error_4;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 5, , 6]);
                                    allUserDevices = [];
                                    if (!(local === null)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.userDevicesRepository.find({
                                            where: {
                                                userId: (0, typeorm_1.Equal)(userId)
                                            },
                                            skip: (page - 1) * limit,
                                            take: limit
                                        })];
                                case 1:
                                    allUserDevices = _a.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, this.userDevicesRepository.find({
                                        where: {
                                            userId: (0, typeorm_1.Equal)(userId),
                                            location: (0, typeorm_1.Equal)(local)
                                        },
                                        skip: (page - 1) * limit,
                                        take: limit
                                    })];
                                case 3:
                                    allUserDevices = _a.sent();
                                    _a.label = 4;
                                case 4:
                                    userDevices_1 = [];
                                    if (allUserDevices.length > 0) {
                                        allUserDevices.map(function (userDevice) {
                                            userDevices_1.push(_this.modelDetailsUserDevices(userDevice));
                                        });
                                        resolve(userDevices_1);
                                    }
                                    resolve(userDevices_1);
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_4 = _a.sent();
                                    reject(error_4);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    UsersService.prototype.deviceExists = function (deviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var device;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deviceRepository.findOne({
                            where: {
                                _id: (0, typeorm_1.Equal)(deviceId)
                            }
                        })];
                    case 1:
                        device = _a.sent();
                        if (device) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    UsersService.prototype.userDeviceExists = function (userDeviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var userDevice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userDevicesRepository.findOne({
                            where: {
                                id: (0, typeorm_1.Equal)(userDeviceId)
                            }
                        })];
                    case 1:
                        userDevice = _a.sent();
                        if (userDevice) {
                            return [2 /*return*/, userDevice];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    UsersService.prototype.modelDetailsUserDevices = function (userDevice) {
        var deviceDetails = new user_device_detail_dto_1.userDeviceDetailDTO();
        deviceDetails.id = userDevice.id;
        deviceDetails.name = userDevice.device.name;
        deviceDetails.type = userDevice.device.type;
        deviceDetails.madeBy = userDevice.device.madeBy;
        deviceDetails.isOn = userDevice.isOn;
        deviceDetails.information = userDevice.information;
        deviceDetails.ipAddress = userDevice.device.info.ip_address;
        deviceDetails.macAddress = userDevice.device.info.mac_address;
        return deviceDetails;
    };
    UsersService.prototype.removeUserDevice = function (id, req) {
        return __awaiter(this, void 0, void 0, function () {
            var userId;
            var _this = this;
            return __generator(this, function (_a) {
                userId = req.user.id;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var affected, error_5;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.userDevicesRepository["delete"]({
                                            id: id,
                                            userId: userId
                                        })];
                                case 1:
                                    affected = (_a.sent()).affected;
                                    if (affected === 0) {
                                        resolve(affected);
                                    }
                                    resolve(affected);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_5 = _a.sent();
                                    reject(error_5);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    UsersService.prototype.updateDeviceStatus = function (deviceData, req) {
        var _this = this;
        var user = req.user;
        var deviceId = deviceData.deviceId, isOn = deviceData.isOn;
        var dataToUpdate = new update_user_device_dto_1.UpdateUserDeviceDTO();
        dataToUpdate.isOn = isOn;
        isOn ? dataToUpdate.information = "Dispositivo Ligado" : dataToUpdate.information = "Dispositivo Desligado";
        dataToUpdate.updatedAt = new Date();
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var affected, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userDevicesRepository.update({ id: deviceId, userId: user.id }, dataToUpdate)];
                    case 1:
                        affected = (_a.sent()).affected;
                        if (affected === 0) {
                            resolve(affected);
                        }
                        resolve(affected);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        reject(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    UsersService = __decorate([
        (0, common_1.Injectable)(),
        __param(1, (0, common_1.Inject)('USER_REPOSITORY')),
        __param(2, (0, common_1.Inject)('USER_DEVICES_REPOSITORY')),
        __param(3, (0, common_1.Inject)('DEVICE_REPOSITORY')),
        __param(4, (0, common_1.Inject)('USER_DEVICES_LOCATION_REPOSITORY'))
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
