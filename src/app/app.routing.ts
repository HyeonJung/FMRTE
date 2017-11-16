import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MusiclistComponent } from './musiclist/musiclist.component';
import { MusicregistComponent } from './musicregist/musicregist.component';

const routes: Routes = [
  {path: 'list', component: MusiclistComponent},
  {path: 'regist', component: MusicregistComponent},
  {path: '**', redirectTo: 'list'},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
