import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog,MatDialogActions,
  MatDialogClose,MatDialogContent,MatDialogTitle
 } from '@angular/material/dialog';
import { PersonneFormComponent } from '../person/personne-form.component';
@Component({
  selector: 'app-dailog',
  standalone: true,
  imports: [CommonModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,PersonneFormComponent],
  templateUrl: './dailog.component.html',
  styleUrl: './dailog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailogComponent {
  
}

