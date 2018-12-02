import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>

    <a href="" routerLink="/especialistas">Especialistas</a> - 
    <a href="" routerLink="/agendar-citas">Agendar Citas</a>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Panamá';
}
