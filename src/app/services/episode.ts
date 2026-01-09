import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../models/episode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private baseUrl = 'https://localhost:5001/api/episodes';

  constructor(private http: HttpClient) {}

  getEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.baseUrl);
  }

  getEpisodeById(id: number): Observable<Episode | undefined> {
    return this.http.get<Episode | undefined>(`${this.baseUrl}/${id}`);
  }
}
