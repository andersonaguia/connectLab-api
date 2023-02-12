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
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var bcrypt = require("bcrypt");
var credentials_dto_1 = require("../dto/credentials.dto");
var address_entity_1 = require("../../../users/entities/address.entity");
var updateUserPassword_dto_1 = require("../dto/updateUserPassword.dto");
var token_dto_1 = require("../dto/token.dto");
var AuthService = /** @class */ (function () {
    function AuthService(jwtService, userRepository, addressRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
    }
    AuthService.prototype.signUp = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var fullName, photoUrl, email, password, phone, address, role, createAddress, user, _a, _b, userCreated, error_1;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, , 5]);
                                    if (userData.password != userData.passwordConfirmation) {
                                        resolve(null);
                                    }
                                    fullName = userData.fullName, photoUrl = userData.photoUrl, email = userData.email, password = userData.password, phone = userData.phone, address = userData.address, role = userData.role;
                                    createAddress = new address_entity_1.AddressEntity();
                                    createAddress.zipCode = address.zipCode;
                                    createAddress.street = address.street;
                                    createAddress.number = address.number;
                                    createAddress.neighborhood = address.neighborhood;
                                    createAddress.city = address.city;
                                    createAddress.state = address.state;
                                    createAddress.complement = address.complement;
                                    user = this.userRepository.create();
                                    user.fullName = fullName;
                                    photoUrl.length > 0 ? user.photoUrl = photoUrl : user.photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAKvlSuCAVIu5B45Fgjsdrasym0LWbSzbVQ&usqp=CAU";
                                    user.email = email;
                                    user.phone = phone;
                                    user.address = createAddress;
                                    user.active = true;
                                    user.role = role;
                                    _a = user;
                                    return [4 /*yield*/, bcrypt.genSalt(12)];
                                case 1:
                                    _a.salt = _c.sent();
                                    _b = user;
                                    return [4 /*yield*/, this.hashPassword(password, user.salt)];
                                case 2:
                                    _b.password = _c.sent();
                                    return [4 /*yield*/, this.userRepository.save(user)];
                                case 3:
                                    userCreated = _c.sent();
                                    delete userCreated.password;
                                    delete userCreated.salt;
                                    resolve(userCreated);
                                    return [3 /*break*/, 5];
                                case 4:
                                    error_1 = _c.sent();
                                    reject(error_1);
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    AuthService.prototype.signIn = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var user, firstName, jwtPayload, token, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.checkCredentials(credentials)];
                                case 1:
                                    user = _a.sent();
                                    if (user === null) {
                                        resolve(null);
                                    }
                                    firstName = user.fullName.split(' ');
                                    jwtPayload = {
                                        id: user.id,
                                        firstName: firstName[0],
                                        photoUrl: user.photoUrl,
                                        email: user.email,
                                        role: user.role
                                    };
                                    token = new token_dto_1.TokenDTO();
                                    token.token = this.jwtService.sign(jwtPayload);
                                    resolve(token);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_2 = _a.sent();
                                    reject({
                                        code: error_2.code,
                                        detail: error_2.detail
                                    });
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    AuthService.prototype.checkCredentials = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        email = credentials.email, password = credentials.password;
                        return [4 /*yield*/, this.userRepository.findOne({
                                where: {
                                    email: email,
                                    active: true
                                }
                            })];
                    case 1:
                        user = _b.sent();
                        _a = user;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, user.checkPassword(password)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            return [2 /*return*/, user];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    AuthService.prototype.hashPassword = function (password, salt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, bcrypt.hash(password, salt)];
            });
        });
    };
    AuthService.prototype.validateToken = function (jwtToken) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = resolve;
                        return [4 /*yield*/, this.jwtService.verifyAsync(jwtToken, {
                                ignoreExpiration: false
                            })];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        reject({
                            code: 401,
                            detail: 'JWT expired.'
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    AuthService.prototype.decodedToken = function (jwtToken) {
        return this.jwtService.decode(jwtToken);
    };
    AuthService.prototype.changePassword = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var email, oldPassword, newPassword;
            var _this = this;
            return __generator(this, function (_a) {
                email = data.email, oldPassword = data.oldPassword, newPassword = data.newPassword;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var credentials, user, dataToUpdate, _a, _b, success, error_4;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 5, , 6]);
                                    credentials = new credentials_dto_1.CredentialsDTO();
                                    credentials.email = email;
                                    credentials.password = oldPassword;
                                    return [4 /*yield*/, this.checkCredentials(credentials)];
                                case 1:
                                    user = _c.sent();
                                    if (user === null) {
                                        resolve(null);
                                    }
                                    dataToUpdate = new updateUserPassword_dto_1.UpdateUserPasswordDTO();
                                    _a = dataToUpdate;
                                    return [4 /*yield*/, this.hashPassword(newPassword, user.salt)];
                                case 2:
                                    _a.password = _c.sent();
                                    dataToUpdate.updatedAt = new Date();
                                    _b = user;
                                    return [4 /*yield*/, bcrypt.genSalt(12)];
                                case 3:
                                    _b.salt = _c.sent();
                                    return [4 /*yield*/, this.updateUserPassword(user.id, dataToUpdate)];
                                case 4:
                                    success = _c.sent();
                                    resolve(success);
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_4 = _c.sent();
                                    reject({
                                        code: error_4.code,
                                        detail: error_4.detail
                                    });
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    AuthService.prototype.updateUserPassword = function (id, dataToUpdate) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var affected, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.update({ id: id }, dataToUpdate)];
                    case 1:
                        affected = (_a.sent()).affected;
                        if (affected === 0) {
                            resolve(affected);
                        }
                        resolve(affected);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        reject({
                            code: error_5.code,
                            detail: error_5.detail
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    AuthService = __decorate([
        (0, common_1.Injectable)(),
        __param(1, (0, common_1.Inject)('USER_REPOSITORY')),
        __param(2, (0, common_1.Inject)('ADDRESS_REPOSITORY'))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
