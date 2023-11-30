import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieVoteService {
  constructor() {}

  public movieVote(movie: any): void {
    movie.voted = !movie.voted;
  }
}
