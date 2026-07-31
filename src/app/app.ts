import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from '../components/site-header/site-header';
import { SiteNav } from '../components/site-nav/site-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
