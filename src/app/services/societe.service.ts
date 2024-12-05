import { Injectable } from '@angular/core';

export interface Societe {
  id: number;
  raisonSociale: string;
  IF: string;
  registreCommercial: string;
  responsableCommercial: string;
  codeComptable: string;
  tel: string;
  fax: string;
  type:'societe'
}

@Injectable({
  providedIn: 'root',
})
export class SocieteService {
  private societes: Societe[] = [];

  constructor() {}

  getSocietes(): Societe[] {
    return this.societes;
  }

  getSocieteById(id: number): Societe | undefined {
    return this.societes.find((societe) => societe.id === id);
  }

  addSociete(societe: Societe): void {
    this.societes.push(societe);
  }

  updateSociete(updatedSociete: Societe): void {
    const index = this.societes.findIndex((societe) => societe.id === updatedSociete.id);
    if (index !== -1) {
      this.societes[index] = updatedSociete;
    }
  }

  deleteSociete(id: number): void {
    this.societes = this.societes.filter((societe) => societe.id !== id);
  }

  generateId(): number {
    return this.societes.length > 0 ? Math.max(...this.societes.map(s => s.id)) + 1 : 1;
  }
}
