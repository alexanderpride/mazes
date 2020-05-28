class Line {

    constructor(path, estimate) {

        this.path = path;
        this.head = path[path.length - 1];
        this.estimate = estimate;

    }

    drawLine(colour, size, offset){

        stroke(colour.r, colour.g, colour.b);
        strokeWeight(Math.round(size / 6));

        for (let i = 0; i < this.path.length - 1; i++){

            const currentPoint = this.path[i];
            const nextPoint = this.path[i + 1];




            line(currentPoint.x * size + size * offset,
                currentPoint.y * size + size * offset,
                nextPoint.x * size + size * offset,
                nextPoint.y * size + size * offset);

        }

    }

}