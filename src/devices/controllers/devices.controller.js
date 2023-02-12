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
exports.DevicesController = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../../core/auth/guards/jwt-auth.guard");
var roles_guard_1 = require("../../core/auth/guards/roles/roles.guard");
var roles_decorator_1 = require("../../core/auth/guards/decorators/roles.decorator");
var user_role_1 = require("../../users/enum/user.role");
var nest_response_builder_1 = require("../../core/http/nest-response-builder");
var DevicesController = /** @class */ (function () {
    function DevicesController(devicesService) {
        this.devicesService = devicesService;
    }
    DevicesController.prototype.createDevice = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.devicesService.createDevice(device)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DevicesController.prototype.createDeviceLocal = function (local) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.devicesService.createDeviceLocal(local)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, new nest_response_builder_1.NestResponseBuilder()
                                    .withStatus(common_1.HttpStatus.CREATED)
                                    .withBody({
                                    statusCode: common_1.HttpStatus.CREATED,
                                    message: 'Successful registration'
                                })
                                    .build()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.code === "23505") {
                            if (error_1.code === "23505") {
                                return [2 /*return*/, new nest_response_builder_1.NestResponseBuilder()
                                        .withStatus(common_1.HttpStatus.CONFLICT)
                                        .withBody({
                                        code: error_1.code,
                                        detail: error_1.detail
                                    })
                                        .build()];
                            }
                        }
                        return [2 /*return*/, new nest_response_builder_1.NestResponseBuilder()
                                .withStatus(common_1.HttpStatus.BAD_REQUEST)
                                .withBody({
                                code: error_1.code,
                                detail: error_1.detail
                            })
                                .build()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DevicesController.prototype.findAllDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.devicesService.findAllDevices()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, new nest_response_builder_1.NestResponseBuilder()
                                    .withStatus(common_1.HttpStatus.OK)
                                    .withBody(result)
                                    .build()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, new nest_response_builder_1.NestResponseBuilder()
                                .withStatus(common_1.HttpStatus.BAD_REQUEST)
                                .withBody({
                                code: error_2.code,
                                detail: error_2.detail
                            })
                                .build()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DevicesController.prototype.findAllLocals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.devicesService.findAllLocals()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, new nest_response_builder_1.NestResponseBuilder()
                                    .withStatus(common_1.HttpStatus.OK)
                                    .withBody(result)
                                    .build()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, new nest_response_builder_1.NestResponseBuilder()
                                .withStatus(common_1.HttpStatus.BAD_REQUEST)
                                .withBody({
                                code: error_3.code,
                                detail: error_3.detail
                            })
                                .build()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
        (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
        (0, common_1.Post)('/devices'),
        __param(0, (0, common_1.Body)())
    ], DevicesController.prototype, "createDevice");
    __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
        (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
        (0, common_1.Post)('/devices/locals'),
        __param(0, (0, common_1.Body)())
    ], DevicesController.prototype, "createDeviceLocal");
    __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
        (0, common_1.Get)('/devices/all')
    ], DevicesController.prototype, "findAllDevices");
    __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
        (0, common_1.Get)('/devices/alllocals')
    ], DevicesController.prototype, "findAllLocals");
    DevicesController = __decorate([
        (0, common_1.Controller)()
    ], DevicesController);
    return DevicesController;
}());
exports.DevicesController = DevicesController;
