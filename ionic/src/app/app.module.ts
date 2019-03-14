import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { MenuLateralComponent } from "../components/menu-lateral/menu-lateral";
import { NavPopComponent } from "../components/nav-pop/nav-pop";


import { UsuarioProvider } from '../providers/usuario/usuario';
import { RotasProvider } from '../providers/rotas/rotas';
import { DbProvider } from '../providers/db/db';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { File } from "@ionic-native/file";
import {Camera} from "@ionic-native/camera";
import {PhotoLibrary} from "@ionic-native/photo-library";
import {Base64} from "@ionic-native/base64";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { CadastroUsuarioPage} from "../pages/cadastro-usuario/cadastro-usuario";
import { PessoasEmpresasPage } from "../pages/pessoas-empresas/pessoas-empresas";
import { PessoasEmpresasAddPage } from "../pages/pessoas-empresas-add/pessoas-empresas-add";
import { PerfilPage } from "../pages/perfil/perfil";
import { CreditosDebitosPage } from "../pages/creditos-debitos/creditos-debitos";
import { GastosPage } from "../pages/gastos/gastos";
import { GastosAddPage } from "../pages/gastos-add/gastos-add";
import { GanhosPage } from "../pages/ganhos/ganhos";
import { GanhosAddPage } from "../pages/ganhos-add/ganhos-add";
import { DetalhesPage } from "../pages/detalhes/detalhes";
import { CreditosDebitosAddPage } from "../pages/creditos-debitos-add/creditos-debitos-add";
import { PessoasEmpresasEditPage } from "../pages/pessoas-empresas-edit/pessoas-empresas-edit";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
      MenuLateralComponent,
      NavPopComponent,
      LoginPage,
      CadastroUsuarioPage,
      PessoasEmpresasPage,
      PerfilPage,
      PessoasEmpresasAddPage,
      CreditosDebitosPage,
      GastosPage,
      GastosAddPage,
      GanhosPage,
      GanhosAddPage,
      DetalhesPage,
      CreditosDebitosAddPage,
      PessoasEmpresasEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpClientModule,
      FormsModule,
      CurrencyMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      MenuLateralComponent,
      NavPopComponent,
      LoginPage,
      CadastroUsuarioPage,
      PessoasEmpresasPage,
      PerfilPage,
      PessoasEmpresasAddPage,
      CreditosDebitosPage,
      GastosPage,
      GastosAddPage,
      GanhosPage,
      GanhosAddPage,
      DetalhesPage,
      CreditosDebitosAddPage,
      PessoasEmpresasEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    RotasProvider,
    DbProvider,
      Camera,
      PhotoLibrary,
      File,
      Base64
  ]
})
export class AppModule {}
