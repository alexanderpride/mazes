class Line {

    constructor(path, estimate) {

        this.path = path;
        this.head = path[path.length - 1];
        this.estimate = estimate;

    }

    drawLine(){

        stroke(255, 204, 0);
        strokeWeight(2);

        for (let i = 0; i < this.path.length - 1; i++){

            const currentPoint = this.path[i];
            const nextPoint = this.path[i + 1];


            line(currentPoint.row * 24 + 12, currentPoint.column * 24 + 12, nextPoint.row * 24 + 12, nextPoint.column * 24 + 12)

        }

    }

}