import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Prestataire, PrestataireService } from '../../services/prestataire.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { SocieteListComponent } from 'src/app/society/society-list/society-list.component';

@Component({
  selector: 'app-prestataire',
  standalone: true,
  imports: [CommonModule,MatIcon,SocieteListComponent],
  templateUrl: './personne.component.html',
  styleUrl: './personne.component.css',
})
export class PrestataireComponent implements OnInit {

  prestataires: Prestataire[] = [];

  constructor(
    private prestataireService: PrestataireService,
    private router: Router,
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['personne']) {  
        this.prestataireService.addPrestataire(JSON.parse(params['personne']));
      }
      this.prestataires = this.prestataireService.getPrestataires();
    });
  }
  

  editPrestataire(id: number): void {
    this.router.navigate(['/personne', id]);
  }

  deletePrestataire(id: number): void {
    const prestataire = this.prestataireService.getPrestataireById(id);
    if (prestataire) {
      this.prestataireService.deletePrestataire(id);
      this.prestataires = this.prestataireService.getPrestataires();
    }
  }

  navigateToSelection(): void {
    this.router.navigate(['/selection']);
  }
}
