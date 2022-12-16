import { UnitSelectionComponent } from './unit-selection/unit-selection.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './conversor-wrapper/conversor/conversor.component';

const routes: Routes = [
  {path: 'unit-selection', component: UnitSelectionComponent },
  {path: 'conversor/:from/:to', component: ConversorComponent },
  {path: 'conversor', component: ConversorComponent },
  {path: '', pathMatch: 'full', redirectTo: 'unit-selection'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
