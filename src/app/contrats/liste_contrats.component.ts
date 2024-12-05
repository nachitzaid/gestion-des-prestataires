import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-liste-contrats',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './liste_contrats.component.html',
  styleUrls: ['./liste_contrats.component.css'],
})
export class ListeContratsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'actions'];
  contracts: { id: number; name: string; startDate: Date | null; endDate: Date | null }[] = []; // Declare contracts

  constructor(private router: Router, private sharedService: SharedService) {} // Inject SharedService

  ngOnInit() {
    this.contracts = this.sharedService.getContracts(); // Get contracts from SharedService
  }

  addContract() {
    this.router.navigate(['/selection_contrat']);
  }

  editContract(contract: any) {
    console.log('Edit contract:', contract);
  }

  deleteContract(contract: any) {
    console.log('Delete contract:', contract);
  }

  activateContract(contract: any) {
    console.log('Activate contract:', contract);
  }

  deactivateContract(contract: any) {
    console.log('Deactivate contract:', contract);
  }

  terminateContract(contract: any) {
    console.log('Terminate contract:', contract);
  }
}
