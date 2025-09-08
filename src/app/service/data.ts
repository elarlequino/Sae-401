import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonUrl = '/data.json'; //Nom de votre premier fichier Json
  // private jsonUrl2 = '/nom-Json2.json'; //Nom de votre deuxieme fichier Json
  constructor(private http: HttpClient) {}
  getData(): Observable<test[]> {
    //Méthode pour récupérer les données du premier fichier Json
    return this.http.get<test[]>(this.jsonUrl);
  }
  //  getData2(): Observable<any> {
  //Méthode pour récupérer les données du deuxieme fichier Json
  // return this.http.get<any>(this.jsonUrl2);
  //}
}

export interface test {
  articles: any[];
  categories: any[];
}
