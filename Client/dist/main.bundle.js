webpackJsonp(["main"],{

/***/ "./node_modules/angular-sweetalert-service/node_modules/@angular/core/@angular lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/angular-sweetalert-service/node_modules/@angular/core/@angular lazy recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n  color: #8235ff;\r\n}\r\nh2{\r\n  color: #33acfe;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbaruser></app-navbaruser>\n<router-outlet></router-outlet>\n\n<!--<table datatable>-->\n  <!--<tr>-->\n    <!--<th>Firstname</th>-->\n    <!--<th>Lastname</th>-->\n    <!--<th>Age</th>-->\n  <!--</tr>-->\n  <!--<tr>-->\n    <!--<td>Jill</td>-->\n    <!--<td>Smith</td>-->\n    <!--<td>50</td>-->\n  <!--</tr>-->\n  <!--<tr>-->\n    <!--<td>Eve</td>-->\n    <!--<td>Jackson</td>-->\n    <!--<td>94</td>-->\n  <!--</tr>-->\n<!--</table>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Kitchen Talk';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__ = __webpack_require__("./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_recipedata_service__ = __webpack_require__("./src/app/service/recipedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_searchpage_searchpage_component__ = __webpack_require__("./src/app/components/searchpage/searchpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_recipecard_recipecard_component__ = __webpack_require__("./src/app/components/recipecard/recipecard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_addrecipe_addrecipe_component__ = __webpack_require__("./src/app/components/addrecipe/addrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_redipedetails_redipedetails_component__ = __webpack_require__("./src/app/components/redipedetails/redipedetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_navbaruser_navbaruser_component__ = __webpack_require__("./src/app/components/navbaruser/navbaruser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_sweetalert_service__ = __webpack_require__("./node_modules/angular-sweetalert-service/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_editrecipecard_editrecipecard_component__ = __webpack_require__("./src/app/components/editrecipecard/editrecipecard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_editrecipe_editrecipe_component__ = __webpack_require__("./src/app/components/editrecipe/editrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_checkrecipecard_checkrecipecard_component__ = __webpack_require__("./src/app/components/checkrecipecard/checkrecipecard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_checkrecipe_checkrecipe_component__ = __webpack_require__("./src/app/components/checkrecipe/checkrecipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_adminlogin_adminlogin_component__ = __webpack_require__("./src/app/components/adminlogin/adminlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_neutron_star_rating__ = __webpack_require__("./node_modules/neutron-star-rating/esm5/neutron-star-rating.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_shipmentdata_service__ = __webpack_require__("./src/app/service/shipmentdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_bundledata_service__ = __webpack_require__("./src/app/service/bundledata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_systemdata_service__ = __webpack_require__("./src/app/service/systemdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var applicationRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__["a" /* LandingpageComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_14__components_searchpage_searchpage_component__["a" /* SearchpageComponent */] },
    { path: 'recipe/:_id', component: __WEBPACK_IMPORTED_MODULE_17__components_redipedetails_redipedetails_component__["a" /* RedipedetailsComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_22__components_editrecipe_editrecipe_component__["a" /* EditrecipeComponent */] },
    { path: 'checkrecipe/:_id', component: __WEBPACK_IMPORTED_MODULE_24__components_checkrecipe_checkrecipe_component__["a" /* CheckrecipeComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_16__components_addrecipe_addrecipe_component__["a" /* AddrecipeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'adminlogin', component: __WEBPACK_IMPORTED_MODULE_25__components_adminlogin_adminlogin_component__["a" /* AdminloginComponent */] },
    //{path: '/', component: LandingpageComponent},
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__["a" /* LandingpageComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__["a" /* LandingpageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_searchpage_searchpage_component__["a" /* SearchpageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_recipecard_recipecard_component__["a" /* RecipecardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_addrecipe_addrecipe_component__["a" /* AddrecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_redipedetails_redipedetails_component__["a" /* RedipedetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_navbaruser_navbaruser_component__["a" /* NavbaruserComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_editrecipecard_editrecipecard_component__["a" /* EditrecipecardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_editrecipe_editrecipe_component__["a" /* EditrecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_checkrecipecard_checkrecipecard_component__["a" /* CheckrecipecardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_checkrecipe_checkrecipe_component__["a" /* CheckrecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_adminlogin_adminlogin_component__["a" /* AdminloginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(applicationRoutes),
                __WEBPACK_IMPORTED_MODULE_27_neutron_star_rating__["a" /* NeutronRatingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__service_recipedata_service__["a" /* RecipedataService */],
                __WEBPACK_IMPORTED_MODULE_20_angular_sweetalert_service__["a" /* SweetAlertService */],
                __WEBPACK_IMPORTED_MODULE_28__service_shipmentdata_service__["a" /* ShipmentdataService */],
                __WEBPACK_IMPORTED_MODULE_29__service_bundledata_service__["a" /* BundledataService */],
                __WEBPACK_IMPORTED_MODULE_30__service_systemdata_service__["a" /* SystemdataService */],
                { provide: __WEBPACK_IMPORTED_MODULE_26__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/addrecipe/addrecipe.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/*@import '~bootstrap/dist/css/bootstrap.min.css';*/\r\n/*@import '~open-iconic/font/css/open-iconic-bootstrap.css';*/\r\n"

/***/ }),

/***/ "./src/app/components/addrecipe/addrecipe.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n<div class=\"wrapper\">\n\n  <div class=\"header header-filter\" style=\"background-image: url('../../../assets/img/kelumtimber.jpg'); width:100%;  \"></div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <div class=\"row\" >\n          <div class=\"profile\">\n            <div class=\"name\">\n              <h3 class=\"title\">Add New Shipment</h3>\n            </div>\n            <form class=\"form-group\">\n              <div class=\"form-group col-md-12\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                  <h4>Select Warehouse</h4>\n                  <select class=\"form-control\" data-style=\"btn btn-link\" align=\"center\"\n                          id=\"exampleFormControlSelect1\" name=\"warehouse\" [(ngModel)]=\"warehouse\" required=\"true\">\n                    <option selected>Sujeewa</option>\n                    <option>Asala</option>\n                  </select>\n                  <h4>Date</h4>\n                  <input type=\"date\" class=\"form-control\" name=\"date\" [(ngModel)]=\"date\" />\n                  <div class=\"form-group\">\n                  <h4>Buyer</h4>\n                    <select class=\"form-control\" data-style=\"btn btn-link\" align=\"center\"\n                            id=\"exampleFormControlSelect4\" name=\"warehouse\" [(ngModel)]=\"buyer\" required=\"true\">\n                      <option selected>Diamond</option>\n                      <option>Crystal</option>\n                    </select>\n                  </div>\n\n                </div>\n                <div class=\"col-md-4\"></div>\n              </div>\n            <div class=\"row col-md-6\">\n              <div class=\"col-sm-12 col-md-12\">\n                  <br>\n                  <h4>Timber name</h4>\n                  <select class=\"form-control selectpicker\" data-style=\"btn btn-link\" align=\"center\"\n                        id=\"exampleFormControlSelect\" required=\"true\" name=\"name\" [(ngModel)]=\"name\">\n                    <option></option>\n                  <option *ngFor=\"let nam of data.timbernames.sort()\">{{nam}}</option>\n                  </select>\n                  <!--<input  placeholder=\"Enter Timber name\" class=\"form-control\" required=\"true\" name=\"name\" [(ngModel)]=\"name\"/>-->\n                  <br>\n                  <h4>Bundle Number</h4>\n                  <input class=\"form-control\" placeholder=\"Please enter the bundle number\"  required=\"true\"\n                            name=\"bundlenum\" [(ngModel)]=\"bundlenum\"/>\n                  <br>\n                  <h4>Bundle Details</h4>\n                <form>\n                  <div>\n                    <div class=\"col-md-3\">\n                      <h6>Cross Section Area</h6>\n                      <select class=\"form-control selectpicker\" data-style=\"btn btn-link\" align=\"center\"\n                              id=\"exampleFormControlSelect2\" name=\"crosssection\" [(ngModel)]=\"crosssection\" required=\"true\">\n                        <option *ngFor=\"let cross of data.crosssections.sort()\">{{cross}}</option>\n                      </select>\n                      <br>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <h6>Piece Length</h6>\n                      <input  placeholder=\"Length\" class=\"form-control\" required=\"true\" name=\"piecelength\" [(ngModel)]=\"piecelength\"/>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <h6>Number of Pieces</h6>\n                      <input  placeholder=\"Number of pieces\" class=\"form-control\" required=\"true\" name=\"pieces\" [(ngModel)]=\"pieces\"/>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <h6>Unit Price</h6>\n                      <input  placeholder=\"Unit Price\" class=\"form-control\" required=\"true\" name=\"unitprice\" [(ngModel)]=\"unitprice\"/>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"col-md-4\"></div>\n                    <div class=\"col-md-4\">\n                      <button class=\"btn btn-default btn-primary\" (click)=\"addDetails()\" type=\"submit\">Add</button>\n                    </div>\n                    <br/>\n                  </div>\n                </form>\n\n\n                  <div class=\"row\">\n                    <table class=\"table\">\n                      <thead>\n                      <tr>\n                        <th>Cross Section</th>\n                        <th>Length</th>\n                        <th>Unit price</th>\n                        <th>Pieces</th>\n                        <th class=\"text-right\">Price</th>\n                        <th class=\"text-right\">Actions</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let timber of timbers\">\n                          <td>{{timber.crosssection}}</td>\n                          <td>{{timber.piecelength}}</td>\n                          <td>{{timber.unitprice}}</td>\n                          <td>{{timber.pieces}}</td>\n                          <td class=\"text-right\">{{timber.price}}</td>\n                          <td class=\"td-actions text-right\">\n                            <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-round\" (click)=\"removeTimber(timber)\">\n                              <i class=\"material-icons\">close</i>\n                            </button>\n                          </td>\n                        </tr>\n\n\n                      </tbody>\n                    </table>\n                  </div>\n                  <br>\n                  <button class=\"btn btn-primary btn-lg\" (click)=\"addBundle()\">Add Bundle</button>\n                  <br>\n\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <h4>Shipment details</h4>\n              <div>\n                <h4>Total Pieces in Shipment : {{shipmentPieces}}</h4>\n                <table class=\"table\">\n                  <thead>\n                  <tr>\n                    <th>Timber Name</th>\n                    <th>Bundle Number</th>\n                    <th>Pieces</th>\n                    <th class=\"text-right\">Price</th>\n                    <th class=\"text-right\">Actions</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr *ngFor=\"let bundle of bundles.reverse()\">\n                    <td>{{bundle.timbername}}</td>\n                    <td>{{bundle.bundlenum}}</td>\n                    <td>{{bundle.piecesBundle}}</td>\n                    <td class=\"text-right\">{{bundle.price}}</td>\n                    <td class=\"td-actions text-right\">\n                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-round\" (click)=\"removeBundle(bundle)\">\n                        <i class=\"material-icons\">close</i>\n                      </button>\n                    </td>\n                  </tr>\n                  </tbody>\n                </table>\n              </div>\n\n            </div>\n              <div class=\"row\">\n                <button  class=\"btn btn-primary\" (click)=\"saveShipment()\">Save Shipment</button>\n                <button class=\"btn btn-danger\" (click)=\"cancelShipment()\">Cancel</button>\n                <!--a href=\"javascript:window.print();\">Print details</a-->\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n</body>\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/addrecipe/addrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddrecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shipmentdata_service__ = __webpack_require__("./src/app/service/shipmentdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_bundledata_service__ = __webpack_require__("./src/app/service/bundledata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_systemdata_service__ = __webpack_require__("./src/app/service/systemdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddrecipeComponent = /** @class */ (function () {
    function AddrecipeComponent(shipmentdata, bundledata, systemdata, router) {
        var _this = this;
        this.shipmentdata = shipmentdata;
        this.bundledata = bundledata;
        this.systemdata = systemdata;
        this.router = router;
        this.bundles = [];
        this.timbers = [];
        this.bundleavailable = false;
        this.removeTimber = function (tim) {
            _this.timbers = _this.timbers.filter(function (timber) { return timber.piecelength !== tim.piecelength; });
        };
        this.removeBundle = function (bun) {
            _this.bundles = _this.bundles.filter(function (bundle) { return bundle.bundlenum !== bun.bundlenum; });
        };
    }
    AddrecipeComponent.prototype.ngOnInit = function () {
        this.getData();
        this.name = "";
    };
    AddrecipeComponent.prototype.getData = function () {
        var _this = this;
        this.systemdata.getData("A").subscribe(function (res) {
            _this.data = res.data[0];
        });
    };
    AddrecipeComponent.prototype.addDetails = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.crosssection) || Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.piecelength) || Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.pieces) || Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.unitprice)) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'warning',
                html: '<text id="swal-input" type="text" ng-model="test">Please provide all details to add timber</text>',
            });
        }
        else {
            var bundledetails = {};
            bundledetails.crosssection = this.crosssection;
            bundledetails.piecelength = this.piecelength;
            bundledetails.pieces = this.pieces;
            bundledetails.unitprice = this.unitprice;
            bundledetails.price = Number(this.unitprice) * Number(this.piecelength) * Number(this.pieces);
            this.timbers.push(bundledetails);
            this.crosssection = "";
            this.piecelength = null;
            this.unitprice = null;
            this.pieces = null;
        }
    };
    AddrecipeComponent.prototype.addBundle = function () {
        var _this = this;
        if (this.name == "--" || Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.bundlenum) || this.name == "" || Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.name)) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'warning',
                html: '<text id="swal-input" type="text" ng-model="test">Please Select Bundle Number and Timber Name !!!</text>',
            });
        }
        else if (this.bundles.filter(function (bundle) { return bundle.bundlenum === _this.bundlenum; }).length > 0) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'warning',
                html: '<text id="swal-input" type="text" ng-model="test">This Bundle number already added !!!</text>',
            });
        }
        else {
            this.bundledata.getBundleByBundleNumber({ number: this.bundlenum }).subscribe(function (res) {
                if (res.state) {
                    if (res.bundle.length > 0) {
                        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                            type: 'warning',
                            html: '<text id="swal-input" type="text" ng-model="test">Wrong Bundle Number, Already added !!!</text>',
                        });
                        _this.bundlenum = "";
                    }
                    else {
                        _this.bundleavailable = false;
                        _this.bundleprice = _this.calculateBundlePrice();
                        _this.bundlePieces = _this.calculateBundlePieces();
                        var bundle = {};
                        bundle.timbername = _this.name;
                        bundle.bundlenum = _this.bundlenum;
                        bundle.timbers = _this.timbers;
                        bundle.price = _this.bundleprice;
                        bundle.buyer = _this.buyer;
                        bundle.date = _this.date;
                        bundle.warehouse = _this.warehouse;
                        bundle.piecesBundle = _this.bundlePieces;
                        _this.bundles.push(bundle);
                        _this.shipmentPieces = _this.calculateTotalShipmentPieces();
                        _this.name = "";
                        _this.bundlenum = null;
                        _this.timbers = [];
                        _this.bundleprice = null;
                    }
                }
            });
        }
    };
    AddrecipeComponent.prototype.calculateBundlePrice = function () {
        var total = 0;
        for (var timber in this.timbers) {
            total = total + this.timbers[timber].price;
        }
        return total;
    };
    AddrecipeComponent.prototype.calculateBundlePieces = function () {
        var total = 0;
        for (var timber in this.timbers) {
            total = total + Number(this.timbers[timber].pieces);
        }
        return total;
    };
    AddrecipeComponent.prototype.calculateTotalShipmentPrice = function () {
        var total = 0;
        for (var bundle in this.bundles) {
            total = total + this.bundles[bundle].price;
        }
        return total;
    };
    AddrecipeComponent.prototype.calculateTotalShipmentPieces = function () {
        var total = 0;
        for (var bundle in this.bundles) {
            total = total + Number(this.bundles[bundle].piecesBundle);
        }
        return total;
    };
    AddrecipeComponent.prototype.saveShipment = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.warehouse) || Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.date) || Object(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.buyer)) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'warning',
                html: '<text id="swal-input" type="text" ng-model="test">Please provide Warehouse and Date !!!</text>',
            });
        }
        else if (this.bundles.length <= 0) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'warning',
                html: '<text id="swal-input" type="text" ng-model="test">No bundles to add !!!</text>',
            });
        }
        else {
            this.shipmentTotal = this.calculateTotalShipmentPrice();
            this.shipmentPieces = this.calculateTotalShipmentPieces();
            this.shipment = {
                date: this.date,
                warehouse: this.warehouse,
                bundles: this.bundles,
                total: this.shipmentTotal,
                buyer: this.buyer,
            };
            this.shipmentdata.saveShipment(this.shipment).subscribe(function (res) {
                if (res.state) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Data Saved!', '', 'success');
                    _this.router.navigate(['/add']);
                }
                else {
                    console.log(res);
                }
            });
            this.saveBundles();
            this.date = null;
            this.warehouse = null;
            this.shipmentTotal = null;
            this.bundles = [];
            this.buyer = null;
            this.shipmentPieces = 0;
        }
    };
    AddrecipeComponent.prototype.saveBundles = function () {
        for (var bundle in this.bundles) {
            console.log(bundle);
            this.bundledata.saveBundle(this.bundles[bundle]).subscribe(function (res) {
                if (res.state) {
                    console.log("Bundle saved !!!");
                }
                else {
                    console.log(res);
                }
            });
        }
    };
    AddrecipeComponent.prototype.cancelShipment = function () {
        this.bundles = [];
        this.buyer = null;
        this.warehouse = null;
        this.date = null;
        this.router.navigate(['/add']);
    };
    AddrecipeComponent.prototype.checkBundleNumber = function (bundlenum) {
        var _this = this;
        var boo = false;
        this.bundledata.getBundleByBundleNumber({ number: bundlenum }).subscribe(function (res) {
            if (res.state) {
                if (res.bundle.length > 0) {
                    boo = true;
                    _this.bundleavailable = true;
                }
            }
        });
        return boo;
    };
    AddrecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addrecipe',
            template: __webpack_require__("./src/app/components/addrecipe/addrecipe.component.html"),
            styles: [__webpack_require__("./src/app/components/addrecipe/addrecipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_shipmentdata_service__["a" /* ShipmentdataService */],
            __WEBPACK_IMPORTED_MODULE_4__service_bundledata_service__["a" /* BundledataService */],
            __WEBPACK_IMPORTED_MODULE_5__service_systemdata_service__["a" /* SystemdataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddrecipeComponent);
    return AddrecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbaruser></app-navbaruser>\n<body class=\"profile-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('http://fitphysio.com.au/wp-content/uploads/2015/06/slider03-1440x511.jpg'); width:100%;  \"></div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12 \">\n            <div class=\"profile-tabs\" align=\"center\">\n              <div class=\"nav-align-center\">\n                <h3><b>Update System Data</b></h3>\n                <form>\n                  <div class=\"form-group col-md-12\">\n                    <div class=\"col-md-4\"></div>\n                    <div class=\"col-md-4\">\n                      <h4 class=\"text-center\">Add new Timber Name</h4>\n                      <div id=\"timbernumDiv\">\n                        <input  placeholder=\"Enter Timber Name\" class=\"form-control\"  name=\"timbername\" [(ngModel)]=\"timbername\" id=\"timbername\" />\n                      </div>\n                      <div class=\"text-center\">\n                        <button class=\"btn btn-primary btn-lg \" (click)=\"saveName()\"> Add Timber Name </button>\n                      </div>\n\n                      <h4 class=\"text-center\">Add new Cross Section</h4>\n                      <div id=\"crosssectionDiv\">\n                        <input  placeholder=\"Enter Cross Section\" class=\"form-control\"  name=\"crosssection\" [(ngModel)]=\"crosssection\" id=\"crosssection\" />\n                      </div>\n                      <div class=\"text-center\">\n                        <button class=\"btn btn-primary btn-lg \" (click)=\"saveCross()\"> Add Cross Section </button>\n                      </div>\n\n                    </div>\n                    <div class=\"col-md-4\"></div>\n                  </div>\n                </form>\n\n              </div>\n            </div>\n            <!-- End Profile Tabs -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n</body>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_systemdata_service__ = __webpack_require__("./src/app/service/systemdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(systemdata, router) {
        this.systemdata = systemdata;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AdminComponent.prototype.getData = function () {
        var _this = this;
        this.systemdata.getData("A").subscribe(function (res) {
            _this.data = res.data[0];
        });
    };
    AdminComponent.prototype.saveName = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(this.timbername) || this.timbername === "") {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'warning',
                html: '<text id="swal-input" type="text" ng-model="test">Timber Name Empty !!!</text>',
            });
        }
        else {
            this.data.timbernames.push(this.timbername);
            this.systemdata.saveName(this.data).subscribe(function (res) {
                if (res.state) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                        type: 'success',
                        html: '<text id="swal-input" type="text" ng-model="test">Data Saved</text>',
                    });
                    _this.getData();
                    _this.timbername = "";
                }
            });
        }
    };
    AdminComponent.prototype.saveCross = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(this.crosssection) || this.crosssection === "") {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'warning',
                html: '<text id="swal-input" type="text" ng-model="test">CrossSection is Empty !!!</text>',
            });
        }
        else {
            this.data.crosssections.push(this.crosssection);
            this.systemdata.saveCross(this.data).subscribe(function (res) {
                if (res.state) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                        type: 'success',
                        html: '<text id="swal-input" type="text" ng-model="test">Data Saved</text>',
                    });
                    _this.getData();
                    _this.crosssection = "";
                }
            });
        }
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_systemdata_service__["a" /* SystemdataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbaruser></app-navbaruser>\n<body class=\"signup-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('https://i.pinimg.com/originals/b6/6d/2a/b66d2af3d2920db5676a2839b4cc9205.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n          <div class=\"card card-signup\">\n            <form class=\"form-group\" (submit)=\"LoginData()\">\n              <div class=\"header header-danger text-center\">\n                <h4>Administrative Log In</h4>\n                <div class=\"social-line\">\n                  <a href=\"#facebook\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-facebook-square\"></i>\n                  </a>\n                  <a href=\"#twitter\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"#g+\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-google-plus\"></i>\n                  </a>\n                </div>\n              </div>\n              <p class=\"text-divider\">Or Be Classical</p>\n              <div class=\"content\">\n\n\n\n                <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">email</i>\n                        </span>\n                  <input type=\"email\" class=\"form-control\"  placeholder=\"Email...\" name=\"email\" [(ngModel)]=\"email\"/>\n                </div>\n\n                <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">lock_outline</i>\n                        </span>\n                  <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"/>\n                </div>\n\n                <!-- If you want to add a checkbox to this form, uncomment this code\n\n                                  <div class=\"checkbox\">\n                                      <label>\n                                          <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                          Subscribe to newsletter\n                                      </label>\n                                  </div> -->\n              </div>\n              <div class=\"footer text-center\">\n                <button class=\"btn btn-simple btn-primary btn-lg\" type=\"submit\">Log In</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n<app-footer></app-footer>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminloginComponent = /** @class */ (function () {
    function AdminloginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminloginComponent.prototype.ngOnInit = function () {
    };
    AdminloginComponent.prototype.LoginData = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginAdmin(user).subscribe(function (res) {
            if (res.state) {
                _this.authService.saveData(res.token, res.adminData);
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('"You are logged in"', '', 'success');
                _this.router.navigate(['/admin']);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Login Failed !', '', 'warning');
                _this.router.navigate(['/adminlogin']);
            }
        });
    };
    AdminloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-adminlogin',
            template: __webpack_require__("./src/app/components/adminlogin/adminlogin.component.html"),
            styles: [__webpack_require__("./src/app/components/adminlogin/adminlogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminloginComponent);
    return AdminloginComponent;
}());



/***/ }),

/***/ "./src/app/components/checkrecipe/checkrecipe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/checkrecipe/checkrecipe.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body class=\"profile-page\">\n\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" >\n    <img src=\"{{this.recipe.img}}\" width=\"100%\" height=\"700\">\n  </div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <form class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"profile\">\n              <div class=\"name\">\n                <h3 class=\"title\">{{this.recipe.name}}</h3>\n                <h4>Added by <b>{{this.recipe.author}}</b></h4>\n                <h4>ID: {{this.recipe._id}}</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"description text-center\">\n            <p>{{this.recipe.description}}</p>\n            <p>{{this.recipe.date}}</p>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 \">\n              <div class=\"profile-tabs\">\n                <div class=\"name\" align=\"center\">\n                  <h3 class=\"title\">Ingredients</h3>\n                  <div *ngFor=\"let i of this.recipe.ingredients\">\n                    <p>{{i}}</p><br>\n                  </div>\n                </div>\n\n                <div class=\"name\" align=\"center\">\n                  <h3 class=\"title\">Health Conditions</h3>\n                  <div *ngFor=\"let i of this.recipe.health\">\n                    <p>{{i}}</p><br>\n                  </div>\n                </div>\n\n                <div class=\"name\" align=\"center\">\n                  <h3 class=\"title\">Occasions </h3>\n                  <div *ngFor=\"let i of this.recipe.occasion\">\n                    <p>{{i}}</p><br>\n                  </div>\n                </div>\n              </div>\n\n              <!-- End Profile Tabs -->\n            </div>\n            <div class=\"name\" align=\"center\">\n              <h3 class=\"title\">Method </h3>\n              <p>{{this.recipe.method}}</p>\n            </div>\n            <div align=\"center\">\n              <button class=\"btn btn-simple btn-success btn-lg\" (click)=\"acceptRecipe()\">Accept This Recipe</button>\n              <button class=\"btn btn-simple btn-danger btn-lg\" (click)=\"declineRecipe()\">Decline This Recipe</button>\n            </div>\n\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n</body>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/checkrecipe/checkrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckrecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_recipedata_service__ = __webpack_require__("./src/app/service/recipedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckrecipeComponent = /** @class */ (function () {
    function CheckrecipeComponent(recipedata, acrouter, authservice, router) {
        var _this = this;
        this.recipedata = recipedata;
        this.acrouter = acrouter;
        this.authservice = authservice;
        this.router = router;
        this.id = acrouter.snapshot.params['_id'];
        recipedata.searchByIdTemp({ id: this.id }).subscribe(function (res) {
            _this.recipe = res.recipe;
            _this.recipe._id = _this.id;
        });
    }
    CheckrecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getAdminProfile().subscribe(function (res) {
            _this.user = res.admin;
            _this.id = res.admin._id;
        }, function (err) {
            _this.router.navigate(['/adminlogin']);
            return false;
        });
    };
    CheckrecipeComponent.prototype.acceptRecipe = function () {
        var _this = this;
        console.log(this.recipe);
        this.recipedata.deleteTemp(this.recipe).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Recipe Accepted!', 'Data Updated', 'success');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Failed !', 'Data not Updated', 'warning');
            }
        });
        this.recipedata.saveRecipe(this.recipe).subscribe(function (res) {
            if (res.state) {
                _this.router.navigate(['/admin']);
            }
            else {
                alert("Data not updated, try again");
            }
        });
    };
    CheckrecipeComponent.prototype.declineRecipe = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.recipedata.deleteTemp(_this.recipe).subscribe(function (res) {
                    if (res.state) {
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Declined!', 'Recipe has been deleted.', 'success');
                        _this.router.navigate(['/admin']);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Failed!', 'Recipe not deleted.', 'error');
                    }
                });
            }
        });
    };
    CheckrecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkrecipe',
            template: __webpack_require__("./src/app/components/checkrecipe/checkrecipe.component.html"),
            styles: [__webpack_require__("./src/app/components/checkrecipe/checkrecipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_recipedata_service__["a" /* RecipedataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CheckrecipeComponent);
    return CheckrecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/checkrecipecard/checkrecipecard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/checkrecipecard/checkrecipecard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-nav-tabs\" style=\"background-color: #f8f1f5\">\n  <div class=\"header\" style=\"background-color: #fff8fc;\n  background-size: cover\">\n    <!-- colors: \"header-primary\", \"header-info\", \"header-success\", \"header-warning\", \"header-danger\" -->\n    <img class=\"img-src\" src=\"{{Recipe.img}}\" height=\"100%\" width=\"100%\">\n  </div>\n  <div class=\"content\">\n    <h3 class=\"header-danger text-center\">{{Recipe.name}}</h3>\n    <div class=\"tab-content text-center\">\n      <div class=\"tab-pane active\">\n        <p>{{Recipe.description}} </p>\n      </div>\n      <div>\n        <a [routerLink] = \"['/checkrecipe',Recipe._id]\"><button class=\"btn btn-simple btn-primary btn-lg\">View Recipe</button></a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/checkrecipecard/checkrecipecard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckrecipecardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckrecipecardComponent = /** @class */ (function () {
    function CheckrecipecardComponent() {
    }
    CheckrecipecardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CheckrecipecardComponent.prototype, "Recipe", void 0);
    CheckrecipecardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkrecipecard',
            template: __webpack_require__("./src/app/components/checkrecipecard/checkrecipecard.component.html"),
            styles: [__webpack_require__("./src/app/components/checkrecipecard/checkrecipecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckrecipecardComponent);
    return CheckrecipecardComponent;
}());



/***/ }),

/***/ "./src/app/components/editrecipe/editrecipe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/editrecipe/editrecipe.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body class=\"profile-page\">\n<div class=\"wrapper\">\n\n  <div class=\"header header-filter\" style=\"background-image: url('../../../assets/img/kelumtimber.jpg'); width:100%;  \"></div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <div class=\"row\" >\n          <div class=\"profile\">\n            <div class=\"name\">\n              <h3 class=\"title\">Add New Arrival</h3>\n            </div>\n            <form class=\"form-group\">\n              <div class=\"form-group col-md-12\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                  <h4>Date</h4>\n                  <input type=\"date\" class=\"form-control\" name=\"date\" [(ngModel)]=\"date\" />\n\n                </div>\n                <div class=\"col-md-4\"></div>\n              </div>\n              <div class=\"row col-md-6\">\n                <div class=\"col-sm-12 col-md-12\">\n\n                  <h4>Bundle Number</h4>\n                  <input class=\"form-control\" placeholder=\"Please enter the bundle number\"  required=\"true\"\n                         name=\"bundlenum\" [(ngModel)]=\"bundlenum\"/>\n                  <br>\n                  <div class=\"col-md-12\">\n                    <div class=\"col-md-4\"></div>\n                    <div class=\"col-md-4\">\n                      <button class=\"btn btn-default btn-primary\" (click)=\"addBundle(this.bundlenum)\">Add</button>\n                    </div>\n                    <br/>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <h4>Arrival details</h4>\n                <div>\n                  <h4>Total Pieces in Arrival : {{arrivalPieces}}</h4>\n                  <table class=\"table\">\n                    <thead>\n                    <tr>\n                      <th>Bundle Number</th>\n                      <th>Timber Name</th>\n                      <th>Purchase Date</th>\n                      <th>Pieces</th>\n                      <th class=\"text-right\">Price</th>\n                      <th>Actions</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let bundle of bundles.reverse()\">\n                      <td>{{bundle.bundleNumber}}</td>\n                      <td>{{bundle.timberName}}</td>\n                      <td>{{bundle.purchaseDate.toString().substr(0,10)}}</td>\n                      <td>{{bundle.totalPieces}}</td>\n                      <td class=\"text-right\">{{bundle.totalPrice}}</td>\n                      <td class=\"td-actions text-right\">\n                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-round\" (click)=\"removeBundle(bundle)\">\n                          <i class=\"material-icons\">close</i>\n                        </button>\n\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <button  class=\"btn btn-primary\" (click)=\"saveArrival()\">Save Shipment</button>\n                <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n                <!--a href=\"javascript:window.print();\">Print details</a-->\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n</body>\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/editrecipe/editrecipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditrecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_bundledata_service__ = __webpack_require__("./src/app/service/bundledata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shipmentdata_service__ = __webpack_require__("./src/app/service/shipmentdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditrecipeComponent = /** @class */ (function () {
    function EditrecipeComponent(shipmentdata, bundledata, router) {
        var _this = this;
        this.shipmentdata = shipmentdata;
        this.bundledata = bundledata;
        this.router = router;
        this.bundles = [];
        this.removeBundle = function (bun) {
            _this.bundles = _this.bundles.filter(function (bundle) { return bundle.bundleNumber !== bun.bundleNumber; });
        };
    }
    EditrecipeComponent.prototype.ngOnInit = function () {
    };
    EditrecipeComponent.prototype.addBundle = function (bundlenum) {
        var _this = this;
        var bundle = {};
        this.bundledata.getBundleByBundleNumber({ number: bundlenum }).subscribe(function (res) {
            if (res.state) {
                if (res.bundle.length == 0 || res.bundle[0].deleted) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                        type: 'warning',
                        html: '<text id="swal-input" type="text" ng-model="test">Wrong Bundle Number !!!</text>',
                    });
                    _this.bundlenum = "";
                }
                else {
                    bundle = res.bundle[0];
                    if ((_this.bundles.filter(function (bund) { return bund.bundleNumber === bundle.bundleNumber; }).length > 0)) {
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                            type: 'warning',
                            html: '<text id="swal-input" type="text" ng-model="test">Bundle already added !!!</text>',
                        });
                    }
                    else {
                        _this.bundles.push(bundle);
                        _this.arrivalPieces = _this.calculateTotalArrivalPieces();
                        _this.bundlenum = "";
                    }
                }
            }
            else {
                console.log(res);
            }
        });
    };
    EditrecipeComponent.prototype.calculateTotalArrivalPieces = function () {
        var total = 0;
        for (var bundle in this.bundles) {
            if (!(Object(__WEBPACK_IMPORTED_MODULE_5_util__["isUndefined"])(this.bundles[bundle].totalPieces)) || Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNumber"])(this.bundles[bundle].totalPieces))
                total = total + Number(this.bundles[bundle].totalPieces);
        }
        return total;
    };
    EditrecipeComponent.prototype.cancel = function () {
        this.arrivalPieces = 0;
        this.bundles = [];
        this.date = null;
    };
    EditrecipeComponent.prototype.saveArrival = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_5_util__["isUndefined"])(this.date)) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                type: 'warning',
                html: '<text id="swal-input" type="text" ng-model="test">Set Arrival Date !!! </text>',
            });
        }
        else {
            var count_1 = 0;
            for (var bundle in this.bundles) {
                this.bundles[bundle].arrivalDate = this.date;
                this.bundledata.deleteBundle(this.bundles[bundle]).subscribe(function (res) {
                    if (res.state) {
                        count_1++;
                        if (count_1 == _this.bundles.length) {
                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                                type: 'success',
                                html: '<text id="swal-input" type="text" ng-model="test">Arrival Saved !!!</text>',
                            });
                            _this.bundles = [];
                            _this.arrivalPieces = 0;
                        }
                    }
                    else {
                        console.log(res);
                    }
                });
            }
        }
    };
    EditrecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editrecipe',
            template: __webpack_require__("./src/app/components/editrecipe/editrecipe.component.html"),
            styles: [__webpack_require__("./src/app/components/editrecipe/editrecipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_shipmentdata_service__["a" /* ShipmentdataService */],
            __WEBPACK_IMPORTED_MODULE_1__service_bundledata_service__["a" /* BundledataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], EditrecipeComponent);
    return EditrecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/editrecipecard/editrecipecard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/editrecipecard/editrecipecard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-nav-tabs\" style=\"background-color: #f8f1f5\">\n  <div class=\"header\" style=\"background-color: #fff8fc;\n  background-size: cover\">\n    <!-- colors: \"header-primary\", \"header-info\", \"header-success\", \"header-warning\", \"header-danger\" -->\n    <img class=\"img-src\" src=\"{{Recipe.img}}\" height=\"100%\" width=\"100%\">\n  </div>\n  <div class=\"content\">\n    <h3 class=\"header-danger text-center\">{{Recipe.name}}</h3>\n    <div class=\"tab-content text-center\">\n      <div class=\"tab-pane active\">\n        <p>{{Recipe.description}} </p>\n      </div>\n      <div>\n        <a [routerLink] = \"['/editrecipe',Recipe._id]\"><button class=\"btn btn-simple btn-primary btn-lg\">Edit Recipe</button></a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/editrecipecard/editrecipecard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditrecipecardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditrecipecardComponent = /** @class */ (function () {
    function EditrecipecardComponent() {
    }
    EditrecipecardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditrecipecardComponent.prototype, "Recipe", void 0);
    EditrecipecardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editrecipecard',
            template: __webpack_require__("./src/app/components/editrecipecard/editrecipecard.component.html"),
            styles: [__webpack_require__("./src/app/components/editrecipecard/editrecipecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditrecipecardComponent);
    return EditrecipecardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <nav class=\"pull-left\">\n      <ul>\n        <li>\n          <a href=\"http://www.bitzmark.com\">\n            Bitz Mark\n          </a>\n        </li>\n        <li>\n          <a [routerLink] = \"['/admin']\">\n            Update System Data\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright pull-right\">\n      &copy; 2018, made for Kalum Timber World (Pvt)Ltd by <a href=\"http://www.bitzmark.com\" target=\"_blank\">Bitz Mark</a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router, authservice) {
        this.router = router;
        this.authservice = authservice;
    }
    FooterComponent.prototype.ngOnInit = function () {
        document.getElementById("adminhome").style.display = "block";
        this.authservice.getProfile().subscribe(function (res) {
            document.getElementById("adminlog").style.display = "none";
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authservice.getAdminProfile().subscribe(function (res) {
            document.getElementById("adminhome").style.display = "none";
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<body class=\"landing-page\">\r\n<div class=\"wrapper\">\r\n  <div class=\"header header-filter\" style=\"background-image: url('../../../assets/img/kelumtimber.jpg'); width:100%;  \"></div>\r\n  <div class=\"main main-raised\">\r\n    <div class=\"container\">\r\n      <div class=\"section text-center section-landing\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 col-md-offset-2\">\r\n            <h2 class=\"title\">Kelum Timber Stock Management Application</h2>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"features\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"card\" style=\"width: 100%;\">\r\n                <img class=\"card-img-top\" src=\"../../../assets/img/warehouse.jpg\" alt=\"Card image cap\" style=\"width: 100%\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Warehouse : Sujeewa</h4>\r\n                  <h5>Available total number of bundles : {{bundlesA.length}}</h5>\r\n                  <h5>Total value of available timber : MYR {{this.counttotalprice(bundlesA)}}</h5>\r\n                  <!--h5>Last received shipment : {{bundlesA.length}}</h5-->\r\n                  <a [routerLink] = \"['/recipe','Sujeewa']\" class=\"btn btn-primary\">View Stat</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"card\" style=\"width: 100%;\">\r\n                <img class=\"card-img-top\" src=\"../../../assets/img/warehouse.jpg\" alt=\"Card image cap\" style=\"width: 100%\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Warehouse : Asala</h4>\r\n                  <h5>Available total number of bundles : {{bundlesB.length}}</h5>\r\n                  <h5>Total value of available timber : MYR {{this.counttotalprice(bundlesB)}}</h5>\r\n                  <!--h5>Last received shipment : {{bundlesB.length}}</h5-->\r\n                  <a [routerLink] = \"['/recipe','Asala']\" class=\"btn btn-primary\">View Stats</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n</body>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_bundledata_service__ = __webpack_require__("./src/app/service/bundledata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent(bundledata, router) {
        var _this = this;
        this.bundledata = bundledata;
        this.router = router;
        this.warehouseA = { warehouse: "Sujeewa" };
        this.warehouseB = { warehouse: "Asala" };
        this.bundledata.getBundleByWarehouse(this.warehouseA).subscribe(function (res) {
            _this.bundlesA = res.bundle;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.bundledata.getBundleByWarehouse(this.warehouseB).subscribe(function (res) {
            _this.bundlesB = res.bundle;
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    LandingpageComponent.prototype.counttotalprice = function (bundles) {
        var total = 0;
        for (var bundle in bundles) {
            total += bundles[bundle].totalPrice;
        }
        return total;
    };
    LandingpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landingpage',
            template: __webpack_require__("./src/app/components/landingpage/landingpage.component.html"),
            styles: [__webpack_require__("./src/app/components/landingpage/landingpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_bundledata_service__["a" /* BundledataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbaruser></app-navbaruser>\n<body class=\"signup-page\">\n  <div class=\"wrapper\">\n    <div class=\"header header-filter\" style=\"background-image: url('https://i.pinimg.com/originals/b6/6d/2a/b66d2af3d2920db5676a2839b4cc9205.jpg'); background-size: cover; background-position: top center;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n            <div class=\"card card-signup\">\n              <form class=\"form-group\" (submit)=\"LoginData()\">\n                <div class=\"header header-danger text-center\">\n                  <h4>Log In</h4>\n                  <div class=\"social-line\">\n                    <a href=\"#facebook\" class=\"btn btn-simple btn-just-icon\">\n                      <i class=\"fa fa-facebook-square\"></i>\n                    </a>\n                    <a href=\"#twitter\" class=\"btn btn-simple btn-just-icon\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </a>\n                    <a href=\"#g+\" class=\"btn btn-simple btn-just-icon\">\n                      <i class=\"fa fa-google-plus\"></i>\n                    </a>\n                  </div>\n                </div>\n                <p class=\"text-divider\">Or Be Classical</p>\n                <div class=\"content\">\n\n\n\n                  <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">email</i>\n                        </span>\n                    <input type=\"email\" class=\"form-control\"  placeholder=\"Email...\" name=\"email\" [(ngModel)]=\"email\"/>\n                  </div>\n\n                  <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">lock_outline</i>\n                        </span>\n                    <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"/>\n                  </div>\n\n                  <!-- If you want to add a checkbox to this form, uncomment this code\n\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                            Subscribe to newsletter\n                                        </label>\n                                    </div> -->\n                </div>\n                <div class=\"footer text-center\">\n                  <button class=\"btn btn-simple btn-primary btn-lg\" type=\"submit\">Log In</button>\n                  <p class=\"text-divider\">Don't have an account?</p>\n                  <a [routerLink] = \"['/register']\" class=\"btn btn-simple btn-primary btn-lg\">Sign Up</a>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.LoginData = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authService.saveData(res.token, res.userData);
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('You are logged in', '', 'success');
                //location.reload();
                _this.router.navigate(['/home']);
            }
            else {
                alert("logging in failed");
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"navigation-example\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink] = \"['/home']\">Bitz Mark</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse \" id=\"navigation-example\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a class=\"nav-link\" [routerLink] = \"['/login']\"><h4>Login / Sign In</h4> </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbaruser/navbaruser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbaruser/navbaruser.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container\" style=\"width: 100%\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"col-md-2\"></div>\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav\">\n        <li id=\"dashboard\">\n          <a class=\"nav-link nav-item active\" [routerLink] = \"['/home']\" ><h3><b>Dashboard</b></h3> </a>\n        </li>\n        <li id=\"add\" class=\"text-center\">\n          <a class=\"nav-link nav-item active\" [routerLink] = \"['/add']\" ><h3><b>Record new Shipment(In Malaysia)</b></h3> </a>\n        </li>\n        <li id=\"arival\">\n          <a class=\"nav-link nav-item active\"  [routerLink] = \"['/edit']\"><h3><b>Record new Arrival(In Sri Lanka)</b></h3> </a>\n        </li>\n        <li id=\"Search\">\n          <a class=\"nav-link nav-item active\"  [routerLink] = \"['/search']\"><h3><b>Search Timber Bundles</b></h3> </a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</nav>\n\n<!--<nav class=\"navbar navbar-expand-lg bg-primary\">-->\n  <!--<div class=\"container\">-->\n    <!--<a class=\"navbar-brand\" href=\"#\">Navbar</a>-->\n    <!--<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\n      <!--<span class=\"navbar-toggler-bar navbar-kebab\"></span>-->\n      <!--<span class=\"navbar-toggler-bar navbar-kebab\"></span>-->\n      <!--<span class=\"navbar-toggler-bar navbar-kebab\"></span>-->\n    <!--</button>-->\n    <!--<div class=\"collapse navbar-collapse\" id=\"navbarNav\">-->\n      <!--<ul class=\"navbar-nav\">-->\n        <!--<li class=\"nav-item active\">-->\n          <!--<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>-->\n        <!--</li>-->\n        <!--<li class=\"nav-item\">-->\n          <!--<a class=\"nav-link\" href=\"#\">Features</a>-->\n        <!--</li>-->\n        <!--<li class=\"nav-item\">-->\n          <!--<a class=\"nav-link\" href=\"#\">Pricing</a>-->\n        <!--</li>-->\n        <!--<li class=\"nav-item\">-->\n          <!--<a class=\"nav-link disabled\" href=\"#\">Disabled</a>-->\n        <!--</li>-->\n      <!--</ul>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n"

/***/ }),

/***/ "./src/app/components/navbaruser/navbaruser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbaruserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbaruserComponent = /** @class */ (function () {
    function NavbaruserComponent(router, authservice) {
        this.router = router;
        this.authservice = authservice;
    }
    NavbaruserComponent.prototype.ngOnInit = function () {
    };
    NavbaruserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbaruser',
            template: __webpack_require__("./src/app/components/navbaruser/navbaruser.component.html"),
            styles: [__webpack_require__("./src/app/components/navbaruser/navbaruser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]])
    ], NavbaruserComponent);
    return NavbaruserComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body class=\"profile-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('http://fitphysio.com.au/wp-content/uploads/2015/06/slider03-1440x511.jpg'); width:100%;  \"></div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <form class=\"form-group\">\n          <div class=\"profile\">\n            <div class=\"avatar\">\n              <img src={{this.user.img}} alt=\"Circle Image\" class=\"img-circle img-responsive img-raised\">\n              <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showImg()\">Edit</button>\n              <div class=\"col-md-12\" id=\"imgdiv\">\n                <input class=\"form-control\" value={{this.user.img}} id=\"myimg\">\n                <button class=\"btn-primary btn-simple btn\" id=\"imgbtn\" (click)=\"editImg()\">done</button>\n              </div>\n            </div>\n            <div class=\"name\">\n              <h3 class=\"title\">{{this.user.name}}</h3>\n\n              <h6>{{this.user.occupation}} <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showOccupation()\">Edit</button></h6>\n              <div class=\"col-md-12\" id=\"occupationdiv\">\n                <input class=\"form-control\" value={{this.user.occupation}} id=\"myoccupation\">\n                <button class=\"btn-primary btn-simple btn\" id=\"occupationbtn\" (click)=\"editOccupation()\">done</button>\n              </div>\n\n              <input type=\"hidden\" id=\"id\" value={{this.user._id}}>\n            </div>\n            <br>\n            <div class=\"name\">\n              <p>Country: {{this.user.country}} <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showCountry()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"countrydiv\">\n                <input class=\"form-control\" value={{this.user.country}} id=\"mycountry\">\n                <button class=\"btn-primary btn-simple btn\" id=\"countrybtn\" (click)=\"editCountry()\">done</button>\n              </div>\n\n              <p>City: {{this.user.city}}  <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showCity()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"citydiv\">\n                <input class=\"form-control\" value={{this.user.city}} id=\"mycity\">\n                <button class=\"btn-primary btn-simple btn\" id=\"citybtn\" (click)=\"editCity()\">done</button>\n              </div>\n            </div>\n          </div>\n          </form>\n        </div>\n\n        <div>\n          <div class=\"col-md-12 \">\n            <form class=\"form-group\">\n            <div class=\"profile-tabs\" align=\"center\">\n              <h5 >Email : {{this.user.email}} <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showEmail()\">Edit</button></h5>\n              <div class=\"col-md-12\" id=\"emaildiv\">\n                <input class=\"form-control\" value={{this.user.email}} id=\"myemail\" type=\"email\">\n                <button class=\"btn-primary btn-simple btn\" id=\"emailbtn\" (click)=\"editEmail()\">done</button>\n              </div>\n\n              <p> User Name: {{this.user.username}} <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showUsername()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"usernamediv\">\n                <input class=\"form-control\" value={{this.user.username}} id=\"myusername\" >\n                <button class=\"btn-primary btn-simple btn\" id=\"usernamebtn\" (click)=\"editUsername()\">done</button>\n              </div>\n\n              <p>Weight: {{this.user.weight}}Kg <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showWeight()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"weightdiv\">\n                <input class=\"form-control\" value={{this.user.weight}} id=\"myweight\" >\n                <button class=\"btn-primary btn-simple btn\" id=\"weightbtn\" (click)=\"editWeight()\">done</button>\n              </div>\n\n              <p>Height: {{this.user.height}}m <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showHeight()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"heightdiv\">\n                <input class=\"form-control\" value={{this.user.height}} id=\"myheight\" >\n                <button class=\"btn-primary btn-simple btn\" id=\"heightbtn\" (click)=\"editHeight()\">done</button>\n              </div>\n\n              <p><b>BMI(Body Mass Index): {{this.user.weight/(this.user.height*this.user.height) | number:'2.1-3'}}</b></p>\n\n              <p>Allergies: <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showAllergies()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"allergiesdiv\">\n                <input class=\"form-control\" value={{this.user.allergies}} id=\"myallergies\" >\n                <button class=\"btn-primary btn-simple btn\" id=\"allergiesbtn\" (click)=\"editAllergies()\">done</button>\n              </div>\n              <div *ngFor=\"let i of this.user.allergies\">\n                <p>{{i}}</p><br>\n              </div>\n\n              <p>Health Conditions: <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showHealth()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"healthdiv\">\n                <input class=\"form-control\" value={{this.user.healthconditions}} id=\"myhealth\" >\n                <button class=\"btn-primary btn-simple btn\" id=\"healthbtn\" (click)=\"editHealth()\">done</button>\n              </div>\n              <div *ngFor=\"let i of this.user.healthconditions\">\n                <p>{{i}}</p><br>\n              </div>\n\n              <div class=\"nav-align-center\">\n\n                <div class=\"tab-content gallery\">\n                  <div class=\"tab-pane active\" id=\"studio\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\" align=\"center\">\n                        <button class=\"btn btn-simple btn-primary btn-lg\" (click)=\"updatefinal()\">Update Profile</button>\n                        <br>\n                        <button class=\"btn btn-simple btn-danger btn-lg\" (click)=\"goback()\">Cancel</button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n\n                    <div>\n                      <h3><b>My Recipes</b> <button class=\"btn btn-simple btn-success btn-lg\" (click)=\"addRecipeNav()\">Add New Recipe</button></h3>\n                      <div class=\" gallery\">\n                        <div >\n                          <h4 align=\"center\">{{this.msg}}</h4>\n                        </div>\n                        <div class=\"tab-pane active\" id=\"studio2\" *ngFor=\"let i of this.lis\">\n                          <div class=\"col-sm-4\">\n                            <app-editrecipecard [Recipe]=\"i\" ></app-editrecipecard>\n                          </div>\n                        </div>\n\n                      </div>\n                      <!-- End Profile Tabs -->\n                    </div>\n                  </div>\n\n\n                </div>\n              </div>\n            </div>\n            <!-- End Profile Tabs -->\n            </form>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n</body>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_recipedata_service__ = __webpack_require__("./src/app/service/recipedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice, recipedata, router) {
        this.authservice = authservice;
        this.recipedata = recipedata;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (res) {
            _this.user = res.user;
            _this.id = res.user._id;
            _this.name = res.user.username;
            _this.getRecipes();
        }, function (err) {
            _this.router.navigate(['/login']);
            return false;
        });
        document.getElementById("emaildiv").style.display = "none";
        document.getElementById("usernamediv").style.display = "none";
        document.getElementById("weightdiv").style.display = "none";
        document.getElementById("heightdiv").style.display = "none";
        document.getElementById("countrydiv").style.display = "none";
        document.getElementById("citydiv").style.display = "none";
        document.getElementById("occupationdiv").style.display = "none";
        document.getElementById("imgdiv").style.display = "none";
        document.getElementById("allergiesdiv").style.display = "none";
        document.getElementById("healthdiv").style.display = "none";
    };
    ProfileComponent.prototype.showEmail = function () {
        document.getElementById("emaildiv").style.display = "block";
        document.getElementById("myemail").select();
    };
    ProfileComponent.prototype.editEmail = function () {
        document.getElementById("emaildiv").style.display = "none";
        this.user.email = document.getElementById("myemail").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showUsername = function () {
        document.getElementById("usernamediv").style.display = "block";
        document.getElementById("myusername").select();
    };
    ProfileComponent.prototype.editUsername = function () {
        document.getElementById("usernamediv").style.display = "none";
        this.user.username = document.getElementById("myusername").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showWeight = function () {
        document.getElementById("weightdiv").style.display = "block";
        document.getElementById("myweight").select();
    };
    ProfileComponent.prototype.editWeight = function () {
        document.getElementById("weightdiv").style.display = "none";
        this.user.weight = document.getElementById("myweight").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showHeight = function () {
        document.getElementById("heightdiv").style.display = "block";
        document.getElementById("myheight").select();
    };
    ProfileComponent.prototype.editHeight = function () {
        document.getElementById("heightdiv").style.display = "none";
        this.user.height = document.getElementById("myheight").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showCountry = function () {
        document.getElementById("countrydiv").style.display = "block";
        document.getElementById("mycountry").select();
    };
    ProfileComponent.prototype.editCountry = function () {
        document.getElementById("countrydiv").style.display = "none";
        this.user.country = document.getElementById("mycountry").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showCity = function () {
        document.getElementById("citydiv").style.display = "block";
        document.getElementById("mycity").select();
    };
    ProfileComponent.prototype.editCity = function () {
        document.getElementById("citydiv").style.display = "none";
        this.user.city = document.getElementById("mycity").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showOccupation = function () {
        document.getElementById("occupationdiv").style.display = "block";
        document.getElementById("myoccupation").select();
    };
    ProfileComponent.prototype.editOccupation = function () {
        document.getElementById("occupationdiv").style.display = "none";
        this.user.occupation = document.getElementById("myoccupation").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showImg = function () {
        document.getElementById("imgdiv").style.display = "block";
        document.getElementById("myimg").select();
    };
    ProfileComponent.prototype.editImg = function () {
        document.getElementById("imgdiv").style.display = "none";
        this.user.img = document.getElementById("myimg").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showAllergies = function () {
        document.getElementById("allergiesdiv").style.display = "block";
        document.getElementById("myallergies").select();
    };
    ProfileComponent.prototype.editAllergies = function () {
        document.getElementById("allergiesdiv").style.display = "none";
        this.user.allergies = document.getElementById("myallergies").value.split(",");
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showHealth = function () {
        document.getElementById("healthdiv").style.display = "block";
        document.getElementById("myhealth").select();
    };
    ProfileComponent.prototype.editHealth = function () {
        document.getElementById("healthdiv").style.display = "none";
        this.user.healthconditions = document.getElementById("myhealth").value.split(",");
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Data Updated!', '', 'success');
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.updatefinal = function () {
        alert("Profile Updated successfully !");
        this.router.navigate(['/profile']);
    };
    ProfileComponent.prototype.goback = function () {
        this.router.navigate(['/home']);
    };
    ProfileComponent.prototype.getRecipes = function () {
        var _this = this;
        var author = { author: this.name };
        this.recipedata.searchByAuthor(author).subscribe(function (res) {
            _this.lis = res.recipe;
            if (_this.lis.length == 0) {
                _this.msg = "You didn't add any recipe yet";
                return true;
            }
            else {
                _this.msg = "We found " + _this.lis.length + " recipes added by you ";
                return true;
            }
        });
        return true;
    };
    ProfileComponent.prototype.addRecipeNav = function () {
        this.router.navigate(['/add']);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__service_recipedata_service__["a" /* RecipedataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/recipecard/recipecard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipecard/recipecard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-nav-tabs\" style=\"background-color: #f8f1f5\">\n  <div class=\"header\" style=\"background-color: #fff8fc;\n  background-size: cover\">\n    <!-- colors: \"header-primary\", \"header-info\", \"header-success\", \"header-warning\", \"header-danger\" -->\n    <img class=\"img-src\" src=\"{{Recipe.img}}\" height=\"100%\" width=\"100%\">\n  </div>\n  <div class=\"content\">\n    <h3 class=\"header-danger text-center\">{{Recipe.name}}</h3>\n    <div class=\"tab-content text-center\">\n      <div class=\"tab-pane active\">\n        <p>{{Recipe.description}} </p>\n      </div>\n      <div>\n        <neutron-rating [rating]=\"Recipe.rating\" [starColour]=\"'#FDD835'\" [readOnly]=\"true\" [starSize]=\"2\"></neutron-rating>\n        <a [routerLink] = \"['/recipe',Recipe._id]\"><button class=\"btn btn-simple btn-primary btn-lg\">View Recipe</button></a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/recipecard/recipecard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipecardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipecardComponent = /** @class */ (function () {
    function RecipecardComponent() {
    }
    RecipecardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RecipecardComponent.prototype, "Recipe", void 0);
    RecipecardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipecard',
            template: __webpack_require__("./src/app/components/recipecard/recipecard.component.html"),
            styles: [__webpack_require__("./src/app/components/recipecard/recipecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipecardComponent);
    return RecipecardComponent;
}());



/***/ }),

/***/ "./src/app/components/redipedetails/redipedetails.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/redipedetails/redipedetails.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('../../../assets/img/warehouse.jpg'); width:100%;  \"></div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"profile\">\n            <div class=\"warehouse\">\n              <h2 class=\"title\">Warehouse : {{warehouse.warehouse.toUpperCase()}}</h2>\n              <h3 class=\"title\">Total Number Of Bundles : {{bundles.length}}</h3>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <div>\n              <table   class=\"row-border hover table\">\n\n                <thead>\n                <tr>\n                  <th class=\"text-center\">#</th>\n                  <th class=\"text-center\">Timber Name</th>\n                  <th class=\"text-center\">Bundle Number</th>\n                  <th class=\"text-center\">Purchase Date</th>\n                  <th class=\"text-center\">Number of Pieces</th>\n                  <th class=\"text-center\">Buyer</th>\n                  <th class=\"text-center\">Bundle Price(MYR)</th>\n                  <th class=\"text-center\">Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let bundle of bundles\">\n                  <td class=\"text-center\"></td>\n                  <td class=\"text-center\">{{bundle.timberName}}</td>\n                  <td class=\"text-center\">{{bundle.bundleNumber}}</td>\n                  <td class=\"text-center\">{{bundle.purchaseDate.toString().substr(0,10)}}</td>\n                  <td class=\"text-center\">{{bundle.totalPieces}}</td>\n                  <td class=\"text-center\">{{bundle.buyer}}</td>\n                  <td class=\"text-center\">{{bundle.totalPrice}}</td>\n                  <td class=\"td-actions text-center\" >\n                    <button type=\"button\"  class=\"btn btn-success btn-round\"  title=\"View Bundle Details\" (click)=showRate(bundle)>\n                      <i class=\"material-icons\">notes</i>\n                    </button>\n                  </td>\n                  <div class=\"col-md-12\" id={{bundle.bundleNumber}} style=\"display: none\" >\n                    <h3 class=\"text-center\">Bundle Details</h3>\n                    <div class=\"row\">\n                      <table  class=\"table\">\n                        <thead>\n                        <tr>\n                          <th class=\"text-center\">Cross Section</th>\n                          <th class=\"text-center\">Length</th>\n                          <th class=\"text-center\">Pieces</th>\n                          <th class=\"text-center\">Unit price(MYR)</th>\n                          <th class=\"text-center\">Price(MYR)</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let timb of bundle.timber\">\n                          <td class=\"text-center\">{{timb.crosssection}}</td>\n                          <td class=\"text-center\">{{timb.piecelength}}</td>\n                          <td class=\"text-center\">{{timb.pieces}}</td>\n                          <td class=\"text-center\">{{timb.unitprice}}</td>\n                          <td class=\"text-center\">{{timb.price}}</td>\n                        </tr>\n\n\n                        </tbody>\n                      </table>\n                    </div>\n                    <div class=\"col-md-5\"></div>\n                    <button class=\"btn-danger btn btn-round\" id=\"cancelratebtn\" (click)=\"closeRate(bundle)\">Close</button>\n                  </div>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n\n\n            <!-- End Profile Tabs -->\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n</body>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/redipedetails/redipedetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedipedetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_bundledata_service__ = __webpack_require__("./src/app/service/bundledata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shipmentdata_service__ = __webpack_require__("./src/app/service/shipmentdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RedipedetailsComponent = /** @class */ (function () {
    //@Input()Bundles:any;
    function RedipedetailsComponent(bundledata, shipmentdata, acrouter) {
        var _this = this;
        this.bundledata = bundledata;
        this.shipmentdata = shipmentdata;
        this.acrouter = acrouter;
        this.id = acrouter.snapshot.params['_id'];
        if (this.id == "Sujeewa") {
            this.warehouse = { warehouse: "Sujeewa" };
        }
        else if (this.id == "Asala") {
            this.warehouse = { warehouse: "Asala" };
        }
        this.bundledata.getBundleByWarehouse(this.warehouse).subscribe(function (res) {
            _this.bundles = res.bundle;
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    RedipedetailsComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Loading Data!',
            text: 'Please Wait ..!',
            timer: 2000,
            onOpen: function () {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.showLoading();
            }
        }).then(function (result) {
            if (
            // Read more about handling dismissals
            result.dismiss === __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    };
    RedipedetailsComponent.prototype.showRate = function (bundle) {
        document.getElementById(bundle.bundleNumber).style.display = "block";
    };
    RedipedetailsComponent.prototype.closeRate = function (bundle) {
        document.getElementById(bundle.bundleNumber).style.display = "none";
    };
    RedipedetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-redipedetails',
            template: __webpack_require__("./src/app/components/redipedetails/redipedetails.component.html"),
            styles: [__webpack_require__("./src/app/components/redipedetails/redipedetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_bundledata_service__["a" /* BundledataService */],
            __WEBPACK_IMPORTED_MODULE_3__service_shipmentdata_service__["a" /* ShipmentdataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], RedipedetailsComponent);
    return RedipedetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"signup-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('https://i.pinimg.com/originals/b6/6d/2a/b66d2af3d2920db5676a2839b4cc9205.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n          <div class=\"card card-signup\">\n            <form class=\"form\" >\n              <div class=\"header header-danger text-center\">\n                <h4>Sign Up</h4>\n                <div class=\"social-line\">\n                  <a href=\"#facebook\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-facebook-square\"></i>\n                  </a>\n                  <a href=\"#twitter\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"#g+\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-google-plus\"></i>\n                  </a>\n                </div>\n              </div>\n              <p class=\"text-divider\">Or Be Classical</p>\n              <div class=\"content\">\n                <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">face</i>\n                        </span>\n                  <input type=\"text\" placeholder=\"Name...\" class=\"form-control\" name=\"Name\" id=\"Name\" [(ngModel)]=\"name\"/>\n                </div><div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">account_circle</i>\n                        </span>\n                <input  placeholder=\"User Name...\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"username\"/>\n              </div>\n\n\n                <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">email</i>\n                        </span>\n                  <input type=\"email\" class=\"form-control\"  placeholder=\"Email...\" name=\"email\" id=\"email\" [(ngModel)]=\"email\"/>\n                </div>\n\n                <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">lock_outline</i>\n                        </span>\n                  <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"password\"/>\n                </div>\n\n                <!-- If you want to add a checkbox to this form, uncomment this code\n\n                                  <div class=\"checkbox\">\n                                      <label>\n                                          <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                          Subscribe to newsletter\n                                      </label>\n                                  </div> -->\n              </div>\n              <div class=\"footer text-center\">\n                <button class=\"btn btn-simple btn-primary btn-lg\" (click)=\"validateData()\">Get Started</button>\n                <p class=\"text-divider\">Already have an account?</p>\n                <a [routerLink] = \"['/login']\" class=\"btn btn-simple btn-primary btn-lg\">Log In</a>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            name: document.getElementById("Name").value,
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
        this.authService.registerUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authService.saveData(res.token, res.userData);
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('You are Signed in', '', 'success');
                //location.reload();
                _this.router.navigate(['/home']);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Sign In Failed', '', 'warning');
                _this.router.navigate(['/login']);
            }
        });
    };
    RegisterComponent.prototype.validateData = function () {
        var _this = this;
        //alert((<HTMLInputElement>document.getElementById("Name")).value);
        this.msg = "";
        this.err = false;
        if (document.getElementById("username").value == "") {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('User Name is empty', '', 'warning');
            this.err = true;
        }
        else if (document.getElementById("Name").value == "") {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Name is empty', '', 'warning');
            this.err = true;
        }
        else if (document.getElementById("email").value == "") {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Email is empty', '', 'warning');
            this.err = true;
        }
        else if (document.getElementById("password").value == "") {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Password is empty', '', 'warning');
            this.err = true;
        }
        else
            //alert((<HTMLInputElement>document.getElementById("email")).value);
            this.authService.searchByEmail({ email: document.getElementById("email").value }).subscribe(function (res) {
                if (res.user.length > 0) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Email Already Used', '', 'warning');
                    _this.err = true;
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                        title: 'Registering ...!',
                        text: 'Please Wait',
                        timer: 1500,
                        onOpen: function () {
                            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.showLoading();
                        }
                    }).then(function (result) {
                        if (
                        // Read more about handling dismissals
                        result.dismiss === __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.DismissReason.timer) {
                            console.log('I was closed by the timer');
                        }
                    });
                    _this.registerData();
                }
            });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/searchpage/searchpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/searchpage/searchpage.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('../../../assets/img/warehouse.jpg'); width:100%;  \"></div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"profile\">\n            <div class=\"name\">\n              <h3 class=\"title\">Search Bundle</h3>\n            </div>\n          </div>\n        </div>\n        <form>\n          <div class=\"form-group col-md-12\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n              <h4 class=\"text-center\">Select Search Option</h4>\n              <select class=\"form-control\" data-style=\"btn btn-link\" align=\"center\"\n                      id=\"exampleFormControlSelect1\" name=\"warehouse\" [(ngModel)]=\"option\" required=\"true\" (change)=\"this.showItem()\">\n                <option selected>Bundle Number</option>\n                <option>Warehouse</option>\n              </select>\n              <div id=\"bundlenumDiv\">\n                <input  placeholder=\"Enter Bundle Number\" class=\"form-control\"  name=\"bundlenum\" [(ngModel)]=\"bundlenum\" id=\"bundlenum\" />\n              </div>\n\n              <div id=\"dateDiv\" >\n                <h4 class=\"text-center\">Select Ware House</h4>\n                <select class=\"form-control\" data-style=\"btn btn-link\" align=\"center\"\n                        id=\"exampleFormControlSelect\" name=\"warehouse\" [(ngModel)]=\"warehouse\"  (change)=\"this.showItem()\">\n                  <option selected>Crystal</option>\n                  <option>Diamond</option>\n                </select>\n                <h4 class=\"text-center\">From</h4>\n                <input type=\"date\" class=\"form-control\" name=\"datefrom\" [(ngModel)]=\"datefrom\" />\n                <h4 class=\"text-center\">To</h4>\n                <input type=\"date\" class=\"form-control\" name=\"dateto\" [(ngModel)]=\"dateto\" />\n              </div>\n\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary btn-lg \" (click)=\"searchBundle()\"> Search </button>\n              </div>\n\n\n            </div>\n            <div class=\"col-md-4\"></div>\n          </div>\n        </form>\n\n        <div class=\"row\">\n\n              <div id=\"table\" style=\"display: none\">\n\n                <table  class=\"row-border hover table\">\n\n                  <thead>\n                  <tr>\n                    <th class=\"text-center\">#</th>\n                    <th class=\"text-center\">Timber Name</th>\n                    <th class=\"text-center\">Bundle Number</th>\n                    <th class=\"text-center\">State</th>\n                    <th class=\"text-center\">Purchase Date</th>\n                    <th class=\"text-center\">Arrival Date</th>\n                    <th class=\"text-center\">Warehouse</th>\n                    <th class=\"text-center\">Buyer</th>\n                    <th class=\"text-center\">Bundle Price(MYR)</th>\n                    <th class=\"text-center\">Actions</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr *ngFor=\"let bundle of bundles\">\n                    <td class=\"text-center\"></td>\n                    <td class=\"text-center\">{{bundle.timberName}}</td>\n                    <td class=\"text-center\">{{bundle.bundleNumber}}</td>\n                    <td class=\"text-center\">{{bundle.deleted ? \"Received\" : \"Available\"}}</td>\n                    <td class=\"text-center\">{{bundle.purchaseDate.toString().substring(0,10)}}</td>\n                    <td class=\"text-center\">{{bundle.deleted? bundle.arrivalDate.toString().substring(0,10) : \"--\" }}</td>\n                    <td class=\"text-center\">{{bundle.warehouse}}</td>\n                    <td class=\"text-center\">{{bundle.buyer}}</td>\n                    <td class=\"text-center\">{{bundle.totalPrice}}</td>\n                    <td class=\"td-actions text-center\" >\n                      <button type=\"button\"  class=\"btn btn-success btn-round\"  title=\"View Bundle Details\" (click)=showRate(bundle)>\n                        <i class=\"material-icons\">notes</i>\n                      </button>\n                    </td>\n                    <div class=\"col-md-12\" id={{bundle.bundleNumber}} style=\"display: none\" >\n                      <h3 class=\"text-center\">Bundle Details</h3>\n                      <div class=\"row\">\n                        <table\n\n                          class=\"table\">\n                          <thead>\n                          <tr>\n                            <th class=\"text-center\">Cross Section</th>\n                            <th class=\"text-center\">Length</th>\n                            <th class=\"text-center\">Pieces</th>\n                            <th class=\"text-center\">Unit price(MYR)</th>\n                            <th class=\"text-center\">Price(MYR)</th>\n                          </tr>\n                          </thead>\n                          <tbody>\n                          <tr *ngFor=\"let timb of bundle.timber\">\n                            <td class=\"text-center\">{{timb.crosssection}}</td>\n                            <td class=\"text-center\">{{timb.piecelength}}</td>\n                            <td class=\"text-center\">{{timb.pieces}}</td>\n                            <td class=\"text-center\">{{timb.unitprice}}</td>\n                            <td class=\"text-center\">{{timb.price}}</td>\n                          </tr>\n\n\n                          </tbody>\n                        </table>\n                      </div>\n                      <div class=\"col-md-5\"></div>\n                      <button class=\"btn-danger btn btn-round\" id=\"cancelratebtn\" (click)=\"closeRate(bundle)\">Close</button>\n                    </div>\n                  </tr>\n                  </tbody>\n                </table>\n            <!-- End Profile Tabs -->\n              </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n</body>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/searchpage/searchpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_bundledata_service__ = __webpack_require__("./src/app/service/bundledata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchpageComponent = /** @class */ (function () {
    function SearchpageComponent(bundledata) {
        this.bundledata = bundledata;
    }
    SearchpageComponent.prototype.ngOnInit = function () {
        document.getElementById("dateDiv").style.display = "none";
        document.getElementById("bundlenumDiv").style.display = "none";
    };
    SearchpageComponent.prototype.searchBundle = function () {
        var _this = this;
        document.getElementById("table").style.display = "block";
        var data;
        switch (this.option) {
            case "Bundle Number": {
                data = { number: this.bundlenum };
                this.bundledata.getBundleByBundleNumber(data).subscribe(function (res) {
                    _this.bundles = res.bundle;
                    if (_this.bundles.length == 0) {
                        _this.msg = "No Available Bundle for bundle number " + String(_this.bundlenum);
                    }
                });
                break;
            }
            case "Warehouse": {
                if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(this.warehouse)) {
                    data = { warehouse: this.warehouse, datefrom: this.datefrom, dateto: this.dateto };
                    this.bundledata.getBundleByWarehouseWithTime(data).subscribe(function (res) {
                        _this.bundles = res.bundle;
                        if (_this.bundles.length == 0) {
                            _this.msg = "No Available bundles for gievn time";
                        }
                        else {
                            _this.msg = "We found " + _this.bundles.length + " bundles for given time";
                        }
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                        type: 'error',
                        title: 'Error',
                        text: 'Please Select a Warehouse!',
                    });
                }
                break;
            }
            case "": {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                    type: 'error',
                    title: 'Error',
                    text: 'Please Select a Search Option!',
                });
                break;
            }
        }
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Searching ...!',
            text: 'Please Wait ..!',
            timer: 1500,
            onOpen: function () {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.showLoading();
            }
        }).then(function (result) {
            if (
            // Read more about handling dismissals
            result.dismiss === __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    };
    SearchpageComponent.prototype.showItem = function () {
        this.bundlenum = "";
        this.datefrom = null;
        this.dateto = null;
        this.bundles = [];
        this.msg = "";
        document.getElementById("table").style.display = "none";
        if (this.option == "Warehouse") {
            document.getElementById("dateDiv").style.display = "block";
            document.getElementById("bundlenumDiv").style.display = "none";
        }
        if (this.option == "Bundle Number") {
            document.getElementById("dateDiv").style.display = "none";
            document.getElementById("bundlenumDiv").style.display = "block";
        }
    };
    SearchpageComponent.prototype.showRate = function (bundle) {
        document.getElementById(bundle.bundleNumber).style.display = "block";
    };
    SearchpageComponent.prototype.closeRate = function (bundle) {
        document.getElementById(bundle.bundleNumber).style.display = "none";
    };
    SearchpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-searchpage',
            template: __webpack_require__("./src/app/components/searchpage/searchpage.component.html"),
            styles: [__webpack_require__("./src/app/components/searchpage/searchpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_bundledata_service__["a" /* BundledataService */]])
    ], SearchpageComponent);
    return SearchpageComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Http, Headers} from '@angular/http';



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/register', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.getProfile = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({})
        };
        this.fetchToken();
        return this.http.post('user/profile', { user: "asm" }, { headers: { 'Authorization': this.authtoken } })
            .map(function (res) { return res; });
    };
    AuthService.prototype.fetchToken = function () {
        this.authtoken = localStorage.getItem("tokenId");
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/login', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.loginAdmin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('admin/login', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.saveData = function (token, userdata) {
        this.authtoken = token;
        this.user = userdata;
        localStorage.setItem("tokenId", token);
        localStorage.setItem('user', JSON.stringify(userdata));
    };
    AuthService.prototype.editUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/update', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.getAdminProfile = function () {
        this.fetchToken();
        return this.http.post('admin/getprofile', { user: "asm" }, { headers: { 'Authorization': this.authtoken } })
            .map(function (res) { return res; });
    };
    AuthService.prototype.searchByEmail = function (email) {
        return this.http.post('user/email', email).map(function (res) { return res; });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/bundledata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BundledataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BundledataService = /** @class */ (function () {
    function BundledataService(http) {
        this.http = http;
    }
    BundledataService.prototype.saveBundle = function (bundle) {
        return this.http.post('http://localhost:3000/timberbundle/savebundle', bundle).map(function (res) { return res; });
    };
    BundledataService.prototype.getBundleByWarehouse = function (warehouse) {
        return this.http.post('http://localhost:3000/timberbundle/warehouse', warehouse).map(function (res) { return res; });
    };
    BundledataService.prototype.getBundleByBundleNumber = function (bundlenumber) {
        return this.http.post('http://localhost:3000/timberbundle/number', bundlenumber).map(function (res) { return res; });
    };
    BundledataService.prototype.getBundleByWarehouseWithTime = function (data) {
        return this.http.post('http://localhost:3000/timberbundle/warehousetime', data).map(function (res) { return res; });
    };
    BundledataService.prototype.deleteBundle = function (bundle) {
        return this.http.post('http://localhost:3000/timberbundle/delete', bundle).map(function (res) { return res; });
    };
    BundledataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BundledataService);
    return BundledataService;
}());



/***/ }),

/***/ "./src/app/service/recipedata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipedataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipedataService = /** @class */ (function () {
    function RecipedataService(http) {
        this.http = http;
    }
    RecipedataService.prototype.searchBiIngredients = function (ingredients) {
        return this.http.post('recipe/ingredients', ingredients).map(function (res) { return res; });
    };
    RecipedataService.prototype.searchBiOccasions = function (occasions) {
        return this.http.post('recipe/occasion', occasions).map(function (res) { return res; });
    };
    RecipedataService.prototype.searchBiHealth = function (health) {
        return this.http.post('recipe/health', health).map(function (res) { return res; });
    };
    RecipedataService.prototype.searchByIngredientsExcepts = function (ingredients) {
        return this.http.post('recipe/ingredientsexcept', ingredients).map(function (res) { return res; });
    };
    RecipedataService.prototype.searchById = function (id) {
        return this.http.post('recipe/id', id).map(function (res) { return res; });
    };
    RecipedataService.prototype.searchByName = function (name) {
        return this.http.post('recipe/name', name).map(function (res) { return res; });
    };
    RecipedataService.prototype.searchByIdTemp = function (id) {
        return this.http.post('temprecipe/id', id).map(function (res) { return res; });
    };
    RecipedataService.prototype.searchByAuthor = function (author) {
        return this.http.post('recipe/author', author).map(function (res) { return res; });
    };
    RecipedataService.prototype.searchAllTemp = function () {
        return this.http.post('temprecipe/searchall', { user: "as" }).map(function (res) { return res; });
    };
    RecipedataService.prototype.saveTempRecipe = function (recipe) {
        return this.http.post('temprecipe/saverecipe', recipe).map(function (res) { return res; });
    };
    RecipedataService.prototype.saveRecipe = function (recipe) {
        return this.http.post('recipe/saverecipe', recipe).map(function (res) { return res; });
    };
    RecipedataService.prototype.saveComment = function (recipe) {
        return this.http.post('recipe/savecomment', recipe).map(function (res) { return res; });
    };
    RecipedataService.prototype.saveRate = function (recipe) {
        console.log(recipe);
        return this.http.post('recipe/saverate', recipe).map(function (res) { return res; });
    };
    RecipedataService.prototype.editRecipe = function (recipe) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('recipe/update', recipe, { headers: headers }).map(function (res) { return res; });
    };
    RecipedataService.prototype.deleteTemp = function (recipe) {
        return this.http.post('temprecipe/delete', recipe).map(function (res) { return res; });
    };
    RecipedataService.prototype.deleteRecipe = function (recipe) {
        return this.http.post('recipe/delete', recipe).map(function (res) { return res; });
    };
    RecipedataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RecipedataService);
    return RecipedataService;
}());



/***/ }),

/***/ "./src/app/service/shipmentdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipmentdataService = /** @class */ (function () {
    function ShipmentdataService(http) {
        this.http = http;
    }
    ShipmentdataService.prototype.saveShipment = function (shipment) {
        return this.http.post('http://localhost:3000/shipment/saveshipment', shipment).map(function (res) { return res; });
    };
    ShipmentdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ShipmentdataService);
    return ShipmentdataService;
}());



/***/ }),

/***/ "./src/app/service/systemdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemdataService = /** @class */ (function () {
    function SystemdataService(http) {
        this.http = http;
    }
    SystemdataService.prototype.saveData = function (systemdata) {
        return this.http.post('http://localhost:3000/data/savedata', systemdata).map(function (res) { return res; });
    };
    SystemdataService.prototype.saveName = function (systemdata) {
        return this.http.post('http://localhost:3000/data/savename', systemdata).map(function (res) { return res; });
    };
    SystemdataService.prototype.saveCross = function (systemdata) {
        return this.http.post('http://localhost:3000/data/savecross', systemdata).map(function (res) { return res; });
    };
    SystemdataService.prototype.getData = function (systemdata) {
        return this.http.post('http://localhost:3000/data/getdata', systemdata).map(function (res) { return res; });
    };
    SystemdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SystemdataService);
    return SystemdataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map