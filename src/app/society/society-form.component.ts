import {ChangeDetectionStrategy, Component } from '@angular/core';
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
import { SocieteService, Societe } from '../services/societe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DailogComponent } from '../dialog/dailog.component';
import { inject } from '@angular/core';
import { MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-society-form',
  standalone: true,
  imports: [CommonModule,FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,RouterModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideNativeDateAdapter()],
  templateUrl: './society-form.component.html',
  styleUrl: './society-form.component.css',
})
export class SocietyFormComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DailogComponent);
  }




  telFormControl= new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10,20}$')]);
  faxFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{10,20}$')
  ]);
  company:Societe={
    id:0,
    raisonSociale:"",
    IF:"",
    registreCommercial:"",
    responsableCommercial:"",
    codeComptable:"",
    tel:"",
    fax:"",
    type: 'societe' ,

  }
  constructor(
    private societeService:SocieteService,
    private route: ActivatedRoute,
    private router:Router



  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.company.id = parseInt(id, 10);
      this.editSociete(this.company.id);
    }
  }

  editSociete(id: number): void {
    const societe = this.societeService.getSocieteById(id);
    if (societe) {
      this.company = societe;
      this.telFormControl.setValue(societe.tel);
      this.faxFormControl.setValue(societe.fax);
    }}
    submit(form: NgForm): void {
      if (form.valid && this.telFormControl.valid && this.faxFormControl.valid) {
        this.company.tel = this.telFormControl.value!;
        this.company.fax = this.faxFormControl.value!;
        if (this.company.id) {
          this.societeService.updateSociete(this.company);
        } else {
          this.company.id = this.societeService.generateId();
          this.societeService.addSociete(this.company);
        }
        console.log(this.company);
        this.openDialog();
        this.resetForm(form);
      }
    }
    resetForm(form: NgForm): void {
      this.company = {
        id: 0,
        raisonSociale: '',
        IF: '',
        registreCommercial: '',
        responsableCommercial: '',
        codeComptable: '',
        tel: '',
        fax: '',
        type:'societe'
      };
      this.telFormControl.reset();
      this.faxFormControl.reset();
      form.resetForm();
    }





}
