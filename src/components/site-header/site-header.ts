import { Component } from '@angular/core';
import { SiteNav } from '../site-nav/site-nav';

@Component({
  selector: 'site-header',
  imports: [],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  readonly fonts: string[] = ['bitcount-ink-400', 'bitcount-ink-600', 'germania-one-regular', 'edu-vic-wa-nt-hand-400', 'edu-vic-wa-nt-hand-600', 'playwrite-nz-guides-regular', 'jersey-10-charted-regular', 'major-mono-display-regular', 'lilita-one-regular']
  readonly fontClass: string;

  constructor() {
    this.fontClass = this.fonts[Math.floor(Math.random() * this.fonts.length)];
  }
}
