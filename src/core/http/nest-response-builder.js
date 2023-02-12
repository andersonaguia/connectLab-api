"use strict";
exports.__esModule = true;
exports.NestResponseBuilder = void 0;
var nest_response_1 = require("./nest-response");
var NestResponseBuilder = /** @class */ (function () {
    function NestResponseBuilder() {
        this.response = {
            status: 200,
            headers: {},
            body: {}
        };
    }
    NestResponseBuilder.prototype.withStatus = function (status) {
        this.response.status = status;
        return this;
    };
    NestResponseBuilder.prototype.withHeaders = function (headers) {
        this.response.headers = headers;
        return this;
    };
    NestResponseBuilder.prototype.withBody = function (body) {
        this.response.body = body;
        return this;
    };
    NestResponseBuilder.prototype.build = function () {
        return new nest_response_1.NestResponse(this.response);
    };
    return NestResponseBuilder;
}());
exports.NestResponseBuilder = NestResponseBuilder;
