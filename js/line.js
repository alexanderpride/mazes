class Line {

    constructor(path, estimate, size) {

        this.path = path;
        this.head = path[path.length - 1];
        this.estimate = estimate;
        this.size = size;

    }

    drawLine(){

        stroke(255, 204, 0);
        strokeWeight(2);

        for (let i = 0; i < this.path.length - 1; i++){

            const currentPoint = this.path[i];
            const nextPoint = this.path[i + 1];


            line(currentPoint.x * size + size / 2,
                currentPoint.y * size + size / 2,
                nextPoint.x * size + size / 2,
                nextPoint.y * size + size / 2);

        }

    }

}