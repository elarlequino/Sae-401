import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ApiImportInterface } from '../interfaces/api-import.interface';
import { CategorieInterface } from '../interfaces/categorie.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiImport {
  private http = inject(HttpClient);
  public _articles = signal<ApiImportInterface[]>([]);
  public _categories = signal<CategorieInterface[]>([]);
  readonly url = 'http://mvc-v1/api/articles';

  // GET - Récupérer toutes les articles
  getjson(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((donnees) => this._articles.set(donnees.articles)),
      tap((donnees) => this._categories.set(donnees.categories))
    );
  }
  // GET - Récupérer un article par son ID
  getArticle(idArticles: number): Observable<ApiImportInterface> {
    return this.http.get<ApiImportInterface>(`${this.url}/${idArticles}`);
  }
  // POST - Créer un nouvel article
  createArticle(article: Omit<ApiImportInterface, 'idArticles'>): Observable<ApiImportInterface> {
    return this.http.post<ApiImportInterface>(this.url, article);
  }
  // PUT - Mettre à jour un article
  updateArticle(article: ApiImportInterface): Observable<ApiImportInterface> {
    return this.http.put<ApiImportInterface>(`${this.url}/${article.idArticles}`, article);
  }
  // PATCH - Mettre à jour partiellement un article
  patchArticle(id: number, changes: Partial<ApiImportInterface>): Observable<ApiImportInterface> {
    return this.http.patch<ApiImportInterface>(`${this.url}/${id}`, changes);
  }
  // DELETE - Supprimer une commune
  deleteCArticle(idArticles: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${idArticles}`);
  }
}
