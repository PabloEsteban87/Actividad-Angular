import { Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { HousingLocationComponent } from "./housing-location/housing-location.component";


@Component({
    selector: 'app-root',
    standalone: true,
    template: `<main>
  <a [routerLink]="['/']">
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
  </a>
  <section class="content">
    <router-outlet></router-outlet>
 <!--    <app-housing-location></app-housing-location> -->
  </section>
</main>
`,
    styleUrls: ['./app.component.css'],
    imports: [HomeComponent, RouterModule, HousingLocationComponent]
})
export class AppComponent {
  title = 'homes';
}




