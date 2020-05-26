class Coords {
    constructor(row, column) {

        this.row = row;
        this.column = column;

    }

    equals(other){

        return this.row === other.row && this.column === other.column;

    }

    distance(other){

        return Math.sqrt(Math.pow(this.row - other.row, 2) + Math.pow(this.column - other.column, 2))

    }
}