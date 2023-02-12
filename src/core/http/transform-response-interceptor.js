"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransformResponseInterceptor = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
var nest_response_1 = require("./nest-response");
var TransformResponseInterceptor = /** @class */ (function () {
    function TransformResponseInterceptor(adapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }
    TransformResponseInterceptor.prototype.intercept = function (context, next) {
        var _this = this;
        return next.handle().pipe((0, operators_1.map)(function (responseFromController) {
            if (responseFromController instanceof nest_response_1.NestResponse) {
                var contextHttp = context.switchToHttp();
                var response_1 = contextHttp.getResponse();
                var status_1 = responseFromController.status, headers_1 = responseFromController.headers, body = responseFromController.body;
                var headerNames = Object.getOwnPropertyNames(headers_1);
                headerNames.forEach(function (header) {
                    var value = headers_1[header];
                    _this.httpAdapter.setHeader(response_1, header, value);
                });
                _this.httpAdapter.status(response_1, status_1);
                return body;
            }
            return responseFromController;
        }));
    };
    TransformResponseInterceptor = __decorate([
        (0, common_1.Injectable)()
    ], TransformResponseInterceptor);
    return TransformResponseInterceptor;
}());
exports.TransformResponseInterceptor = TransformResponseInterceptor;
