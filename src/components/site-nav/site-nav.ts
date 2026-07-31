import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'site-nav',
  imports: [RouterLink],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.css',
})
export class SiteNav {}
