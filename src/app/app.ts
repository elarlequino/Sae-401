import { Component, signal, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { DataService } from './service/data';
import { CommonModule } from '@angular/common';
import { Article } from './article/article';
import { Footer } from './footer/footer';
import { Nav } from './nav/nav';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Article, Footer, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
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
