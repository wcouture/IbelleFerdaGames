import { IGame } from "../IGame";
import p5 from 'p5';

export class GameNotFound implements IGame {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    p: p5 = null as any; // Initialize p5 instance later in InitGame

    constructor() {
        this.id = -1;
        this.name = "Game Not Found";
        this.description = "The requested game could not be found.";
        this.imageUrl = "";
        this.p = null as any; // Initialize p5 instance later in InitGame
    }

    draw(p: p5): void {
        // Implement the draw logic for the GameNotFound
        p.translate(p.width / 2, p.height / 2);
        p.background(200);
        p.textSize(32);
        p.textAlign(p.CENTER, p.CENTER);
        p.rotate(p.frameCount * 0.01);
        p.fill(0);
        p.text('Game not found', 0, 0);
    }

    setup(p: p5): void {
        // Implement the setup logic for the GameNotFound
        p.createCanvas(400, 400);
        p.background(200);
        p.textSize(32);
        p.textAlign(p.CENTER, p.CENTER);
        p.fill(0);
        p.text('Game not found', 0, 0);
    }
}