import { Component, signal, OnInit } from '@angular/core';
import { DataService } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [CommonModule],
  templateUrl: './article.html',
  styleUrls: ['./article.css'],
})
export class Article implements OnInit {
  protected readonly title = signal('sae-401');

  articles: any[] = [];
  categories: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.articles = data;
      //this.categories = data.afficher2;
      console.log(this.articles);
    });
  }
}

export interface test {
  articles: any[];
  categories: any[];
}
