import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: 'sanjose', component: SanjoseComponent },
	{ path: 'seattle', component: SeattleComponent },
	{ path: 'burbank', component: BurbankComponent },
	{ path: 'dc', component: DcComponent },
	{ path: 'chicago', component: ChicagoComponent },
	{ path: 'dallas', component: DallasComponent },

	{ path: '', pathMatch: 'full', redirectTo: '/' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
