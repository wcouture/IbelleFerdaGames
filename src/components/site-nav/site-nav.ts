import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'site-nav',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.css',
})
export class SiteNav {}
