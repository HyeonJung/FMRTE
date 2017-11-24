import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MusiclistComponent } from './musiclist/musiclist.component';
import { HeaderComponent } from './header/header.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { MusicregistComponent } from './musicregist/musicregist.component';
import { routing } from './app.routing';
import { FmrteService } from './service/fmrte.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { RegistComponent } from './user/regist/regist.component';

@NgModule({
  declarations: [
    AppComponent,
    MusiclistComponent,
    HeaderComponent,
    MusicregistComponent,
    LoginComponent,
    RegistComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [FmrteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
