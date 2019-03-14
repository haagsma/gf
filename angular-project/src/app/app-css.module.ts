import {NgModule} from "@angular/core";
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule, MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxCurrencyModule} from "ngx-currency";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
    exports: [
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        NgxCurrencyModule,
        FormsModule,
        BrowserModule
    ]
})

export class AppCssModule {

}