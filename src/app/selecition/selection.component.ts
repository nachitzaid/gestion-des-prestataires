import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { PersonneFormComponent } from '../person/personne-form.component';
import { PrestataireService } from '../services/prestataire.service';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule, MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    PersonneFormComponent,
    MatRadioButton
 
  ],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
})
export class SelectionComponent {
selection:string="";
id:string="";

constructor(private router: Router, private prestataireService: PrestataireService) { }

navigate(form: NgForm): void {
  // Check if the prestataire already exists with the entered ID
  const existingPrestataire = this.prestataireService.getPrestataireById(parseInt(this.id, 10));
  if (existingPrestataire) {
    console.error(`Un prestataire avec l'ID ${this.id} existe déjà.`);
    return;
  }

  // Navigate based on the selection (personne or société)
  if (this.selection === 'personne') {
    this.router.navigate(['/personne', this.id]);
  } else if (this.selection === 'society') {
    this.router.navigate(['/society', this.id]);
  }

  console.log(this.selection, this.id);
}
}
