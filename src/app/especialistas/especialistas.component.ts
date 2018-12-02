import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialistas',
  template: `
    <p>
      especialistas works!
    </p>
    <table>
      <tr>
      <th>Name</th>
      <th>Numer</th>
      <th>Location</th>
      </tr>

      <tr>
        <td>Bram</td>
        <td>2</td>
        <td>Panamá</td>
      </tr>
      <tr>
        <td>Derlys</td>
        <td>1</td>
        <td>Medellín</td>
      </tr>
    </table>
  `,
  styles: []
})
export class EspecialistasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
