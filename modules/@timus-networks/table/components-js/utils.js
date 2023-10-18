"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
        this.timeout = null;
    }
    Utils.prototype.debounce = function (func, delay) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (_this.timeout !== null) {
                clearTimeout(_this.timeout);
            }
            _this.timeout = setTimeout(function () {
                func.apply(void 0, args);
            }, delay);
        };
    };
    return Utils;
}());
exports.utils = new Utils();
