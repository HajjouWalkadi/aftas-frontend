import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fish } from '../models/fish';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private baseUrl = 'http://localhost:8080/api/v1/fish';

  constructor(private http: HttpClient) { }

  saveFish(fish: Fish): Observable<Fish> {
    return this.http.post<Fish>(this.baseUrl, fish);
  }

  getFishById(id: number): Observable<Fish> {
    return this.http.get<Fish>(`${this.baseUrl}/${id}`);
  }

  getAllFish(): Observable<Fish[]> {
    return this.http.get<Fish[]>(this.baseUrl);
  }

  updateFish(id: number, updatedFish: Fish): Observable<Fish> {
    return this.http.put<Fish>(`${this.baseUrl}/${id}`, updatedFish);
  }

  deleteFish(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
