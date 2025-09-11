import { Component, signal, OnInit, inject, computed } from '@angular/core';
import { DataService } from '../service/data';
import { CommonModule } from '@angular/common';
import { ApiImport } from '../service/api-import';
import { FiltreComponent } from '../filtre/filtre';

@Component({
  selector: 'app-article',
  imports: [CommonModule, FiltreComponent],
  templateUrl: './article.html',
  styleUrls: ['./article.css'],
})
export class Article implements OnInit {
  private dataService = inject(ApiImport);
  protected readonly title = signal('sae-401');

  articles = this.dataService._articles;
  categories = this.dataService._categories;

  filtreActuel = signal('Aucun');

  // Articles filtrés basés sur le filtre sélectionné
  articlesFiltres = computed(() => {
    const articlesData = this.articles();
    const filtre = this.filtreActuel();

    if (!articlesData || filtre === 'Aucun') {
      return articlesData;
    }

    // Filtrer les articles selon le filtre sélectionné
    // Vous devrez adapter cette logique selon la structure de vos données
    return articlesData.filter((article: any) => {
      // Exemple de logique de filtrage - à adapter selon vos données
      return article.SousCategorie === filtre || article.Categorie === filtre;
    });
  });

  ngOnInit(): void {
    this.dataService.getjson().subscribe();
  }

  onFiltreChange(nouveauFiltre: string): void {
    this.filtreActuel.set(nouveauFiltre);
  }

  ajouterAuPanier(idArticle: number): void {
    // Logique pour ajouter l'article au panier
    console.log('Ajout au panier:', idArticle);
  }
}
