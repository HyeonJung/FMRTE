import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MusiclistComponent } from './musiclist/musiclist.component';
import { MusicregistComponent } from './musicregist/musicregist.component';
import { LoginComponent } from './user/login/login.component';
import { RegistComponent } from './user/regist/regist.component';

const routes: Routes = [
  {path: 'video/list', component: MusiclistComponent},
  {path: 'video/regist', component: MusicregistComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/regist', component: RegistComponent},
  {path: '**', redirectTo: 'user/login'},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
