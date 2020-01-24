import {Component} from '@angular/core'; // Imports

// Metadata
@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
      </div>
  `
})

// Class
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
