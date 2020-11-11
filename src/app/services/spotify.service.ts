import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  bearer = 'Bearer';
  apiKey = `${this.bearer} ${environment.apiKey}`;

  constructor(private http: HttpClient) {
    console.log('spotifyService Listo !!');
  }

  // centralizaremos nuestra función
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: this.apiKey,
    });
    return this.http.get(url, { headers });
  }

  getNewRelease(): any {
    // podemos hacer cuaquier cantidad de procesos pero haremos un retorno
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data.albums.items)
    );
  }
  // Servicio utilizado en search component
  getArtistas(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map ( data => data['tracks'] ));
  }

}

// Modificando el headers
// const headers = new HttpHeaders({
//   Authorization: this.apiKey,
// });
//  return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=20`, { headers });

// Modificando el headers
// const headers = new HttpHeaders({
//   Authorization: this.apiKey,
