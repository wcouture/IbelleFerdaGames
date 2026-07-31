import { Routes } from '@angular/router';
import { GamesComponent } from '../pages/games/games';
import { HomeComponent } from '../pages/home/home';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'games', component: GamesComponent},
    {path: 'home', component: HomeComponent}
];
