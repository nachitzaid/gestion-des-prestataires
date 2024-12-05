import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedService } from '../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-bordereau',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './page_bordereau.component.html',
  styleUrls: ['./page_bordereau.component.css'],
})
export class PageBordereauComponent {
  bordereauTitle = ''; // Variable pour stocker le titre du bordereau
  numDocPapier: string = ''; // Variable pour stocker le numéro de document papier

  itemList = [
    { code: 'A001', article: 'Café moulu', description: 'Café arabica moulu, 250g.', prix: 5.0, quantite: 0, selected: false },
    { code: 'A002', article: 'Thé vert', description: 'Thé vert biologique, 100g.', prix: 3.5, quantite: 0, selected: false },
    { code: 'A003', article: 'Sucre', description: 'Sucre en poudre, 1kg.', prix: 1.2, quantite: 0, selected: false },
    { code: 'A004', article: 'Farine', description: 'Farine de blé, 1kg.', prix: 0.8, quantite: 0, selected: false },
    { code: 'A005', article: 'Pâtes', description: 'Pâtes alimentaires, 500g.', prix: 1.5, quantite: 0, selected: false },
    { code: 'A006', article: 'Riz', description: 'Riz basmati, 1kg.', prix: 2.5, quantite: 0, selected: false },
    { code: 'A007', article: 'Huile d\'olive', description: 'Huile d\'olive vierge extra, 500ml.', prix: 4.0, quantite: 0, selected: false },
    { code: 'A008', article: 'Vinaigre balsamique', description: 'Vinaigre balsamique, 250ml.', prix: 3.0, quantite: 0, selected: false },
    { code: 'A009', article: 'Sel', description: 'Sel de mer, 500g.', prix: 0.5, quantite: 0, selected: false },
    { code: 'A010', article: 'Poivre noir', description: 'Poivre noir moulu, 100g.', prix: 2.0, quantite: 0, selected: false }
  ];

  selectedItems: any[] = [];

  constructor(private sharedService: SharedService, private router: Router) {}

  updateQuantity(item: any, quantity: number) {
    item.quantite = quantity;
  }

  completeSelection() {
    // Filtrer les articles sélectionnés avec une quantité supérieure à 0
    this.selectedItems = this.itemList.filter((item) => item.selected && item.quantite > 0);

    // Stocker le titre du bordereau et les articles sélectionnés dans SharedService
    this.sharedService.setBordereauTitle(this.bordereauTitle);
    this.sharedService.setSelectedItems(this.selectedItems);

    console.log('Titre du bordereau:', this.bordereauTitle);
    console.log('Articles sélectionnés:', this.selectedItems);

    // Naviguer vers la page de création de contrat en incluant le numéro de document
    this.router.navigate(['/creationcontrat',this.numDocPapier]); 
  }
}
