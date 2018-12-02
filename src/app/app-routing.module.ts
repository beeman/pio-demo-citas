import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';

const routes: Routes = [
  {
    path: 'especialistas',
    component: EspecialistasComponent
  },
  {
    path: 'agendar-citas',
    component: AgendarCitasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
