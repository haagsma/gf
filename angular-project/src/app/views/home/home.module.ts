import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {LayoutModule} from "../layout/layout.module";
import {AppCssModule} from "../../app-css.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        LayoutModule,
        AppCssModule,
        BrowserModule,
        FormsModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {

}