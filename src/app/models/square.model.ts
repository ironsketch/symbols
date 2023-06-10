export class Square {
    id?: number;
    shape?: string;
    color?: string;
    player?: string;
    location?: [string, number];

    constructor(id?: number, shape?: string, color?: string, player?: string, location?: [string, number]) {
        this.id = id;
        this.shape = shape;
        this.color = color;
        this.player = player;
        this.location = location;
    }
}