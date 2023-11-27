import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies = [
    { title: 'Movie 1', poster: 'assets/images/poster-1.jpg', voted: false },
    { title: 'Movie 2', poster: 'assets/images/poster-2.jpg', voted: false },
    { title: 'Movie 3', poster: 'assets/images/poster-3.jpg', voted: false },
    { title: 'Movie 4', poster: 'assets/images/poster-4.jpeg', voted: false }
  ];

  vote(movie: any): void {
    if (!movie.voted) {
      movie.voted = true;
      console.log(`Voted for ${movie.title}`);
    }
  }
}
