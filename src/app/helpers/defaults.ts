import { Square } from "../models/square.model";

export class Defaults {
    // Colors
    static blue: string = 'blue';
    static pink: string = 'pink';
    static purple: string = 'purple';
    static orange: string = 'orange';
    static white: string = 'white';
    static red: string = 'red';
    static green: string = 'green';
    static grey: string = 'grey';
    static yellow: string = 'yellow';

    // Shapes
    static bolt: string = 'pi-bolt';
    static cog: string = 'pi-cog';
    static heart: string = 'pi-heart';
    static eye: string = 'pi-eye';
    static star: string = 'pi-star';
    static circle: string = 'pi-circle';
    static moon: string = 'pi-moon';
    static sun: string = 'pi-sun';
    static triangle: string = 'pi-caret-down';

    // more
    static size: number = 18;
    static rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];

    static colors = [
        [this.blue, this.pink, this.grey, this.white, this.purple, this.green, this.red, this.orange, this.yellow, this.pink, this.grey, this.yellow, this.white, this.green, this.purple, this.blue, this.red, this.orange],
        [this.pink, this.green, this.yellow, this.orange, this.red, this.grey, this.blue, this.purple, this.white, this.green, this.yellow, this.white, this.orange, this.grey, this.red, this.pink, this.blue, this.purple], // 2
        [this.green, this.grey, this.white, this.purple, this.blue, this.yellow, this.pink, this.red, this.orange, this.blue, this.green, this.grey, this.yellow, this.pink, this.orange, this.red, this.purple, this.white], // 3
        [this.white, this.orange, this.red, this.pink, this.grey, this.purple, this.yellow, this.green, this.blue, this.purple, this.blue, this.pink, this.green, this.red, this.yellow, this.orange, this.white, this.grey], // 4
        [this.yellow, this.white, this.purple, this.blue, this.green, this.orange, this.grey, this.pink, this.red, this.orange, this.red, this.blue, this.pink, this.purple, this.grey, this.white, this.yellow, this.green], // 5
        [this.purple, this.red, this.pink, this.grey, this.white, this.blue, this.orange, this.yellow, this.green, this.white, this.purple, this.red, this.blue, this.orange, this.green, this.yellow, this.grey, this.pink], // 6
        [this.red, this.blue, this.green, this.yellow, this.orange, this.pink, this.purple, this.white, this.grey, this.red, this.pink, this.green, this.grey, this.blue, this.white, this.purple, this.orange, this.yellow], // 7
        [this.orange, this.purple, this.blue, this.green, this.yellow, this.red, this.white, this.grey, this.pink, this.yellow, this.orange, this.purple, this.red, this.white, this.pink, this.grey, this.green, this.blue], // 8
        [this.grey, this.yellow, this.orange, this.red, this.pink, this.white, this.green, this.blue, this.purple, this.grey, this.white, this.orange, this.purple, this.yellow, this.blue, this.green, this.pink, this.red], // 9
        [this.green, this.purple, this.yellow, this.pink, this.grey, this.orange, this.white, this.red, this.blue, this.white, this.blue, this.red, this.pink, this.purple, this.grey, this.orange, this.yellow, this.green], // 10
        [this.grey, this.red, this.white, this.green, this.yellow, this.purple, this.orange, this.blue, this.pink, this.purple, this.green, this.pink, this.grey, this.blue, this.white, this.red, this.orange, this.yellow], // 11
        [this.white, this.pink, this.purple, this.yellow, this.orange, this.blue, this.red, this.green, this.grey, this.red, this.grey, this.green, this.yellow, this.pink, this.orange, this.blue, this.purple, this.white], // 12
        [this.red, this.yellow, this.pink, this.purple, this.blue, this.grey, this.green, this.white, this.orange, this.grey, this.purple, this.orange, this.red, this.white, this.pink, this.yellow, this.green, this.blue], // 13
        [this.purple, this.grey, this.blue, this.orange, this.red, this.green, this.pink, this.yellow, this.white, this.orange, this.pink, this.blue, this.green, this.red, this.yellow, this.purple, this.white, this.grey], // 14
        [this.yellow, this.blue, this.orange, this.grey, this.white, this.red, this.purple, this.pink, this.green, this.yellow, this.red, this.purple, this.blue, this.orange, this.green, this.white, this.grey, this.pink], // 15
        [this.orange, this.green, this.red, this.white, this.purple, this.pink, this.blue, this.grey, this.yellow, this.blue, this.yellow, this.grey, this.white, this.green, this.purple, this.pink, this.red, this.orange], // 16
        [this.blue, this.white, this.green, this.red, this.pink, this.yellow, this.grey, this.orange, this.purple, this.pink, this.white, this.yellow, this.orange, this.grey, this.red, this.green, this.blue, this.purple], // 17
        [this.pink, this.orange, this.grey, this.blue, this.green, this.white, this.yellow, this.purple, this.red, this.green, this.orange, this.white, this.purple, this.yellow, this.blue, this.grey, this.pink, this.red] // 18
    ];
    static shapes = [
        // A    B     C     D     E     F     G     H     I     J     K     L     M     N     O     P     Q     R
        [this.bolt, this.cog, this.heart, this.eye, this.star, this.circle, this.moon, this.sun, this.triangle, this.moon, this.cog, this.circle, this.heart, this.bolt, this.eye, this.star, this.sun, this.triangle], // 1
        [this.circle, this.heart, this.eye, this.star, this.bolt, this.triangle, this.cog, this.moon, this.sun, this.cog, this.heart, this.triangle, this.eye, this.circle, this.star, this.bolt, this.moon, this.sun], // 2
        [this.triangle, this.eye, this.star, this.bolt, this.circle, this.sun, this.heart, this.cog, this.moon, this.sun, this.moon, this.bolt, this.cog, this.star, this.heart, this.eye, this.triangle, this.circle], // 3
        [this.cog, this.circle, this.triangle, this.sun, this.moon, this.heart, this.bolt, this.star, this.eye, this.circle, this.triangle, this.eye, this.sun, this.heart, this.moon, this.cog, this.bolt, this.star], // 4
        [this.moon, this.bolt, this.circle, this.triangle, this.sun, this.cog, this.star, this.eye, this.heart, this.bolt, this.circle, this.heart, this.triangle, this.cog, this.sun, this.moon, this.star, this.eye], // 5
        [this.eye, this.sun, this.moon, this.cog, this.heart, this.star, this.triangle, this.circle, this.bolt, this.star, this.bolt, this.cog, this.circle, this.moon, this.triangle, this.sun, this.eye, this.heart], // 6
        [this.star, this.moon, this.cog, this.heart, this.eye, this.bolt, this.sun, this.triangle, this.circle, this.triangle, this.sun, this.star, this.moon, this.eye, this.cog, this.heart, this.circle, this.bolt], // 7
        [this.heart, this.triangle, this.sun, this.moon, this.cog, this.eye, this.circle, this.bolt, this.star, this.eye, this.star, this.moon, this.bolt, this.sun, this.circle, this.triangle, this.heart, this.cog], // 8
        [this.sun, this.star, this.bolt, this.circle, this.triangle, this.moon, this.eye, this.heart, this.cog, this.heart, this.eye, this.sun, this.star, this.triangle, this.bolt, this.circle, this.cog, this.moon], // 9
        [this.eye, this.cog, this.star, this.triangle, this.sun, this.bolt, this.moon, this.circle, this.heart, this.sun, this.cog, this.bolt, this.circle, this.moon, this.triangle, this.star, this.eye, this.heart], // 10
        [this.star, this.heart, this.bolt, this.sun, this.moon, this.circle, this.cog, this.triangle, this.eye, this.cog, this.eye, this.triangle, this.sun, this.heart, this.moon, this.circle, this.bolt, this.star], // 11
        [this.circle, this.star, this.triangle, this.cog, this.heart, this.sun, this.eye, this.moon, this.bolt, this.heart, this.star, this.sun, this.moon, this.eye, this.cog, this.triangle, this.circle, this.bolt], // 12
        [this.moon, this.triangle, this.cog, this.star, this.bolt, this.heart, this.circle, this.eye, this.sun, this.circle, this.sun, this.eye, this.star, this.triangle, this.bolt, this.heart, this.cog, this.moon], // 13
        [this.sun, this.circle, this.moon, this.eye, this.star, this.cog, this.bolt, this.heart, this.triangle, this.moon, this.heart, this.circle, this.triangle, this.cog, this.sun, this.bolt, this.star, this.eye], // 14
        [this.bolt, this.eye, this.circle, this.moon, this.cog, this.triangle, this.heart, this.sun, this.star, this.triangle, this.moon, this.star, this.bolt, this.sun, this.circle, this.eye, this.heart, this.cog], // 15
        [this.triangle, this.bolt, this.sun, this.heart, this.eye, this.moon, this.star, this.cog, this.circle, this.eye, this.bolt, this.moon, this.cog, this.star, this.heart, this.sun, this.triangle, this.circle], // 16
        [this.cog, this.sun, this.heart, this.bolt, this.circle, this.eye, this.triangle, this.star, this.moon, this.star, this.circle, this.cog, this.heart, this.bolt, this.eye, this.moon, this.sun, this.triangle], // 17
        [this.heart, this.moon, this.eye, this.circle, this.triangle, this.star, this.sun, this.bolt, this.cog, this.bolt, this.triangle, this.heart, this.eye, this.circle, this.star, this.cog, this.moon, this.sun]  // 18
    ];

    static getBoard(): Square[][] {
        const board: Square[][] = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        let index = 0;
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                board[i][j] = new Square(index, this.shapes[i][j], this.colors[i][j], '', [this.rows[i], j]);
                index++;
            }
        }
        return board;
    }
}