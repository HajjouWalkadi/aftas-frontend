import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from '../models/competition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl = 'http://localhost:8080/api/v1/competitions';

  constructor(private http: HttpClient) { }

  saveCompetition(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(this.baseUrl, competition);
  }

  getCompetitionById(id: number): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/${id}`);
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

}
