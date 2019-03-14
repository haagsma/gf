import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AtivosAddComponent} from "./add/add.component";

const routes: Routes = [

];

@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes) ]
})
export class AtivosRoutingModule {

}
