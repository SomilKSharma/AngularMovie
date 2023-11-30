// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [AppComponent, MovieComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
