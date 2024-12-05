import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-page-creation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, // Add FormsModule here
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  templateUrl: './page_creation.component.html',
  styleUrls: ['./page_creation.component.css'],
})
export class PageCreationComponent implements OnInit {
  numDoc: string=""; // Variable to hold the document number
  annexTitle: string = '';
  annexDescription: string = '';
  annexList: { id: number; title: string; description: string }[] = [];
  totalQuantite: number = 0;

  form: FormGroup;

  constructor(private sharedService: SharedService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl(''), // Start date
      finContrat: new FormControl(''), // End date
      prestataire: new FormControl('', Validators.required),
      resiliationNotice: new FormControl('', Validators.required),
      renewalCycle: new FormControl('', Validators.required),
      checkbox: new FormControl(false),
    });
  }

  ngOnInit() {
    // Retrieve the document number from the route parameters
    this.route.params.subscribe(params => {
      this.numDoc = params['numDoc']; // Get the document number from the URL
      console.log('Numéro de document reçu:', this.numDoc);
    });

    this.updateAnnexList();
    this.calculateTotalQuantite();
  }

  updateAnnexList() {
    this.annexList = this.sharedService.getAnnexList();
    const bordereauTitle = this.sharedService.getBordereauTitle();
    const selectedItems = this.sharedService.getSelectedItems();

    if (bordereauTitle && selectedItems && selectedItems.length > 0) {
      const description = selectedItems
        .map((item) => `${item.article} (${item.quantite})`)
        .join(', ');

      const newAnnex = {
        id: this.sharedService.getNextAnnexId(),
        title: bordereauTitle,
        description,
      };

      this.annexList.push(newAnnex);
      this.sharedService.updateAnnexList(this.annexList);
      this.calculateTotalQuantite();
    }
  }

  addAnnex() {
    const formValues = this.form.value;
    const newAnnex = {
      id: this.sharedService.getNextAnnexId(),
      title: formValues.title,
      description: formValues.description,
    };
  
    this.sharedService.addContract(formValues.title, formValues.startDate, formValues.endDate);
    this.sharedService.updateAnnexList([...this.sharedService.getAnnexList(), newAnnex]); // Ajoute à la liste existante
  
    // Pas besoin de rafraîchir la page, juste naviguer
    this.router.navigate(['/bordereau']);
  }
  
  
  removeAnnex(index: number) {
    this.annexList.splice(index, 1);
    this.sharedService.updateAnnexList(this.annexList);
    this.calculateTotalQuantite();
  }

  calculateTotalQuantite() {
    this.totalQuantite = 0;
    this.annexList.forEach((annex) => {
      const items = annex.description.match(/\((\d+)\)/g);
      if (items) {
        items.forEach((item) => {
          const quantite = parseInt(item.replace(/[()]/g, ''));
          this.totalQuantite += isNaN(quantite) ? 0 : quantite;
        });
      }
    });
  }

  // Add the onSubmit method
  onSubmit() {
    // Récupérer les valeurs du formulaire
    const formValues = this.form.value;

    // Ajouter le contrat dans le SharedService
    this.sharedService.addContract(
        formValues.title,
        formValues.date,
        formValues.finContrat
    );

    // Afficher les informations pour débogage
    console.log('Form submitted:', formValues);
    console.log('Annex List:', this.annexList);

    // Naviguer vers la page des contrats
    this.router.navigate(['/liste_contrats']); // Assurez-vous que cela correspond à votre route
  }
}
