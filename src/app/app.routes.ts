import { Route } from '@angular/router';

import { PersonneFormComponent } from './person/personne-form.component';
import { SocietyFormComponent } from './society/society-form.component';
import { SelectionComponent } from './selecition/selection.component';
import { provideRouter } from '@angular/router';
import { PrestataireComponent } from './person/prestatiairepersonne/prestataire.component';
import { AllPrestataireComponent } from './all-prestataire.component';
import { PageSelectionComponent } from './contrats/page_selection/page_selection.component';
import { PageCreationComponent } from './contrats/page_creation/page_creation.component';  
import { PageBordereauComponent } from './contrats/page_bordereau/page_bordereau.component';   

export const appRoutes: Route[] = [
  { path: "liste", component: AllPrestataireComponent },
  { path: "personne/:id", component: PersonneFormComponent },
  { path: "society/:id", component: SocietyFormComponent },
  { path: "selection", component: SelectionComponent },
  { path: "selection_contrat", component: PageSelectionComponent },
  { path: "creationcontrat/:docNum", component: PageCreationComponent },
  { path: "bordereau", component: PageBordereauComponent }, // Ajout de la route pour PageBordereauComponent
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
  { path: '**', redirectTo: '/liste', pathMatch: 'full' }
];
