import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


// *** Este archivo solo tendra lo que tiene que ver con las rutas de mi aplicación ***
// el modulo de rutas ira en --> app.module.ts