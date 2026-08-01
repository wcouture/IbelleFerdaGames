import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import p5 from 'p5';
import { IGame } from '../../games/IGame';
import { GameNotFound } from '../../games/notfound/not-found';

@Component({
  selector: 'game-detail',
  imports: [],
  templateUrl: './game-detail.html',
  styleUrls: ['./game-detail.css'],
  standalone: true
})
export class GameDetail implements AfterViewInit, OnDestroy {
  @Input ("gameId") gameId: number = 0;
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;
  private p5Instance?: p5;

  private game: IGame = new GameNotFound();

  private createCanvas(): void {
    this.p5Instance = new p5(
      (p: p5) => this.sketch(p, this),
      this.canvasContainer.nativeElement);
  }

  ngAfterViewInit(): void {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    if (this.p5Instance) {
      this.p5Instance.remove();
    }
  }

  private sketch = (p: p5, context: GameDetail): void => {
    p.setup = () => {
      context.game.setup(p);
    };

    p.draw = () => {
      context.game.draw(p);
    };
  }
}
