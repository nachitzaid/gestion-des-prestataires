import { Injectable } from '@angular/core';

export interface Prestataire {
  id: number;
  nom: string;
  prenom: string;
  naissance: string;
  sexe: string;
  adresse: string;
  pays: string;
  ville: string;
  tel: string;
  email: string;
  numerocompte: string;
  banque: string;
  type:'personne';
}

@Injectable({
  providedIn: 'root'
})
export class PrestataireService {
  private prestataires: Prestataire[] = [];

  constructor() {}

  getPrestataires(): Prestataire[] {
    return this.prestataires;
  }

  getPrestataireById(id: number): Prestataire | undefined {
    return this.prestataires.find(p => p.id === id);
  }

  addPrestataire(prestataire: Prestataire): void {
    prestataire.id = this.generateId();
    this.prestataires.push(prestataire);
  }
  updatePrestataire(updatedPrestataire: any): void {
  const index = this.prestataires.findIndex(p => p.id === updatedPrestataire.id);
  if (index !== -1) {
    this.prestataires[index] = updatedPrestataire;
  }
}



  deletePrestataire(id: number): void {
    const index = this.prestataires.findIndex(p => p.id === id);
    if (index !== -1) {
      this.prestataires.splice(index, 1);
    }
  }

  private generateId(): number {
    return this.prestataires.length > 0 ? Math.max(...this.prestataires.map(p => p.id)) + 1 : 1;
  }
}
