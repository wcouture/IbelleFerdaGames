import p5 from 'p5';

export interface IGame {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    p: p5;

    draw(p: p5): void;
    setup(p: p5): void; 
}