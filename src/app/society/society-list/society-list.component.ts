import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocieteService, Societe } from 'src/app/services/societe.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-society-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './society-list.component.html',
  styleUrls: ['./society-list.component.css'],
})
export class SocieteListComponent implements OnInit {
  societes: Societe[] = [];

  constructor(private societeService: SocieteService, private router: Router) {}

  ngOnInit(): void {
    this.societes = this.societeService.getSocietes();
  }

  editSociete(id: number): void {
    this.router.navigate([`/society/${id}`]);
  }

  deleteSociete(id: number): void {
    this.societeService.deleteSociete(id);
    this.societes = this.societeService.getSocietes();
  }
}
