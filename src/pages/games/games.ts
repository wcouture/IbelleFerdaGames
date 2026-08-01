import { Component } from '@angular/core';
import { PageContainer } from '../../components/page-container/page-container';
import { GameDetail } from '../../components/game-detail/game-detail';

@Component({
  selector: 'games-component',
  imports: [PageContainer, GameDetail],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class GamesComponent {}
