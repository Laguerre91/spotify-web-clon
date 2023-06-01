import { Component, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {

  songs: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getSongs()
      .subscribe((data: any) => {
        console.log(data);

        this.songs = data.categories.items
      });
  }

}
