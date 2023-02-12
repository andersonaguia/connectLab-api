"use strict";
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
exports.changeDeviceEntityName1673306583095 = void 0;
var changeDeviceEntityName1673306583095 = /** @class */ (function () {
    function changeDeviceEntityName1673306583095() {
        this.name = 'changeDeviceEntityName1673306583095';
    }
    changeDeviceEntityName1673306583095.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP CONSTRAINT \"FK_93ecd8ac0a3e858399d8a25c5df\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" RENAME COLUMN \"info_id\" TO \"deviceInfo_id\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" RENAME COLUMN \"deviceInfo_id\" TO \"info_id\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user_devices_location\" (\"id\" SERIAL NOT NULL, \"deviceLocation\" character varying(30) NOT NULL, CONSTRAINT \"PK_34fe9059c52c90b17a63c410e9e\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user_devices\" (\"id\" SERIAL NOT NULL, \"isOn\" boolean NOT NULL, \"userDeviceLocation_id\" integer, CONSTRAINT \"REL_d9f49bf21d2fbcd1d8e94dd9bd\" UNIQUE (\"userDeviceLocation_id\"), CONSTRAINT \"PK_c9e7e648903a9e537347aba4371\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP CONSTRAINT \"REL_93ecd8ac0a3e858399d8a25c5d\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP COLUMN \"info_id\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD \"deviceInfo_id\" integer")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD CONSTRAINT \"UQ_c9efafd532b9b61dcb6453a89d1\" UNIQUE (\"deviceInfo_id\")")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"users\" ADD \"userDevices_id\" integer")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"users\" ADD CONSTRAINT \"UQ_27d24ea6187f214a470e733d9d8\" UNIQUE (\"userDevices_id\")")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD \"info_id\" integer")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD CONSTRAINT \"UQ_93ecd8ac0a3e858399d8a25c5df\" UNIQUE (\"info_id\")")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD CONSTRAINT \"FK_c9efafd532b9b61dcb6453a89d1\" FOREIGN KEY (\"deviceInfo_id\") REFERENCES \"device_info\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_devices\" ADD CONSTRAINT \"FK_d9f49bf21d2fbcd1d8e94dd9bd9\" FOREIGN KEY (\"userDeviceLocation_id\") REFERENCES \"user_devices_location\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"users\" ADD CONSTRAINT \"FK_27d24ea6187f214a470e733d9d8\" FOREIGN KEY (\"userDevices_id\") REFERENCES \"user_devices\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD CONSTRAINT \"FK_93ecd8ac0a3e858399d8a25c5df\" FOREIGN KEY (\"info_id\") REFERENCES \"device_info\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 17:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    changeDeviceEntityName1673306583095.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP CONSTRAINT \"FK_93ecd8ac0a3e858399d8a25c5df\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"users\" DROP CONSTRAINT \"FK_27d24ea6187f214a470e733d9d8\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_devices\" DROP CONSTRAINT \"FK_d9f49bf21d2fbcd1d8e94dd9bd9\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP CONSTRAINT \"FK_c9efafd532b9b61dcb6453a89d1\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP CONSTRAINT \"UQ_93ecd8ac0a3e858399d8a25c5df\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP COLUMN \"info_id\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"users\" DROP CONSTRAINT \"UQ_27d24ea6187f214a470e733d9d8\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"users\" DROP COLUMN \"userDevices_id\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP CONSTRAINT \"UQ_c9efafd532b9b61dcb6453a89d1\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP COLUMN \"deviceInfo_id\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD \"info_id\" integer")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD CONSTRAINT \"REL_93ecd8ac0a3e858399d8a25c5d\" UNIQUE (\"info_id\")")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user_devices\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user_devices_location\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" RENAME COLUMN \"info_id\" TO \"deviceInfo_id\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" RENAME COLUMN \"deviceInfo_id\" TO \"info_id\"")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD CONSTRAINT \"FK_93ecd8ac0a3e858399d8a25c5df\" FOREIGN KEY (\"info_id\") REFERENCES \"device_info\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 17:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return changeDeviceEntityName1673306583095;
}());
exports.changeDeviceEntityName1673306583095 = changeDeviceEntityName1673306583095;
