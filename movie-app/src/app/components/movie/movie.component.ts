import { Component } from '@angular/core';
import { movieData } from '../../models/movieData.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  // get access to movieData instance
  movie = new movieData();
  vote(movie: any): void {
    if (!movie.voted) {
      movie.voted = true;
      console.log(`Voted for ${movie.title}`);
    } else {
      movie.voted = false;
      console.log(`Unvoted for ${movie.title}`);
    }
  }
}
