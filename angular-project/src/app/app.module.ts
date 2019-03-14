import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpService} from "./services/http.service";
import {UserService} from "./services/user.service";
import {ParamsService} from "./services/params.service";

import { AppRoutingModule } from './app-routing.module';
import {AppCssModule} from "./app-css.module";
import {AtivosModule} from "./views/ativos/ativos.module";
import {InicialModule} from "./views/inicial/inicial.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./views/home/home.module";
import {LayoutModule} from "./views/layout/layout.module";
import {CreditosDebitosModule} from "./views/creditos-debitos/creditos-debitos.module";
import {ControleModule} from "./views/controle/controle.module";
import {PerfilComponent} from "./views/perfil/perfil.component";
import {AuthGuardService} from "./services/authguard.service";


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppCssModule,
    AtivosModule,
    InicialModule,
    HomeModule,
    LayoutModule,
    CreditosDebitosModule,
      ControleModule,
  ],
  providers: [
      HttpService,
      UserService,
      ParamsService,
      AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
