import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardserviceService {
  private apiUrl = 'https://www.deckofcardsapi.com/api/deck';

  constructor(private http: HttpClient) {}

  getDeck(): Observable<any> {
    return this.http.get(`${this.apiUrl}/new/shuffle/ `);
  }

  drawCard(deckId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${deckId}/draw/?count=1`);
  }
}
