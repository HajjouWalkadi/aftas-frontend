import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hunting } from '../models/hunting';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  private baseUrl = 'http://localhost:8080/api/v1/hunting';

  constructor(private http: HttpClient) { }

  saveHunting(hunting: Hunting): Observable<Hunting> {
    return this.http.post<Hunting>(this.baseUrl, hunting);
  }

  // Modify the method to make an HTTP request
  getHuntingById(competitionCode: number, memberNum: number, fishId: number): Observable<Hunting | null> {
    const url = `${this.baseUrl}/find?competitionCode=${competitionCode}&memberNum=${memberNum}&fishId=${fishId}`;
    return this.http.get<Hunting | null>(url);
  }

  getAllHuntings(): Observable<Hunting[]> {
    return this.http.get<Hunting[]>(this.baseUrl);
  }

  // updateHunting(updatedHunting: Hunting): Observable<Hunting> {
  //   return this.http.put<Hunting>(`${this.baseUrl}/${updatedHunting.id}`, updatedHunting);
  // }

  // deleteHunting(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }
  
  findExistingHunt(newHuntingData: Hunting): Observable<Hunting> {
    const searchParams = {
      memberNum: newHuntingData.memberId,
      competitionId: newHuntingData.competitionId,
      fishId: newHuntingData.fishId
    };
  

    return this.http.get<Hunting>(`${this.baseUrl}/hunts`, { params: searchParams });
  }
  calculateAndAssignScores(competitionId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/calculate-scores/${competitionId}`, {});
  }  
  
}
