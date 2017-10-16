import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusiclistComponent } from './musiclist/musiclist.component';
import { HeaderComponent } from './header/header.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    MusiclistComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
