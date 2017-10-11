webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sheetjs_component__ = __webpack_require__("../../../../../src/app/sheetjs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_draggable__ = __webpack_require__("../../../../angular2-draggable/index.js");
/* unused harmony export AppComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppComponent = (function () {
    function AppComponent() {
        this.title = 'test';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* Component */])({
        selector: 'app-root',
        template: "<sheetjs></sheetjs>"
    })
], AppComponent);

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sheetjs_component__["a" /* SheetJSComponent */],
            AppComponent
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_draggable__["a" /* AngularDraggableModule */]
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/sheetjs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheetJSComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */



function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i !== s.length; ++i)
        view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
var SheetJSComponent = (function () {
    function SheetJSComponent() {
        this.currentImage = '';
        this.images = {
            'anoka': "./assets/img/dots/Anoka_Gas_Well_Map.png",
            'eastBethel': "./assets/img/dots/East_Bethel_Gas_Well_Map.png",
            'wde': "./assets/img/dots/WDE_Gas_Well_Map.png",
        };
        this.translateData = {
            "anoka": {
                "GW-43": "translate(612px, 513px)",
                "GW-42": "translate(717px, 518px)",
                "GW-41": "translate(717px, 611px)",
                "GW-40": "translate(760px, 745px)",
                "GW-39": "translate(672px, 756px)",
                "GW-38": "translate(610px, 646px)",
                "GW-37": "translate(586px, 749px)",
                "GW-36": "translate(467px, 645px)",
                "GW-35": "translate(494px, 750px)",
                "GW-34": "translate(465px, 541px)",
                "GW-33": "translate(381px, 501px)",
                "GW-32": "translate(575px, 328px)",
                "GW-31": "translate(472px, 294px)",
                "GW-30": "translate(378px, 375px)",
                "GW-29": "translate(486px, 429px)",
                "GW-28": "translate(192px, 429px)",
                "GW-27": "translate(300px, 472px)",
                "GW-26": "translate(311px, 295px)",
                "GW-25": "translate(204px, 319px)",
                "GW-24": "translate(93px, 284px)",
                "GW-23": "translate(109px, 390px)",
                "GW-22": "translate(195px, 192px)",
                "GW-21": "translate(88px, 170px)",
                "GW-20": "translate(80px, 68px)",
                "GW-19": "translate(189px, 70px)",
                "GW-18": "translate(343px, 161px)",
                "GW-17": "translate(291px, 79px)",
                "GW-16": "translate(384px, 75px)",
                "GW-15": "translate(486px, 181px)",
                "GW-14": "translate(573px, 207px)",
                "GW-13": "translate(597px, 89px)",
                "GW-12": "translate(489px, 95px)",
                "GW-11": "translate(682px, 75px)",
                "GW-10": "translate(753px, 72px)",
                "GW-9": "translate(836px, 89px)",
                "GW-8": "translate(679px, 244px)",
                "GW-7": "translate(724px, 321px)",
                "GW-6": "translate(756px, 166px)",
                "GW-5": "translate(858px, 176px)",
                "GW-4": "translate(854px, 268px)",
                "GW-3": "translate(814px, 361px)",
                "GW-2": "translate(693px, 402px)",
                "GW-1": "translate(784px, 446px)",
            },
            'eastBethel': {
                "GW-34": "translate(182px, 691px)",
                "GW-33": "translate(245px, 761px)",
                "GW-32": "translate(384px, 718px)",
                "GW-31": "translate(263px, 630px)",
                "GW-30": "translate(332px, 603px)",
                "GW-29": "translate(525px, 589px)",
                "GW-28": "translate(578px, 509px)",
                "GW-27": "translate(407px, 522px)",
                "GW-26": "translate(515px, 387px)",
                "GW-25": "translate(626px, 401px)",
                "GW-24": "translate(702px, 303px)",
                "GW-23": "translate(613px, 294px)",
                "GW-22": "translate(711px, 208px)",
                "GW-21": "translate(825px, 313px)",
                "GW-20": "translate(831px, 206px)",
                "GW-19": "translate(712px, 123px)",
                "GW-18": "translate(643px, 5px)",
                "GW-17": "translate(602px, 164px)",
                "GW-16": "translate(546px, 6px)",
                "GW-15": "translate(506px, 80px)",
                "GW-14": "translate(465px, 0px)",
                "GW-13": "translate(465px, 201px)",
                "GW-12": "translate(382px, 173px)",
                "GW-11": "translate(306px, 158px)",
                "GW-10": "translate(180px, 173px)",
                "GW-9": "translate(177px, 253px)",
                "GW-8": "translate(349px, 257px)",
                "GW-7": "translate(252px, 298px)",
                "GW-6": "translate(405px, 378px)",
                "GW-5": "translate(315px, 406px)",
                "GW-4": "translate(148px, 362px)",
                "GW-3": "translate(222px, 479px)",
                "GW-2": "translate(131px, 465px)",
                "GW-1": "translate(111px, 562px)",
                "HEW-8": "translate(105px, 796px)",
                "HEW-7": "translate(39px, 679px)",
                "HEW-6": "translate(206px, 107px)",
                "HEW-5": "translate(328px, 27px)",
                "HEW-4": "translate(785px, 53px)",
                "HEW-3": "translate(758px, 399px)",
                "HEW-2": "translate(665px, 491px)",
                "HEW-1": "translate(453px, 673px)"
            },
            'wde': {
                "GW-34": "translate(477px, 720px)",
                "GW-33": "translate(369px, 745px)",
                "GW-32": "translate(284px, 731px)",
                "GW-31": "translate(298px, 636px)",
                "GW-30": "translate(213px, 546px)",
                "GW-29": "translate(215px, 469px)",
                "GW-28": "translate(220px, 402px)",
                "GW-27": "translate(239px, 294px)",
                "GW-26": "translate(300px, 112px)",
                "GW-25": "translate(348px, 42px)",
                "GW-24": "translate(430px, 94px)",
                "GW-23": "translate(558px, 117px)",
                "GW-22": "translate(585px, 205px)",
                "GW-21": "translate(594px, 292px)",
                "GW-20": "translate(700px, 320px)",
                "GW-19": "translate(641px, 411px)",
                "GW-18": "translate(711px, 444px)",
                "GW-17": "translate(813px, 558px)",
                "GW-16": "translate(848px, 688px)",
                "GW-15": "translate(937px, 649px)",
                "GW-14": "translate(1020px, 715px)",
                "GW-13": "translate(1127px, 834px)",
                "GW-12": "translate(1036px, 854px)",
                "GW-11": "translate(914px, 821px)",
                "GW-10": "translate(778px, 801px)",
                "GW-9": "translate(666px, 740px)",
                "GW-8": "translate(580px, 744px)",
                "GW-7": "translate(532px, 810px)",
                "GW-6": "translate(383px, 829px)",
                "GW-5": "translate(182px, 772px)",
                "GW-4": "translate(205px, 677px)",
                "GW-3": "translate(116px, 581px)",
                "GW-2": "translate(91px, 494px)",
                "GW-1": "translate(94px, 405px)",
                "GW-54": "translate(1118px, 638px)",
                "GW-53": "translate(143px, 288px)",
                "GW-52": "translate(181px, 210px)",
                "GW-51": "translate(222px, 129px)",
                "GW-50": "translate(371px, 357px)",
                "GW-49": "translate(381px, 526px)",
                "GW-48": "translate(478px, 558px)",
                "GW-47": "translate(374px, 604px)",
                "GW-46": "translate(422px, 421px)",
                "GW-45": "translate(302px, 539px)",
                "GW-44": "translate(339px, 448px)",
                "GW-43": "translate(327px, 315px)",
                "GW-42": "translate(410px, 267px)",
                "GW-41": "translate(371px, 185px)",
                "GW-40": "translate(488px, 218px)",
                "GW-39": "translate(493px, 321px)",
                "GW-38": "translate(545px, 436px)",
                "GW-37": "translate(553px, 572px)",
                "GW-36": "translate(658px, 617px)",
                "GW-35": "translate(725px, 645px)"
            },
        };
    }
    SheetJSComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = __WEBPACK_IMPORTED_MODULE_1_xlsx__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = "Gas Wells";
            var ws = wb.Sheets[wsname];
            /* save data */
            _this.data = (__WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].sheet_to_json(ws, { header: 1 }));
            console.log(_this.data);
            if (_this.data[1][0] === "Anoka/Ramsey Landfill") {
                _this.currentImage = _this.images.anoka;
                _this.currentLandfill = 'anoka';
            }
            if (_this.data[1][0] === "East Bethel Sanitary Landfill") {
                _this.currentImage = _this.images.eastBethel;
                _this.currentLandfill = 'eastBethel';
            }
            if (_this.data[1][0] === "Waste Disposal Engineering Landfill") {
                _this.currentImage = _this.images.wde;
                _this.currentLandfill = 'wde';
                _this.data.forEach(function (x) {
                    if (x[0] === "GW-43") {
                        x[1] = false;
                        x[2] = false;
                        x[3] = false;
                        x[4] = false;
                        x[5] = false;
                        x[6] = false;
                        x[99] = "Abandoned";
                    }
                });
            }
        };
        reader.readAsBinaryString(target.files[0]);
    };
    SheetJSComponent.prototype.export = function () {
        /* generate worksheet */
        var ws = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].aoa_to_sheet(this.data);
        /* generate workbook and add the worksheet */
        var wb = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].book_new();
        __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        var wbout = __WEBPACK_IMPORTED_MODULE_1_xlsx__["write"](wb, this.wopts);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(new Blob([s2ab(wbout)]), this.fileName);
    };
    SheetJSComponent.prototype.onDragEnd = function (event, gw) {
        //console.log(event, gw);
        //console.log(event.style, event.style.transform, gw);
        if (gw[0])
            this.translateData[this.currentLandfill][gw[0]] = event.style.transform;
        console.log(this.translateData);
    };
    SheetJSComponent.prototype.getTransform = function (gw) {
        //console.log('returning: ', gw, this.translateData[this.currentLandfill][gw])
        if (gw)
            return this.translateData[this.currentLandfill][gw];
    };
    SheetJSComponent.prototype.isData = function (gw) {
        if ((gw && gw.substring(0, 2) === "GW") || (gw && gw.substring(0, 3) === "HEW"))
            return true;
        else
            return false;
    };
    return SheetJSComponent;
}());
SheetJSComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Component */])({
        selector: 'sheetjs',
        styles: [__webpack_require__("../../../../../src/app/sheetjs.css")],
        template: __webpack_require__("../../../../../src/app/sheetjs.html"),
    })
    /* <table class="sjs-table">
    <tr *ngFor="let row of data">
        <td *ngFor="let val of row">
            {{val}}
        </td>
    </tr>
    </table> */
    ,
    __metadata("design:paramtypes", [])
], SheetJSComponent);

//# sourceMappingURL=sheetjs.component.js.map

/***/ }),

/***/ "../../../../../src/app/sheetjs.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n\twidth: 800px;\n\theight: 800px;\n\tposition: absolute;\n}\nimg{\n\tposition: absolute;\n\tuser-drag: none; \n\tuser-select: none;\n\t-moz-user-select: none;\n\t-webkit-user-drag: none;\n\t-webkit-user-select: none;\n\t-ms-user-select: none;\n}     \n.data-box {\n\tpadding: 2px;\n\twidth: 60px;\n\theight: auto;\n\tfont-size: 10px;\n\tborder-radius: 2%;\n\tborder: 1px solid black;\n\tbackground: white;\n\topacity: .9;\n\tz-index: 100;\n\tposition: absolute;\n}\n.ng-draggable {\n  cursor: move;\n}\n.data-value {\n\tfloat: right;\n}\n.data-item {\n\tclear: both;\n\twidth: 100%;\n}\n.input-container {\n\tmargin: auto;\n\twidth: 20em;\n\tpadding: 1em;\n\tborder: 1px solid black;\n\tborder-radius: 5%;\n}\n@media print\n{    \n\t.input-container, .input-container *\n    {\n        display: none !important;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sheetjs.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-container\">\n\t<input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" style=\"z-index:1000\" />\n</div>\n<!-- <div class='main-container' [style.background-image]=\"'url(' + currentImage + ')'\"> -->\n<div class='main-container'>\n\t<img [src]='currentImage' class=\"background-image\">\n\t<div *ngFor=\"let gw of data\">\n\t\t<div [style.transform]=\"getTransform(gw[0])\" *ngIf=\"isData(gw[0])\" class=\"data-box\" ngDraggable (stopped)=\"onDragEnd($event, gw)\">\n\t\t\t<div class=\"data-item\">\n\t\t\t\t{{gw[0]}}\n\t\t\t</div>\n\t\t\t<div class=\"data-item\" *ngIf=\"gw[1]\">Temp\n\t\t\t\t<span class=\"data-value\">{{gw[1]}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"data-item\" *ngIf=\"gw[4]\">O2%\n\t\t\t\t<span class=\"data-value\">{{gw[4]}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"data-item\" *ngIf=\"gw[5]\">CH4%\n\t\t\t\t<span class=\"data-value\">{{gw[5]}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"data-item\" *ngIf=\"gw[6]\">CO2%\n\t\t\t\t<span class=\"data-value\">{{gw[6]}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"data-item\" *ngIf=\"gw[99]\">\n\t\t\t\t{{gw[99]}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map