class Square {

    constructor(x, y, row, column, colour, size) {

        this.size = size;
        this.x = x;
        this.y = y;
        this.row = row;
        this.column = column;

        this.alpha = 0;

        this.active = false;
        this.type = '';

        this.visited = false;

        this.walls = {
            top: true,
            right: true,
            bottom: true,
            left: true
        }

        this.colour = colour

    }

    draw(){

        // Drawing the walls of the square
        stroke(0);
        strokeWeight(3);

        if (this.walls.top) line(this.x, this.y, this.x + this.size, this.y);
        if (this.walls.right) line(this.x + this.size, this.y, this.x + this.size, this.y + this.size);
        if (this.walls.bottom) line(this.x, this.y + this.size, this.x + this.size, this.y + this.size);
        if (this.walls.left) line(this.x, this.y, this.x, this.y + this.size);


        //Drawing the inside of the square
        fill(this.colour.r, this.colour.g, this.colour.b, this.colour.a);
        noStroke();
        square(this.x, this.y, this.size);
    }

}
