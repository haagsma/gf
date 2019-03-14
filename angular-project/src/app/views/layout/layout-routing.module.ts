import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuUsuarioComponent} from "./menu-usuario/menu-usuario.component";
import {HomeComponent} from "../home/home.component";
import {AtivosAddComponent} from "../ativos/add/add.component";
import {AtivosListComponent} from "../ativos/list/list.component";
import {AtivosEditComponent} from "../ativos/edit/edit.component";
import {CreditosDebitosComponent} from "../creditos-debitos/creditos-debitos.component";
import {CreditosDebitosAddComponent} from "../creditos-debitos/add/add.component";
import {DetalhesComponent} from "../creditos-debitos/detalhes/detalhes.component";
import {GastosComponent} from "../controle/gastos.component";
import {GanhosComponent} from "../controle/ganhos.component";
import {PerfilComponent} from "../perfil/perfil.component";
import {AuthGuardService} from "../../services/authguard.service";

const routes: Routes = [
    { path: 'home', component: MenuUsuarioComponent,
        canActivate: [AuthGuardService] ,
        children: [
            {path: '', component: HomeComponent},
            { path: 'ativos/add', component: AtivosAddComponent },
            { path: 'ativos/edit', component: AtivosEditComponent },
            { path: 'ativos/list', component: AtivosListComponent },
            { path: 'creditos-debitos', component: CreditosDebitosComponent },
            { path: 'creditos-debitos/add', component: CreditosDebitosAddComponent },
            { path: 'creditos-debitos/detalhes', component: DetalhesComponent },
            { path: 'controle/gastos', component: GastosComponent },
            { path: 'controle/ganhos', component: GanhosComponent },
            { path: 'perfil', component: PerfilComponent },
        ]
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class LayoutRoutingModule {

}
