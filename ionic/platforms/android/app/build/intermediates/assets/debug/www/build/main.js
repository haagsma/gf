webpackJsonp([13],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroUsuarioPage = /** @class */ (function () {
    function CadastroUsuarioPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    CadastroUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroUsuarioPage');
    };
    CadastroUsuarioPage.prototype.login = function () {
        this.navCtrl.pop();
    };
    CadastroUsuarioPage.prototype.cadastrar = function (form) {
        var _this = this;
        if (form.valid == false) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Ops...', 'Preencha todos os campos corretamente!', 'error');
        }
        else {
            this.db.post('user/add', form.value).subscribe(function (res) {
                if (res.tipo == 0) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Error', res.resposta, 'error').then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    });
                }
                else if (res.tipo == 1) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Parabéns', 'Sua conta foi criada, agora você pode efetuar o login', 'success').then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Error', 'Houve um erro inesperado, tente novamente!', 'error').then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    });
                }
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
            });
        }
    };
    CadastroUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cadastro-usuario',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\cadastro-usuario\cadastro-usuario.html"*/'<div class="container">\n  <div class="painel-login">\n    <div class="card">\n      <div class="card-body">\n        <div class="text-center">\n          <img class="logo" src="assets/img/logo2.png">\n        </div>\n        <form #fCadastro="ngForm" (ngSubmit)="cadastrar(fCadastro)">\n          <div class="form-group text-center">\n            <label class="font-weight-bolder">Nome</label>\n            <input class="form-control rounded-pill" type="text" name="nome" placeholder="Nome Completo" ngModel required>\n          </div>\n          <div class="form-group text-center">\n            <label class="font-weight-bolder">Email</label>\n            <input class="form-control rounded-pill" type="text" name="email" placeholder="email" ngModel required>\n          </div>\n          <div class="form-group text-center">\n            <label class="font-weight-bolder">Senha</label>\n            <input class="form-control rounded-pill" type="password" name="senha" placeholder="*******" ngModel required>\n          </div>\n          <div class="form-group text-center">\n            <button type="submit" class="btn btn-info btn-lg text-white rounded-pill">Cadastrar</button>\n          </div>\n          <div class="form-group text-center">\n            <a href="#" (click)="login()"  class="btn btn-info btn-lg text-white rounded-pill"><i class="fas fa-arrow-left"></i></a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\cadastro-usuario\cadastro-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */]])
    ], CadastroUsuarioPage);
    return CadastroUsuarioPage;
}());

//# sourceMappingURL=cadastro-usuario.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosDebitosAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rotas_rotas__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__creditos_debitos_creditos_debitos__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CreditosDebitosAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditosDebitosAddPage = /** @class */ (function () {
    function CreditosDebitosAddPage(navCtrl, navParams, rota, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rota = rota;
        this.db = db;
        this.params = this.rota.getParams();
    }
    CreditosDebitosAddPage.prototype.ionViewCanEnter = function () {
    };
    CreditosDebitosAddPage.prototype.registrar = function (form) {
        var _this = this;
        if (form.valid) {
            form.value.ativo = this.params.id;
            form.value.tipo = this.params.tipo;
            this.db.post('registro/add', form.value).subscribe(function (res) {
                if (res.tipo == 0) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss', res.resposta, 'error');
                }
                else if (res.tipo == 1) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Parabéns', 'Registro cadastrado com sucesso!', "success").then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__creditos_debitos_creditos_debitos__["a" /* CreditosDebitosPage */]);
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error');
                }
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', 'Houve um erro ao salvar o registro, tente novamente mais tarde!', 'error');
            });
            console.log(form.value);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', 'Preencha o valor corretamente', 'error');
        }
    };
    CreditosDebitosAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-creditos-debitos-add',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\creditos-debitos-add\creditos-debitos-add.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card mt-4">\n    <div class="card-body bg-white rounded">\n      <div class="text-center">\n        <h3 *ngIf="params.tipo == \'gasto\'">Adicione o valor do Gasto/Emrpéstimo</h3>\n        <h3 *ngIf="params.tipo == \'pago\'">Adicione o valor do Pagamento</h3>\n      </div>\n      <form #fRegistro="ngForm" (ngSubmit)="registrar(fRegistro)">\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Valor</label>\n          <input class="form-control rounded-pill" type="text" name="valor" placeholder="R$ 35,00" ngModel required currencyMask [options]="{ prefix: \'R$ \', thousands: \'.\', decimal: \',\' }">\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Descrição</label>\n          <input class="form-control rounded-pill" type="text" name="descricao" placeholder="parcela do carro" ngModel >\n        </div>\n        <div class="form-group text-center">\n          <button type="submit" class="btn btn-info rounded-pill" >Salvar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\creditos-debitos-add\creditos-debitos-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rotas_rotas__["a" /* RotasProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]])
    ], CreditosDebitosAddPage);
    return CreditosDebitosAddPage;
}());

//# sourceMappingURL=creditos-debitos-add.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rotas_rotas__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__creditos_debitos_creditos_debitos__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalhesPage = /** @class */ (function () {
    function DetalhesPage(navCtrl, navParams, rotas, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rotas = rotas;
        this.db = db;
        this.list();
    }
    DetalhesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad  DetalhesPage');
    };
    DetalhesPage.prototype.list = function () {
        var _this = this;
        var params = this.rotas.getParams();
        console.log(params);
        this.db.post('registro/detalhes', { id: params.id }).subscribe(function (res) {
            if (res.tipo == 0) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', res.resposta, 'error').then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__creditos_debitos_creditos_debitos__["a" /* CreditosDebitosPage */]);
                });
            }
            else if (res.tipo == 1) {
                _this.registros = res.data;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', 'Houve um erro inesperado, tente novamente!', 'error').then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__creditos_debitos_creditos_debitos__["a" /* CreditosDebitosPage */]);
                });
            }
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error').then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__creditos_debitos_creditos_debitos__["a" /* CreditosDebitosPage */]);
            });
        });
    };
    DetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalhes',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\detalhes\detalhes.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card mt-2" *ngFor="let registro of registros">\n    <div class="card-body">\n      <p class="m-0 p-0"><strong>Tipo: </strong>\n        <strong *ngIf="registro.tipo == \'pago\'" class="text-success">{{ registro.tipo }}</strong>\n        <strong *ngIf="registro.tipo == \'gasto\'" class="text-danger">{{ registro.tipo }}</strong>\n      </p>\n      <p class="m-0 p-0"><strong>Descrição: </strong>{{ registro.descricao }}</p>\n      <p><strong>Valor: </strong>\n        <strong *ngIf="registro.tipo == \'pago\'" class="text-success">R$ {{ registro.valor }}</strong>\n        <strong *ngIf="registro.tipo == \'gasto\'" class="text-danger">R$ {{ registro.valor }}</strong>\n      </p>\n      <p class="text-right m-0 p-0"><small class="ml-1">Data: {{ registro.data.slice(0, 10) }}</small></p>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\detalhes\detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rotas_rotas__["a" /* RotasProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]])
    ], DetalhesPage);
    return DetalhesPage;
}());

//# sourceMappingURL=detalhes.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GanhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the GanhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GanhosPage = /** @class */ (function () {
    function GanhosPage(navCtrl, navParams, db, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.user = user;
        this.list();
    }
    GanhosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GanhosPage');
    };
    GanhosPage.prototype.list = function () {
        var _this = this;
        this.db.post('registro/ganhos', { id: this.user.dados._id }).subscribe(function (res) {
            console.log(_this.user.dados._id);
            if (res.tipo == 0) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Opss...', res.resposta, 'error').then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                });
            }
            else if (res.tipo == 1) {
                _this.registros = res.data;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Opss...', 'Houve um erro inesperado, tente novamente!', 'error').then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                });
            }
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error').then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            });
        });
    };
    GanhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ganhos',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\ganhos\ganhos.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card mt-2" *ngFor="let registro of registros">\n    <div class="card-body">\n      <!--<p class="m-0 p-0">\n        <strong>Ativo: </strong>\n        <strong class="text-success">{{ registro.nome }}</strong>\n      </p>-->\n      <p class="m-0 p-0"><strong>Descrição: </strong>{{ registro.descricao }}</p>\n      <p>\n        <strong>Valor: </strong>\n        <strong  class="text-success">R$ {{ registro.valor }}</strong>\n      </p>\n      <p class="text-right m-0 p-0"><small class="ml-1">Data: {{ registro.data.slice(0, 10) }}</small></p>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\ganhos\ganhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], GanhosPage);
    return GanhosPage;
}());

//# sourceMappingURL=ganhos.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GastosAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GastosAddPage = /** @class */ (function () {
    function GastosAddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GastosAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GastosAddPage');
    };
    GastosAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gastos-add',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\gastos-add\gastos-add.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card">\n    <div class="card-body">\n      <form>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Nome</label>\n          <input class="form-control rounded-pill" type="text" name="nome" placeholder="Ex.: Churrascaria">\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Descrição</label>\n          <input class="form-control rounded-pill" type="text" name="descricao" placeholder="churrascaria bom prato">\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Valor</label>\n          <input class="form-control rounded-pill" type="text" name="situacao" placeholder="150,00">\n        </div>\n        <div class="form-group text-center">\n          <button class="btn btn-info btn-lg text-white rounded-pill">Salvar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\gastos-add\gastos-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GastosAddPage);
    return GastosAddPage;
}());

//# sourceMappingURL=gastos-add.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gastos_add_gastos_add__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the GastosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GastosPage = /** @class */ (function () {
    function GastosPage(navCtrl, navParams, db, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.user = user;
        this.list();
    }
    GastosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GastosPage');
    };
    GastosPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gastos_add_gastos_add__["a" /* GastosAddPage */]);
    };
    GastosPage.prototype.list = function () {
        var _this = this;
        this.db.post('registro/gastos', { id: this.user.dados._id }).subscribe(function (res) {
            if (res.tipo == 0) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.fire('Opss...', res.resposta, 'error').then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                });
            }
            else if (res.tipo == 1) {
                console.log(res.data);
                _this.registros = res.data;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.fire('Opss...', 'Houve um erro inesperado, tente novamente!', 'error').then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                });
            }
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error').then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            });
        });
    };
    GastosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gastos',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\gastos\gastos.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card mt-2" *ngFor="let registro of registros">\n    <div class="card-body">\n      <!--<p class="m-0 p-0">\n        <strong>Ativo: </strong>\n        <strong class="text-success">{{ registro.nome }}</strong>\n      </p>-->\n      <p class="m-0 p-0"><strong>Descrição: </strong>{{ registro.descricao }}</p>\n      <p>\n        <strong>Valor: </strong>\n        <strong  class="text-danger">R$ {{ registro.valor }}</strong>\n      </p>\n      <p class="text-right m-0 p-0"><small class="ml-1">Data: {{ registro.data.slice(0, 10) }}</small></p>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\gastos\gastos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], GastosPage);
    return GastosPage;
}());

//# sourceMappingURL=gastos.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_library__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(base64, navCtrl, navParams, user, db, camera, photoLibrary, DomSanitizer) {
        this.base64 = base64;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.db = db;
        this.camera = camera;
        this.photoLibrary = photoLibrary;
        this.DomSanitizer = DomSanitizer;
        this.fotos = [];
        this.album = [];
        this.fotoChoosed = false;
        this.fotoToUpload = false;
        this.indiceArray = 0;
        this.loading = false;
        this.usuario = this.user.dados;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
        this.getImgPerfil();
    };
    PerfilPage.prototype.getImgPerfil = function () {
        this.fotoChoosed = this.db.getUrl() + 'uploads/perfil-' + this.user.dados._id + '.png?' + Math.random();
    };
    PerfilPage.prototype.onError = function () {
        this.fotoChoosed = false;
    };
    PerfilPage.prototype.att = function (form) {
        var _this = this;
        if (!form.valid) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Opss...', 'Preencha todos os campos corretamente!', 'error');
        }
        else {
            if (this.fotoToUpload) {
                //this.db.startUpload(this.fotoToUpload);
            }
            form.value.id = this.user.dados._id;
            this.db.post('user/edit', form.value).subscribe(function (res) {
                _this.user.dados = res.data;
                localStorage.setItem('gfdadospuglig', JSON.stringify(res.data));
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Parabéns', 'Seu perfil foi salvo com sucesso', "success").then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.fire('Opss...', 'Erro ao salvar seu perfil, tente novamente mais tarde!', 'error');
            });
        }
    };
    PerfilPage.prototype.getPhoto = function (event) {
        var _this = this;
        console.log('inicio upload');
        this.loading = true;
        var index = event.target.files.length - 1;
        if (event.target.files && event.target.files[index]) {
            console.log('existe array');
            console.log(event.target.files);
            var file = event.target.files[index];
            var formData = new FormData();
            formData.append('perfil', file, 'perfil-' + this.user.dados._id + '.png');
            this.db.upload(formData).subscribe(function (res) {
                console.log('upload success: ', res);
                _this.getImgPerfil();
                _this.loading = false;
            }, function (err) {
                console.log('Erro no  upload' + JSON.stringify(err));
                _this.getImgPerfil();
                _this.loading = false;
            });
        }
        else {
            console.log('-1 não vale burro');
        }
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\perfil\perfil.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="painel-login">\n\n    <div class="card">\n      <div class="card-body">\n        <div  *ngIf="fotoChoosed" class="text-center pt-4">\n          <a href="#"><img class="rounded-circle foto-perfil" [src]="DomSanitizer.bypassSecurityTrustUrl(fotoChoosed)" (error)="onError()"></a>\n          <div class="text-right">\n            <div class="text-center m-auto" *ngIf="loading">\n              <div class="spinner-grow text-success text-center m-auto" role="status" >\n                <span class="sr-only">Loading...</span>\n              </div>\n            </div>\n            <label  *ngIf="!loading" class="btn btn-info">\n              <i class="fas fa-edit"></i>\n              <input type="file" style="display: none;" name="perfil" (change)="getPhoto($event)">\n            </label>\n          </div>\n        </div>\n        <div class="text-center pt-4" *ngIf="!fotoChoosed">\n          <a   href="#"><img class="rounded-circle foto-perfil" src="assets/img/avatar.png"></a>\n          <div class="text-right" >\n            <div class="text-center m-auto" *ngIf="loading">\n              <div class="spinner-grow text-success text-center m-auto" role="status" >\n                <span class="sr-only">Loading...</span>\n              </div>\n            </div>\n            <label class="btn btn-info" *ngIf="!loading">\n              <i class="fas fa-edit"></i>\n              <input type="file" style="display: none;" name="perfil" (change)="getPhoto($event)">\n            </label>\n          </div>\n        </div>\n        <form #fPerfil="ngForm" (ngSubmit)="att(fPerfil)">\n          <div class="form-group text-center">\n            <label class="font-weight-bolder">Nome</label>\n            <input class="form-control rounded-pill" type="text" name="nome" placeholder="Nome Completo" required [ngModel]="usuario.nome" >\n          </div>\n          <div class="form-group text-center">\n            <label class="font-weight-bolder">Email</label>\n            <input class="form-control rounded-pill" type="text" name="email" placeholder="email" required [ngModel]="usuario.email" readonly>\n          </div>\n          <div class="form-group text-center">\n            <label class="font-weight-bolder">Senha</label>\n            <input class="form-control rounded-pill" type="text" name="senha" placeholder="*******" ngModel>\n          </div>\n          <div class="form-group text-center">\n            <button type="submit" class="btn btn-info btn-lg text-white rounded-pill">Salvar</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoasEmpresasAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pessoas_empresas_pessoas_empresas__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PessoasEmpresasAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PessoasEmpresasAddPage = /** @class */ (function () {
    function PessoasEmpresasAddPage(navCtrl, navParams, db, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.user = user;
    }
    PessoasEmpresasAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PessoasEmpresasAddPage');
    };
    PessoasEmpresasAddPage.prototype.cadastrar = function (form) {
        var _this = this;
        if (!form.valid) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', 'Preencha todos os campos obrigatórios corretamente', 'error');
        }
        else {
            form.value.user = this.user.dados._id;
            console.log(form.value);
            this.db.post('ativo/add', form.value).subscribe(function (res) {
                if (res.tipo == 1) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Parabéns', 'Cadastro salvo com sucesso, agora você pode cadastrar débitos e créditos', 'success').then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pessoas_empresas_pessoas_empresas__["a" /* PessoasEmpresasPage */]);
                    });
                }
                else if (res.tipo == 0) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', res.resposta, 'error').then(function () {
                        //this.navCtrl.setRoot(HomePage);
                        //this.navCtrl.push(PessoasEmpresasPage);
                    });
                }
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', 'Houve um erro, tente novamente!', 'error').then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            });
        }
    };
    PessoasEmpresasAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pessoas-empresas-add',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\pessoas-empresas-add\pessoas-empresas-add.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card">\n    <div class="card-body">\n      <form #fCadastro="ngForm" (ngSubmit)="cadastrar(fCadastro)">\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Nome</label>\n          <input class="form-control rounded-pill" type="text" name="nome" placeholder="Nome Completo" ngModel required>\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Descrição</label>\n          <input class="form-control rounded-pill" type="text" name="descricao" placeholder="pessoas da familia" ngModel>\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Situação</label>\n          <input currencyMask [options]="{ prefix: \'R$ \', thousands: \'.\', decimal: \',\' }" class="form-control rounded-pill" type="text" name="valor" placeholder="2,00" ngModel >\n        </div>\n        <div class="form-group text-center">\n          <button type="submit" class="btn btn-info btn-lg text-white rounded-pill">Salvar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\pessoas-empresas-add\pessoas-empresas-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], PessoasEmpresasAddPage);
    return PessoasEmpresasAddPage;
}());

//# sourceMappingURL=pessoas-empresas-add.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoasEmpresasEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rotas_rotas__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pessoas_empresas_pessoas_empresas__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PessoasEmpresasEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PessoasEmpresasEditPage = /** @class */ (function () {
    function PessoasEmpresasEditPage(navCtrl, navParams, rota, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rota = rota;
        this.db = db;
        this.ativo = this.rota.getParams();
    }
    PessoasEmpresasEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PessoasEmpresasEditPage');
    };
    PessoasEmpresasEditPage.prototype.editar = function (form) {
        var _this = this;
        form.value._id = this.ativo._id;
        this.db.post('ativo/editar', form.value).subscribe(function (res) {
            if (res.tipo == 0) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', res.resposta, 'error');
            }
            else if (res.tipo == 1) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Parabéns', 'Cadastro editado com sucesso', 'success').then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pessoas_empresas_pessoas_empresas__["a" /* PessoasEmpresasPage */]);
                });
            }
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.fire('Opss...', 'Houve um erro interno, tente novamente!', 'error').then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            });
        });
    };
    PessoasEmpresasEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pessoas-empresas-edit',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\pessoas-empresas-edit\pessoas-empresas-edit.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card">\n    <div class="card-body">\n      <form #fCadastro="ngForm" (ngSubmit)="editar(fCadastro)">\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Nome</label>\n          <input class="form-control rounded-pill" type="text" name="nome" placeholder="Nome Completo" [(ngModel)]="ativo.nome" required>\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Descrição</label>\n          <input class="form-control rounded-pill" type="text" name="descricao" placeholder="pessoas da familia" [(ngModel)]="ativo.descricao">\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Situação</label>\n          <input currencyMask [options]="{ prefix: \'R$ \', thousands: \'.\', decimal: \',\' }" class="form-control rounded-pill" type="text" name="valor" placeholder="2,00" [(ngModel)]="ativo.valor" required>\n        </div>\n        <div class="form-group text-center">\n          <button type="submit" class="btn btn-info btn-lg text-white rounded-pill">Editar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\pessoas-empresas-edit\pessoas-empresas-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rotas_rotas__["a" /* RotasProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]])
    ], PessoasEmpresasEditPage);
    return PessoasEmpresasEditPage;
}());

//# sourceMappingURL=pessoas-empresas-edit.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_usuario__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DbProvider = /** @class */ (function () {
    function DbProvider(http, file, user) {
        this.http = http;
        this.file = file;
        this.user = user;
        //private url = 'http://192.168.15.3:8081/';
        this.url = 'https://haagsmagfapp.herokuapp.com/';
        console.log('Hello DbProvider Provider');
    }
    DbProvider.prototype.getUrl = function () {
        return this.url;
    };
    DbProvider.prototype.post = function (path, data) {
        return this.http.post(this.url + path, data);
    };
    DbProvider.prototype.upload = function (formData) {
        return this.http.post(this.url + 'user/upload', formData);
    };
    DbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__usuario_usuario__["a" /* UsuarioProvider */]])
    ], DbProvider);
    return DbProvider;
}());

//# sourceMappingURL=db.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, user, db) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.db = db;
        this.total = {
            ganho: 0,
            gasto: 0
        };
    }
    HomePage.prototype.ngOnInit = function () {
        this.list();
    };
    HomePage.prototype.ionViewCanEnter = function () {
    };
    HomePage.prototype.list = function () {
        var _this = this;
        this.db.post('registro/total', { id: this.user.dados._id }).subscribe(function (res) {
            _this.total = res.data;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\home\home.html"*/'<menu-lateral></menu-lateral>\n\n<div class="container">\n\n    <div class="card mt-2 shadow">\n\n        <div class="card-body bg-white rounded">\n\n            <div class="text-center pt-4">\n\n                <a class="text-success text-lg-center"><img class="img-home" src="assets/img/ganhou.jpg"></a>\n\n            </div>\n\n            <div class="text-center mt-2">\n\n                <h5>Você já ganhou</h5>\n\n                <p><b class="text-success">R$ {{total.ganho}}</b></p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class="card mt-4 shadow">\n\n        <div class="card-body rounded">\n\n            <div class="text-center pt-4">\n\n                <a class="text-success text-lg-center"><img class="img-home" src="assets/img/gastou.jpg"></a>\n\n            </div>\n\n            <div class="text-center mt-2">\n\n                <h5>Você já gastou</h5>\n\n                <p><b class="text-danger">R$ {{total.gasto}}</b></p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-usuario/cadastro-usuario.module": [
		305,
		12
	],
	"../pages/creditos-debitos-add/creditos-debitos-add.module": [
		306,
		11
	],
	"../pages/creditos-debitos/creditos-debitos.module": [
		307,
		10
	],
	"../pages/detalhes/detalhes.module": [
		308,
		9
	],
	"../pages/ganhos-add/ganhos-add.module": [
		309,
		8
	],
	"../pages/ganhos/ganhos.module": [
		310,
		7
	],
	"../pages/gastos-add/gastos-add.module": [
		311,
		6
	],
	"../pages/gastos/gastos.module": [
		312,
		5
	],
	"../pages/login/login.module": [
		313,
		4
	],
	"../pages/perfil/perfil.module": [
		314,
		3
	],
	"../pages/pessoas-empresas-add/pessoas-empresas-add.module": [
		315,
		2
	],
	"../pages/pessoas-empresas-edit/pessoas-empresas-edit.module": [
		316,
		1
	],
	"../pages/pessoas-empresas/pessoas-empresas.module": [
		317,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(http) {
        this.http = http;
        console.log('Hello UsuarioProvider Provider');
    }
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GanhosAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GanhosAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GanhosAddPage = /** @class */ (function () {
    function GanhosAddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GanhosAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GanhosAddPage');
    };
    GanhosAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ganhos-add',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\ganhos-add\ganhos-add.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card">\n    <div class="card-body">\n      <form>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Nome</label>\n          <input class="form-control rounded-pill" type="text" name="nome" placeholder="Ex.: Venda de carro">\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Descrição</label>\n          <input class="form-control rounded-pill" type="text" name="descricao" placeholder="venda da ferrari">\n        </div>\n        <div class="form-group text-center">\n          <label class="font-weight-bolder">Valor</label>\n          <input class="form-control rounded-pill" type="text" name="situacao" placeholder="300,00">\n        </div>\n        <div class="form-group text-center">\n          <button class="btn btn-info btn-lg text-white rounded-pill">Salvar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\ganhos-add\ganhos-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GanhosAddPage);
    return GanhosAddPage;
}());

//# sourceMappingURL=ganhos-add.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_menu_lateral_menu_lateral__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_pop_nav_pop__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_usuario_usuario__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_rotas_rotas__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_currency_mask__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_photo_library__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_base64__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cadastro_usuario_cadastro_usuario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_pessoas_empresas_pessoas_empresas__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pessoas_empresas_add_pessoas_empresas_add__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_perfil_perfil__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_creditos_debitos_creditos_debitos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_gastos_gastos__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_gastos_add_gastos_add__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_ganhos_ganhos__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_ganhos_add_ganhos_add__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_detalhes_detalhes__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_creditos_debitos_add_creditos_debitos_add__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_pessoas_empresas_edit_pessoas_empresas_edit__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_menu_lateral_menu_lateral__["a" /* MenuLateralComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_nav_pop_nav_pop__["a" /* NavPopComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pessoas_empresas_pessoas_empresas__["a" /* PessoasEmpresasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pessoas_empresas_add_pessoas_empresas_add__["a" /* PessoasEmpresasAddPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_creditos_debitos_creditos_debitos__["a" /* CreditosDebitosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_gastos_add_gastos_add__["a" /* GastosAddPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ganhos_ganhos__["a" /* GanhosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_ganhos_add_ganhos_add__["a" /* GanhosAddPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_detalhes_detalhes__["a" /* DetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_creditos_debitos_add_creditos_debitos_add__["a" /* CreditosDebitosAddPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_pessoas_empresas_edit_pessoas_empresas_edit__["a" /* PessoasEmpresasEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule', name: 'CadastroUsuarioPage', segment: 'cadastro-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/creditos-debitos-add/creditos-debitos-add.module#CreditosDebitosAddPageModule', name: 'CreditosDebitosAddPage', segment: 'creditos-debitos-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/creditos-debitos/creditos-debitos.module#CreditosDebitosPageModule', name: 'CreditosDebitosPage', segment: 'creditos-debitos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhes/detalhes.module#DetalhesPageModule', name: 'DetalhesPage', segment: 'detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ganhos-add/ganhos-add.module#GanhosAddPageModule', name: 'GanhosAddPage', segment: 'ganhos-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ganhos/ganhos.module#GanhosPageModule', name: 'GanhosPage', segment: 'ganhos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gastos-add/gastos-add.module#GastosAddPageModule', name: 'GastosAddPage', segment: 'gastos-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gastos/gastos.module#GastosPageModule', name: 'GastosPage', segment: 'gastos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pessoas-empresas-add/pessoas-empresas-add.module#PessoasEmpresasAddPageModule', name: 'PessoasEmpresasAddPage', segment: 'pessoas-empresas-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pessoas-empresas-edit/pessoas-empresas-edit.module#PessoasEmpresasEditPageModule', name: 'PessoasEmpresasEditPage', segment: 'pessoas-empresas-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pessoas-empresas/pessoas-empresas.module#PessoasEmpresasPageModule', name: 'PessoasEmpresasPage', segment: 'pessoas-empresas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12_ng2_currency_mask__["CurrencyMaskModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_menu_lateral_menu_lateral__["a" /* MenuLateralComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_nav_pop_nav_pop__["a" /* NavPopComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pessoas_empresas_pessoas_empresas__["a" /* PessoasEmpresasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pessoas_empresas_add_pessoas_empresas_add__["a" /* PessoasEmpresasAddPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_creditos_debitos_creditos_debitos__["a" /* CreditosDebitosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_gastos_add_gastos_add__["a" /* GastosAddPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ganhos_ganhos__["a" /* GanhosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_ganhos_add_ganhos_add__["a" /* GanhosAddPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_detalhes_detalhes__["a" /* DetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_creditos_debitos_add_creditos_debitos_add__["a" /* CreditosDebitosAddPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_pessoas_empresas_edit_pessoas_empresas_edit__["a" /* PessoasEmpresasEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_rotas_rotas__["a" /* RotasProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_db_db__["a" /* DbProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_base64__["a" /* Base64 */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuLateralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rotas_rotas__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pessoas_empresas_pessoas_empresas__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_creditos_debitos_creditos_debitos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gastos_gastos__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ganhos_ganhos__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the MenuLateralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuLateralComponent = /** @class */ (function () {
    function MenuLateralComponent(rotas, nav, puser, db, DomSanitizer) {
        this.rotas = rotas;
        this.nav = nav;
        this.puser = puser;
        this.db = db;
        this.DomSanitizer = DomSanitizer;
        this.fotoChoosed = false;
        this.user = this.puser.dados;
        console.log('Hello MenuLateralComponent Component');
        this.getImgPerfil();
        __WEBPACK_IMPORTED_MODULE_3_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".comp-menu").click(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(".menu-lateral").toggle();
                __WEBPACK_IMPORTED_MODULE_3_jquery__(".bk-menu-lateral").toggle();
            });
        });
    }
    MenuLateralComponent.prototype.getImgPerfil = function () {
        this.fotoChoosed = this.db.getUrl() + 'uploads/perfil-' + this.puser.dados._id + '.png?' + Math.random();
    };
    MenuLateralComponent.prototype.onError = function () {
        this.fotoChoosed = false;
    };
    MenuLateralComponent.prototype.home = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    MenuLateralComponent.prototype.perfil = function () {
        this.rotas.titulo = 'Perfil';
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__["a" /* PerfilPage */]);
    };
    MenuLateralComponent.prototype.pessoasEmpresas = function () {
        this.rotas.titulo = 'Pessoas/Empresas';
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pessoas_empresas_pessoas_empresas__["a" /* PessoasEmpresasPage */]);
    };
    MenuLateralComponent.prototype.creditosDebitos = function () {
        this.rotas.titulo = 'Créditos/Débitos';
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_creditos_debitos_creditos_debitos__["a" /* CreditosDebitosPage */]);
    };
    MenuLateralComponent.prototype.gastos = function () {
        this.rotas.titulo = 'Gastos';
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_gastos_gastos__["a" /* GastosPage */]);
    };
    MenuLateralComponent.prototype.ganhos = function () {
        this.rotas.titulo = 'Ganhos ';
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_ganhos_ganhos__["a" /* GanhosPage */]);
    };
    MenuLateralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menu-lateral',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\components\menu-lateral\menu-lateral.html"*/'<nav class="nav shadow">\n  <ul class="nav">\n    <li class="nav-item">\n      <img class="logo-mini" src="assets/img/logo2.png">\n    </li>\n    <li class="nav-item btn-menuu">\n      <a class="nav-link text-dark btn-menu comp-menu" href="#"><i class="fas fa-bars"></i></a>\n    </li>\n  </ul>\n</nav>\n<div class="menu-lateral">\n  <div class="area-perfil">\n    <div class="text-center pt-4" *ngIf="!fotoChoosed">\n      <img class="rounded-circle foto-perfil" src="assets/img/avatar.png">\n    </div>\n    <div class="text-center pt-4" *ngIf="fotoChoosed">\n      <img class="rounded-circle foto-perfil" [src]="DomSanitizer.bypassSecurityTrustUrl(fotoChoosed)" (error)="onError()">\n    </div>\n    <div class="mt-2 text-center text-lg">\n      <label class="text-white">{{ user.nome }}</label>\n    </div>\n  </div>\n  <div class="list-menu">\n    <ul>\n      <li class="item-menu mt-2">\n        <a href="" class="icone text-primary"><i class="fas fa-home"></i></a>\n        <a class="link-menu" href="#" (click)="home()">Inicio</a>\n      </li>\n      <li class="item-menu mt-2">\n        <a href="" class="icone "><i class="fas fa-user-circle"></i></a>\n        <a class="link-menu" href="#" (click)="perfil()">Perfil</a>\n      </li>\n      <li class="item-menu mt-2">\n        <a href="" class="icone text-info"><i class="fas fa-users"></i></a>\n        <a class="link-menu" href="#" (click)="pessoasEmpresas()">Pessoas/Empresas</a>\n      </li>\n      <li class="item-menu mt-2">\n        <a href="" class="icone text-success"><i class="fas fa-hand-holding-usd"></i></a>\n        <a class="link-menu" href="#" (click)="creditosDebitos()">Créditos/Débitos</a>\n      </li>\n      <li class="item-menu mt-2">\n        <a href="" class="icone text-danger"><i class="far fa-credit-card"></i></a>\n        <a class="link-menu" href="#" (click)="gastos()">Gastos</a>\n      </li>\n      <li class="item-menu mt-2">\n        <a href="" class="icone text-warning"><i class="far fa-money-bill-alt"></i></a>\n        <a class="link-menu" href="#" (click)="ganhos()">Ganhos</a>\n      </li>\n      <!--<li class="item-menu mt-2">\n        <a href="" class="icone text-primary"><i class="fas fa-question-circle"></i></a>\n        <a class="link-menu" href="#" >Dúvidas ou Sugestões</a>\n      </li>-->\n    </ul>\n  </div>\n</div>\n<div class="bk-menu-lateral comp-menu"></div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\components\menu-lateral\menu-lateral.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_rotas_rotas__["a" /* RotasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MenuLateralComponent);
    return MenuLateralComponent;
}());

//# sourceMappingURL=menu-lateral.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavPopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rotas_rotas__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NavPopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NavPopComponent = /** @class */ (function () {
    function NavPopComponent(rotas, nav) {
        this.rotas = rotas;
        this.nav = nav;
        this.titulo = '';
        console.log('Hello NavPopComponent Component');
        this.titulo = this.rotas.titulo;
    }
    NavPopComponent.prototype.pop = function () {
        this.nav.pop();
    };
    NavPopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav-pop',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\components\nav-pop\nav-pop.html"*/'<nav class="nav shadow">\n  <ul class="nav">\n    <li class="nav-item p-3">\n      <a (click)="pop()" class="back-pop"><i class="fas fa-arrow-left"></i><b class="text-info">{{titulo}}</b></a>\n    </li>\n  </ul>\n</nav>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\components\nav-pop\nav-pop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_rotas_rotas__["a" /* RotasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], NavPopComponent);
    return NavPopComponent;
}());

//# sourceMappingURL=nav-pop.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RotasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RotasProvider = /** @class */ (function () {
    function RotasProvider(http) {
        this.http = http;
        this.titulo = '';
        console.log('Hello RotasProvider Provider');
    }
    RotasProvider.prototype.getParams = function () {
        var temp = this.params;
        this.params = '';
        return temp;
    };
    RotasProvider.prototype.setParams = function (data) {
        this.params = data;
    };
    RotasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RotasProvider);
    return RotasProvider;
}());

//# sourceMappingURL=rotas.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosDebitosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhes_detalhes__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rotas_rotas__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__creditos_debitos_add_creditos_debitos_add__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the CreditosDebitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditosDebitosPage = /** @class */ (function () {
    function CreditosDebitosPage(navCtrl, navParams, rota, db, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rota = rota;
        this.db = db;
        this.user = user;
        this.list();
    }
    CreditosDebitosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cre ditosDebitosPage');
    };
    CreditosDebitosPage.prototype.details = function (data) {
        this.rota.setParams(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalhes_detalhes__["a" /* DetalhesPage */]);
    };
    CreditosDebitosPage.prototype.add = function (data) {
        this.rota.setParams(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__creditos_debitos_add_creditos_debitos_add__["a" /* CreditosDebitosAddPage */]);
    };
    CreditosDebitosPage.prototype.list = function () {
        var _this = this;
        this.db.post('ativo/list', { id: this.user.dados._id }).subscribe(function (res) {
            _this.ativos = res.data;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.fire('Ops...', 'Houve um erro ao carregar os dados das pessoas e empresas', 'error').then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
            });
        });
    };
    CreditosDebitosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-creditos-debitos',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\creditos-debitos\creditos-debitos.html"*/'<nav-pop></nav-pop>\n<div class="container">\n  <div class="card mt-2" *ngFor="let ativo of ativos">\n    <div class="card-body bg-transparent rounded">\n      <p class="mb-0 p-0"><b>Ativo: </b>{{ ativo.nome }}</p>\n      <p class="mt-0 p-0"><small><b>Descrição: </b> {{ ativo.descricao }}</small></p>\n      <p><strong>Situação: </strong><b *ngIf="ativo.valor > 0" style="color: #34ce57">R$ {{ativo.valor}}</b><b *ngIf="ativo.valor < 0" style="color: #FF0000">R$ {{ativo.valor}}</b></p>\n      <p class="text-right">\n        <button (click)="details({id: ativo._id})" type="button" class="btn btn-info mx-1">Detalhes</button>\n        <button (click)="add({tipo: \'pago\', id: ativo._id})" type="button" class="btn btn-success mx-1"><i class="far fa-plus-square"></i></button>\n        <button (click)="add({tipo: \'gasto\', id: ativo._id})" type="button" class="btn btn-danger mx-1"><i class="fas fa-minus"></i></button>\n      </p>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\creditos-debitos\creditos-debitos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rotas_rotas__["a" /* RotasProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], CreditosDebitosPage);
    return CreditosDebitosPage;
}());

//# sourceMappingURL=creditos-debitos.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoasEmpresasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pessoas_empresas_add_pessoas_empresas_add__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rotas_rotas__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pessoas_empresas_edit_pessoas_empresas_edit__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the PessoasEmpresasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PessoasEmpresasPage = /** @class */ (function () {
    function PessoasEmpresasPage(navCtrl, navParams, user, db, rota) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.db = db;
        this.rota = rota;
    }
    PessoasEmpresasPage_1 = PessoasEmpresasPage;
    PessoasEmpresasPage.prototype.ionViewCanEnter = function () {
        console.log('ionViewDidLoad PessoasEmpresasPage');
        this.list();
    };
    PessoasEmpresasPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pessoas_empresas_add_pessoas_empresas_add__["a" /* PessoasEmpresasAddPage */]);
    };
    PessoasEmpresasPage.prototype.list = function () {
        var _this = this;
        this.db.post('ativo/list', { id: this.user.dados._id }).subscribe(function (res) {
            _this.ativos = res.data;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.fire('Ops...', 'Houve um erro ao carregar os dados das pessoas e empresas', 'error').then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            });
        });
    };
    PessoasEmpresasPage.prototype.editar = function (data) {
        this.rota.setParams(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pessoas_empresas_edit_pessoas_empresas_edit__["a" /* PessoasEmpresasEditPage */]);
    };
    PessoasEmpresasPage.prototype.excluir = function (data) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.fire({
            title: 'Você tem certeza que quer excluir?',
            text: 'Uma vez o cadastro excluido, não é possível recupera-lo!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then(function (res) {
            if (res.value) {
                _this.db.post('ativo/excluir', { id: data }).subscribe(function (res2) {
                    if (res2.tipo == 0) {
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.fire('Ops...', res2.resposta, 'error');
                    }
                    else if (res2.tipo == 1) {
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.fire('Parabéns', 'Cadastro deletado com sucesso', 'success').then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                            _this.navCtrl.push(PessoasEmpresasPage_1);
                        });
                    }
                }, function (err2) {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.fire('Opss...', 'Houve um erro ao solicitar a remoção do cadastro, tente novamente!', 'error');
                });
            }
        });
        //
    };
    PessoasEmpresasPage = PessoasEmpresasPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pessoas-empresas',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\pessoas-empresas\pessoas-empresas.html"*/'<nav-pop></nav-pop>\n<div class="container">\n    <div class="text-left">\n        <a (click)="add()" class="btn btn-success text-white text-lg-center"><i class="far fa-plus-square"></i></a>\n    </div>\n    <div *ngFor="let ativo of ativos" class="card mt-2">\n        <div class="card-body bg-transparent rounded">\n            <p class="mb-0 p-0">{{ ativo.nome }}</p>\n            <p class="mt-0 p-0"><small>{{ ativo.descricao }}</small></p>\n            <p><strong>Situação: </strong><b *ngIf="ativo.valor >= 0" style="color: #34ce57">R$ {{ativo.valor}}</b><b *ngIf="ativo.valor < 0" style="color: #FF0000">R$ {{ativo.valor}}</b></p>\n            <p class="text-right">\n                <button (click)="editar(ativo)" type="button" class="btn btn-info mx-1"><i class="fas fa-edit"></i></button>\n                <button *ngIf="ativo.nome != \'Pessoal\'" (click)="excluir(ativo._id)" type="button" class="btn btn-danger mx-1"><i class="fas fa-trash-alt"></i></button>\n            </p>\n        </div>\n    </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\pessoas-empresas\pessoas-empresas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_rotas_rotas__["a" /* RotasProvider */]])
    ], PessoasEmpresasPage);
    return PessoasEmpresasPage;
    var PessoasEmpresasPage_1;
}());

//# sourceMappingURL=pessoas-empresas.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_usuario_cadastro_usuario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, db, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.user = user;
        this.verando();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.cadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */]);
    };
    LoginPage.prototype.verando = function () {
        if (localStorage.getItem('gfdadospuglig')) {
            this.user.dados = JSON.parse(localStorage.getItem('gfdadospuglig'));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        if (!form.valid) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire('Opss..', 'Preencha todos os campos para efetuar o login!', 'error');
        }
        else {
            this.db.post('user/login', form.value).subscribe(function (res) {
                if (res.tipo == 0) {
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire('Opss..', res.resposta, 'error');
                }
                else if (res.tipo == 1) {
                    localStorage.setItem('gfdadospuglig', JSON.stringify(res.data));
                    _this.user.dados = res.data;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
                }
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\login\login.html"*/'<div class="container">\n  <div class="painel-login">\n    <div class="card">\n      <div class="card-body">\n        <div class="text-center">\n          <img class="logo" src="assets/img/logo2.png">\n        </div>\n        <form #fLogin="ngForm" (ngSubmit)="login(fLogin)">\n          <div class="form-group text-center">\n            <label class="font-weight-bolder">Email</label>\n            <input class="form-control rounded-pill" type="text" name="email" placeholder="Email" ngModel required>\n          </div>\n          <div class="form-group text-center">\n            <label class="font-weight-bolder">Senha</label>\n            <input class="form-control rounded-pill" type="password" name="senha" placeholder="*******" ngModel required>\n          </div>\n          <div class="form-group text-center">\n            <button type="submit" class="btn btn-info btn-lg text-white rounded-pill">Entrar</button>\n          </div>\n          <div class="form-group text-center">\n            <a href="#" (click)="cadastro()" class="btn btn-info btn-lg text-white rounded-pill">Cadastrar</a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"E:\wamp64\www\haagsma\gestaof\ionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map