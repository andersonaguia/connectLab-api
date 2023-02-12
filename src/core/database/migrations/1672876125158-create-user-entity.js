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
exports.createUserEntity1672876125158 = void 0;
var createUserEntity1672876125158 = /** @class */ (function () {
    function createUserEntity1672876125158() {
        this.name = 'createUserEntity1672876125158';
    }
    createUserEntity1672876125158.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"users\" (\"id\" SERIAL NOT NULL, \"fullName\" character varying(50) NOT NULL, \"photoUrl\" character varying, \"email\" character varying(30) NOT NULL, \"password\" character varying NOT NULL, \"phone\" character varying, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"address_id\" integer, CONSTRAINT \"UQ_97672ac88f789774dd47f7c8be3\" UNIQUE (\"email\"), CONSTRAINT \"REL_1b05689f6b6456680d538c3d2e\" UNIQUE (\"address_id\"), CONSTRAINT \"PK_a3ffb1c0c8416b9fc6f907b7433\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"adresses\" (\"id\" SERIAL NOT NULL, \"zipCode\" character varying(10) NOT NULL, \"street\" character varying(100) NOT NULL, \"number\" character varying(10) NOT NULL, \"neighborhood\" character varying(100) NOT NULL, \"city\" character varying(100) NOT NULL, \"state\" character varying(100) NOT NULL, \"complement\" character varying(100), CONSTRAINT \"PK_2787c84f7433e390ff8961d552d\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"users\" ADD CONSTRAINT \"FK_1b05689f6b6456680d538c3d2ea\" FOREIGN KEY (\"address_id\") REFERENCES \"adresses\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createUserEntity1672876125158.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"users\" DROP CONSTRAINT \"FK_1b05689f6b6456680d538c3d2ea\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"adresses\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"users\"")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createUserEntity1672876125158;
}());
exports.createUserEntity1672876125158 = createUserEntity1672876125158;
