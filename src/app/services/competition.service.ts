import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from '../models/competition';
import { Member } from '../models/member';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl = 'http://localhost:8080/api/v1/competitions';

  constructor(private http: HttpClient) { }

  saveCompetition(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(this.baseUrl, competition);
  }

  getCompetitionById(code: number): Observable<Competition> {
    return this.http.get<any>(`${this.baseUrl}/${code}`).pipe(
      map(res => res.data)
    );
  }

  getAllMembersByCompetition(code: number): Observable<Member[]> {
    return this.http.get<any>(`${this.baseUrl}/${code}/members`).pipe(
      map(res => res.data)
    );
  }
  getAllCompetitions(): Observable<any> {
    return this.http.get<Competition[]>(this.baseUrl);
  }

  getCompetitionByDate(date: Date): Observable<Competition | null> {
    // Convert the date to a string or format it based on your API requirements
    const formattedDate = this.formatDate(date);

    // Make a GET request to your backend API to get the competition by date
    const url = `${this.baseUrl}/byDate/${formattedDate}`; 
    return this.http.get<Competition>(url);
  }

  private formatDate(date: Date): string {
    // Implement date formatting logic based on your API requirements
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  registerMember(competitionCode: any, memberId: number ) {
    return this.http.post(this.baseUrl+'/signin-member', {
      competitionId: competitionCode,
      memberId: memberId 
    })
  }

}
