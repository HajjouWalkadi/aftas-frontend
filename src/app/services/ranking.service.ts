import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ranking } from '../models/ranking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private baseUrl = 'http://localhost:8080/api/v1/ranking';
  private baseApi = 'http://localhost:8080/api/v1/ranking/competitions';

 

  constructor(private http: HttpClient) {}

  getResults(competitionId:number): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this.baseApi}/${competitionId}/podium`);
  }
}
