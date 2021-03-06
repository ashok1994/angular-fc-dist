import { Injectable } from '@angular/core';
var FusionChartsStatic = (function () {
    function FusionChartsStatic() {
    }
    return FusionChartsStatic;
}());
export { FusionChartsStatic };
FusionChartsStatic.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FusionChartsStatic.ctorParameters = function () { return []; };
var FusionChartsService = (function () {
    function FusionChartsService(FCStatic) {
        var fcRoot;
        if (FusionChartsService.isFCRootSet()) {
            fcRoot = FusionChartsService.getFCRoot();
        }
        else {
            fcRoot = {
                core: FCStatic.core,
                modules: FCStatic.modules
            };
        }
        this.resolveFusionCharts(fcRoot.core, fcRoot.modules);
    }
    FusionChartsService.setFCRoot = function (fcRoot) {
        FusionChartsService._fcRoot = fcRoot;
    };
    FusionChartsService.getFCRoot = function () {
        return FusionChartsService._fcRoot;
    };
    FusionChartsService.isFCRootSet = function () {
        return !!FusionChartsService._fcRoot;
    };
    FusionChartsService.prototype.resolveFusionCharts = function (core, modules) {
        if (core && core.id &&
            core.id === 'FusionCharts') {
            this._fusionchartsStatice = core;
        }
        else {
            this._fusionchartsStatice = core();
        }
        if (modules) {
            modules.forEach(function (FusionChartsModules) {
                if (FusionChartsModules.getName || FusionChartsModules.name) {
                    core.addDep(FusionChartsModules);
                }
                else {
                    FusionChartsModules(core);
                }
            });
        }
    };
    FusionChartsService.prototype.getFusionChartsStatic = function () {
        return this._fusionchartsStatice;
    };
    return FusionChartsService;
}());
export { FusionChartsService };
FusionChartsService._fcRoot = null;
FusionChartsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FusionChartsService.ctorParameters = function () { return [
    { type: FusionChartsStatic, },
]; };
//# sourceMappingURL=fusioncharts.service.js.map