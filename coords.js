class Coords {
    constructor(row, column) {

        this.row = row;
        this.column = column;

    }

    equals(other){

        return this.row === other.row && this.column === other.column;

    }

    distance(other){

        // return Math.sqrt(Math.pow(this.row - other.row, 2) + Math.pow(this.column - other.column, 2))
        const dx = Math.abs(this.row - other.row);
        const dy = Math.abs(this.column - other.column);

        return dx + dy;
    }
}

class Point{

    constructor(row, column, cost) {

        this.row = row;
        this.column = column;
        this.cost = cost;
    }

    equals(other){

        return this.row === other.row && this.column === other.column;

    }

    distance(other){

        // return Math.sqrt(Math.pow(this.row - other.row, 2) + Math.pow(this.column - other.column, 2))
        const dx = Math.abs(this.row - other.row);
        const dy = Math.abs(this.column - other.column);

        return dx + dy;
    }

}