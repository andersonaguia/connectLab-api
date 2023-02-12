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
exports.changeDeviceEntityAddVirtualId1673526849245 = void 0;
var changeDeviceEntityAddVirtualId1673526849245 = /** @class */ (function () {
    function changeDeviceEntityAddVirtualId1673526849245() {
        this.name = 'changeDeviceEntityAddVirtualId1673526849245';
    }
    changeDeviceEntityAddVirtualId1673526849245.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"devices\" (\"_id\" SERIAL NOT NULL, \"name\" character varying(30) NOT NULL, \"type\" character varying(30) NOT NULL, \"madeBy\" character varying(30) NOT NULL, \"photoUrl\" character varying NOT NULL, \"deviceInfo_id\" integer, CONSTRAINT \"REL_c9efafd532b9b61dcb6453a89d\" UNIQUE (\"deviceInfo_id\"), CONSTRAINT \"PK_06e54be2989de9043573759c83a\" PRIMARY KEY (\"_id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"device_info\" (\"id\" SERIAL NOT NULL, \"virtual_id\" character varying(30) NOT NULL, \"ip_address\" character varying(15) NOT NULL, \"mac_address\" character varying(50) NOT NULL, \"signal\" character varying(10) NOT NULL, CONSTRAINT \"PK_b1c15a80b0a4e5f4eebadbdd92c\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" ADD CONSTRAINT \"FK_c9efafd532b9b61dcb6453a89d1\" FOREIGN KEY (\"deviceInfo_id\") REFERENCES \"device_info\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_devices\" ADD CONSTRAINT \"FK_7c0755b2e06094d9dfb353a3772\" FOREIGN KEY (\"device_id\") REFERENCES \"devices\"(\"_id\") ON DELETE SET NULL ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    changeDeviceEntityAddVirtualId1673526849245.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_devices\" DROP CONSTRAINT \"FK_7c0755b2e06094d9dfb353a3772\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"devices\" DROP CONSTRAINT \"FK_c9efafd532b9b61dcb6453a89d1\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"device_info\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"devices\"")];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return changeDeviceEntityAddVirtualId1673526849245;
}());
exports.changeDeviceEntityAddVirtualId1673526849245 = changeDeviceEntityAddVirtualId1673526849245;
