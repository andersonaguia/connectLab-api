"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddressEntity = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var AddressEntity = /** @class */ (function () {
    function AddressEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], AddressEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ length: 10, nullable: false })
    ], AddressEntity.prototype, "zipCode");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: false })
    ], AddressEntity.prototype, "street");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], AddressEntity.prototype, "number");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: false })
    ], AddressEntity.prototype, "neighborhood");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: false })
    ], AddressEntity.prototype, "city");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: false })
    ], AddressEntity.prototype, "state");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], AddressEntity.prototype, "complement");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.UserEntity; }, function (user) { return user.id; })
    ], AddressEntity.prototype, "user");
    AddressEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'adresses' })
    ], AddressEntity);
    return AddressEntity;
}());
exports.AddressEntity = AddressEntity;
