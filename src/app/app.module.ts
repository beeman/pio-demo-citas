import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    EspecialistasComponent,
    AgendarCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
