import { UnitSelectionComponent } from './unit-selection/unit-selection.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'unit-selection' },
  { path: 'unit-selection', component: UnitSelectionComponent },
  { path: 'conversor/:from/:to', component: ConversorComponent },
  { path: 'conversor', component: ConversorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }