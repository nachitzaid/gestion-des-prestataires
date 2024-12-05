import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { PersonneFormComponent } from '../person/personne-form.component';
import { SocietyFormComponent } from '../society/society-form.component';
import { SelectionComponent } from '../selecition/selection.component';
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule,MatTabsModule,PersonneFormComponent,SocietyFormComponent,SelectionComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {

}               