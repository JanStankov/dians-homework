import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtGalleryOrMuseum } from '../models/art-gallery-or-museum';

@Injectable({
 providedIn: 'root'
})
export class ArtGalleryOrMuseumService {

 private apiUrl = 'http://localhost:7155/api/map';

 constructor(private http: HttpClient) { }

 getAll(): Observable<ArtGalleryOrMuseum[]> {
    return this.http.get<ArtGalleryOrMuseum[]>(this.apiUrl);
 }

 getByName(name?: string): Observable<ArtGalleryOrMuseum> {
    return this.http.get<ArtGalleryOrMuseum>(`${this.apiUrl}/${name}`);
 }
}
