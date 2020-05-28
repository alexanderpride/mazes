class Square {

    constructor(x_px, y_px, x, y, size) {

        this.size = size;
        this.x_px = x_px;
        this.y_px = y_px;
        this.x = x;
        this.y = y;

        this.walls = {
            top: true,
            right: true,
            bottom: true,
            left: true
        }

        this.colour;

    }

    draw(){

        // Drawing the walls of the square
        stroke(0);
        strokeWeight(3);

        if (this.walls.top) line(this.x_px, this.y_px, this.x_px + this.size, this.y_px);
        if (this.walls.right) line(this.x_px + this.size, this.y_px, this.x_px + this.size, this.y_px + this.size);
        if (this.walls.bottom) line(this.x_px, this.y_px + this.size, this.x_px + this.size, this.y_px + this.size);
        if (this.walls.left) line(this.x_px, this.y_px, this.x_px, this.y_px + this.size);


        //Drawing the inside of the square
        if (this.colour) {

            fill(this.colour.r, this.colour.g, this.colour.b);
            noStroke();
            square(this.x_px + 1.5, this.y_px + 1.5, this.size - 3);

        }
    }

}
