import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [AppComponent, MovieComponent],
  imports: [BrowserModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
