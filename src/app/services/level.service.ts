import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private baseUrl = 'http://localhost:8080/api/v1/levels';

  constructor(private http: HttpClient) { }

  getAllLevels(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getLevelById(id: number): Observable<Level> {
    return this.http.get<Level>(`${this.baseUrl}/${id}`);
  }

  saveLevel(level: Level): Observable<Level> {
    return this.http.post<Level>(this.baseUrl, level);
  }
}
