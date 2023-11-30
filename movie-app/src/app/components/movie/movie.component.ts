// movie.component.ts
import { Component } from '@angular/core';
import { movieData } from '../../models/movieData.model';
import { MovieVoteService } from '../../service/movie-vote.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  // get access to movieData instance
  public movie = new movieData();

  constructor(private movieVoteService: MovieVoteService) {}

  public voteForMovie(movie: any): void {
    this.movieVoteService.movieVote(movie);
  }
}
