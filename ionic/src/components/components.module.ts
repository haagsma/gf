import { NgModule } from '@angular/core';
import { MenuLateralComponent } from './menu-lateral/menu-lateral';
import { NavPopComponent } from './nav-pop/nav-pop';
@NgModule({
	declarations: [MenuLateralComponent,
    NavPopComponent],
	imports: [],
	exports: [MenuLateralComponent,
    NavPopComponent]
})
export class ComponentsModule {}
