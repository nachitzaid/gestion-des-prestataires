import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, FormGroupDirective } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter, ErrorStateMatcher } from '@angular/material/core';
import { PaysVilleService } from '../services/pays-ville.service';
import {MatRadioModule} from '@angular/material/radio';
import { Prestataire, PrestataireService } from '../services/prestataire.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { RouterModule } from '@angular/router';
import { inject } from '@angular/core';
import { MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle } from '@angular/material/dialog';
import { DailogComponent } from '../dialog/dailog.component';


@Component({
  selector: 'app-personne-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatRadioModule,
    RouterModule,
    MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule 
    
   
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  templateUrl: './personne-form.component.html',
  styleUrls: ['./personne-form.component.css'],
})
export class PersonneFormComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DailogComponent);
  }




  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
  ]);
  numeroCompteFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{10,20}$') 
  ]);
  matcher = new ErrorStateMatcher();

  personne: Prestataire = {
    id: 0,
    nom: '',
    prenom: '',
    naissance: '',
    sexe: '',
    adresse: '',
    pays: '',
    ville: '',
    tel: '',
    email: '',
    numerocompte:'',
    banque:"",
    type:'personne',
  };

  pays: string[] = [];
  villes: string[] = [];
  paysselectionne = '';
  villeselectionne = '';

  constructor(private paysVilleService: PaysVilleService,
  private prestataireService:PrestataireService,
private route:ActivatedRoute,
private router :Router) {}

  ngOnInit(): void {
    this.pays = this.paysVilleService.getpays();
    const id =this.route.snapshot.paramMap.get('id');
    if (id){
      this.personne.id = parseInt(id, 10);
      this.editpersonne(this.personne.id);
      
    }
  }

  editpersonne(id: number): void {
    const prestataire = this.prestataireService.getPrestataireById(id);
    if (prestataire) {
      this.personne = prestataire;
      this.paysselectionne = prestataire.pays;
      this.villes = this.paysVilleService.getvilles(this.paysselectionne);
      this.villeselectionne = prestataire.ville;
      this.emailFormControl.setValue(prestataire.email);
      this.phoneFormControl.setValue(prestataire.tel);
      this.numeroCompteFormControl.setValue(prestataire.numerocompte);
    }
  }




  onCountryChange(): void {
    this.villes = this.paysVilleService.getvilles(this.paysselectionne) || [];
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  

  generateId(): number {
    return this.prestataireService.getPrestataires().length + 1;
  }
  submit(form: NgForm): void {
    if (form.valid && this.emailFormControl.valid && this.phoneFormControl.valid) {
      this.personne.pays = this.paysselectionne;
      this.personne.ville = this.villeselectionne!;
      this.personne.tel = this.phoneFormControl.value!;
      this.personne.email = this.emailFormControl.value!;
      this.personne.numerocompte = this.numeroCompteFormControl.value!;
      if (this.personne.id) {
      this.prestataireService.updatePrestataire(this.personne)}
      else {
   
        this.personne.id=this.generateId();
      this.prestataireService.addPrestataire(this.personne);}

  
      console.log(this.personne);
      this.openDialog();
   
      this.resetForm(form);
    
    }
  }
  
  




  
  resetForm(form:NgForm): void{
this.personne = {
  id:0,
  nom: '',
  prenom: '',
  naissance: '',
  sexe: '',
  adresse: '',
  pays: '',
  ville: '',
  tel: '',
  email: '', 
  numerocompte:'',
  banque: "",
  type: 'personne',
  };
  
  this.paysselectionne="";
  this.villeselectionne="";
  
  this.emailFormControl.reset();
  this.phoneFormControl.reset();
  this.numeroCompteFormControl.reset();
  form.resetForm();
  






  
}}
