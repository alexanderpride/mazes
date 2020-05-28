class Coords {
    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

    equals(other){

        return this.x === other.x && this.y === other.y;

    }

    distance(other){

        // return Math.sqrt(Math.pow(this.row - other.row, 2) + Math.pow(this.column - other.column, 2))
        const dx = Math.abs(this.x - other.x);
        const dy = Math.abs(this.y - other.y);

        return dx + dy;
    }
}

class Point{

    constructor(x, y, cost) {

        this.x = x;
        this.y = y;
        this.cost = cost;
    }

    equals(other){

        return this.x === other.x && this.y === other.y;

    }

    distance(other){

        // return Math.sqrt(Math.pow(this.row - other.row, 2) + Math.pow(this.column - other.column, 2))
        const dx = Math.abs(this.x - other.x);
        const dy = Math.abs(this.y - other.y);

        return dx + dy;
    }

}