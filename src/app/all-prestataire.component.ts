import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PrestataireComponent } from './person/prestatiairepersonne/prestataire.component';
import { SocieteListComponent } from './society/society-list/society-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-all-prestataire',
  standalone: true,
  imports: [CommonModule,PrestataireComponent,SocieteListComponent,MatTabsModule,MatIcon],
  templateUrl: './all-prestataire.component.html',
  styleUrl: './all-prestataire.component.css',
})
export class AllPrestataireComponent {
  constructor(private router: Router) {}

  navigateToSelection(): void {
    this.router.navigate(['/selection']);




}
}