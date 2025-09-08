import { Component, signal, OnInit, inject } from '@angular/core';
import { DataService } from '../service/data';
import { CommonModule } from '@angular/common';
import { ApiImport } from '../service/api-import';

@Component({
  selector: 'app-article',
  imports: [CommonModule],
  templateUrl: './article.html',
  styleUrls: ['./article.css'],
})
export class Article implements OnInit {
  private dataService = inject(ApiImport);
  protected readonly title = signal('sae-401');

  articles = this.dataService._articles;
  categories = this.dataService._categories;

  ngOnInit(): void {
    this.dataService.getjson().subscribe();
  }
}
/*
export interface test {
  articles: any[];
  categories: any[];
}
*/
/*
export class ListeArticlesComponent implements OnInit { // 
  private Articlesservice = inject(ApiImport);
  //api = this.Articlesservice.Articles;
  articles: any[] = [];
  categories: any[] = [];

  constructor() {}

  ngOnInit() {
    this.Articlesservice.getjson().subscribe((data) => {
      this.articles = data;
      //this.categories = data.afficher2;
      console.log(this.articles);
    });
  }
}
*/
