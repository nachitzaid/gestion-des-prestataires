import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Existing properties for bordereau and annex management
  private bordereauTitle: string = '';
  private selectedItems: any[] = [];
  private annexList: { id: number; title: string; description: string }[] = [];
  private nextAnnexId = 1; // Counter to generate unique annex IDs

  // New properties for contract management
  private contracts: { id: number; name: string; startDate: Date | null; endDate: Date | null }[] = [];
  private contractIdCounter = 1; // Counter to generate unique contract IDs

  // New storage for contracts with unique IDs
  private contractsStorage: { id: number; data: any }[] = [];

  // Methods for bordereau title management
  setBordereauTitle(title: string) {
    this.bordereauTitle = title;
  }

  getBordereauTitle() {
    return this.bordereauTitle;
  }

  // Methods for selected items management
  setSelectedItems(items: any[]) {
    this.selectedItems = items;
  }

  getSelectedItems() {
    return this.selectedItems;
  }

  // Methods for annex management
  updateAnnexList(annexes: { id: number; title: string; description: string }[]) {
    this.annexList = annexes;
  }

  getAnnexList() {
    return this.annexList;
  }

  getNextAnnexId() {
    return this.nextAnnexId++; // Increment the ID for the next annex
  }

  // New methods for contract management
  addContract(name: string, startDate: Date | null, endDate: Date | null) {
    const newContract = {
      id: this.contractIdCounter++,
      name,
      startDate,
      endDate,
    };
    this.contracts.push(newContract);
  }

  getContracts() {
    return this.contracts;
  }

  // New methods for saving and retrieving contracts by ID
  saveContract(id: number, data: any) {
    const existingContractIndex = this.contractsStorage.findIndex(contract => contract.id === id);
    if (existingContractIndex !== -1) {
      this.contractsStorage[existingContractIndex].data = data; // Update existing contract
    } else {
      this.contractsStorage.push({ id, data }); // Save new contract
    }
  }

  getContractById(id: number) {
    const contract = this.contractsStorage.find(contract => contract.id === id);
    return contract ? contract.data : null; // Return data if found
  }
}
