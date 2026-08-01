import { IGame } from "../IGame";
import p5 from 'p5';

export class Saltgame implements IGame {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    p: p5;

    constructor(id: number, name: string, description: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.p = null as any; // Initialize p5 instance later in InitGame
    }

    draw(p: p5): void {
        // Implement the draw logic for the Saltgame
    }

    setup(p: p5): void {
        // Implement the setup logic for the Saltgame
    }
}