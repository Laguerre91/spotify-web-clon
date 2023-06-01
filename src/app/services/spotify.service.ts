import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getSongs() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCm-L90KexTP3JaPZ6vR3RtcyI2rzn5I-eDNuESNAxiU_2lXMSnBTLH-o24cv2h6RsLV3VQGy3i8CVpNdVPrwG8hOKvubIhy-JO7zRY_AzfQuYWZmY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/categories?limit=20', { headers });
  }
}
