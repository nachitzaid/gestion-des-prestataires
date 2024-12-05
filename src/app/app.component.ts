import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabComponent } from './tab/tab.component';
import { PersonneFormComponent } from './person/personne-form.component'; 
import { SelectionComponent } from './selecition/selection.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PrestataireComponent } from './person/prestatiairepersonne/prestataire.component';
import { ListeContratsComponent } from "./contrats/liste_contrats.component";
import { PageCreationComponent } from "./contrats/page_creation/page_creation.component";
import { PageBordereauComponent } from './contrats/page_bordereau/page_bordereau.component';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MatSlideToggleModule, TabComponent, PersonneFormComponent, SelectionComponent, MatTabsModule, PrestataireComponent, ListeContratsComponent, PageCreationComponent, PageBordereauComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prestataire';
}
