import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-selection',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './page_selection.component.html',
  styleUrls: ['./page_selection.component.css'],
})
export class PageSelectionComponent {
  numDocPapier: string = ''; // Liaison avec le champ input

  constructor(private router: Router) {}

  // Méthode déclenchée lors du clic sur le bouton
  continue() {
    if (this.numDocPapier) {
      // Si le champ est rempli, on redirige
      console.log('Numéro de document papier saisi:', this.numDocPapier);
      this.router.navigate(['/creationcontrat',this.numDocPapier]); // Assurez-vous que cette route est correcte
    } else {
      console.log('Veuillez saisir un numéro de document papier.');
    }
  }
}
