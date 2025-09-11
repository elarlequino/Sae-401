import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtre',
  imports: [CommonModule, FormsModule],
  templateUrl: './filtre.html',
  styleUrls: ['./filtre.css'],
})
export class FiltreComponent {
  @Output() filtreChange = new EventEmitter<string>();

  filtres = [
    'Aucun',
    'Produit frais',
    'Conserves',
    'Surgelés',
    'Plat cuisiné',
    'Pâtes',
    'Riz',
    'T-shirt',
    'Pantalon',
    'Savon',
    'Shampoing',
    'Gel douche',
    'Dentifrice',
    'Crème hydratante',
    'Crème solaire',
    'Maquillage',
  ];

  filtreSelectionne = signal('Aucun');

  onFiltrer(): void {
    this.filtreChange.emit(this.filtreSelectionne());
  }

  onFiltreChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.filtreSelectionne.set(target.value);
  }
}
