class Grid {

    constructor(rows, columns, size) {

        this.map = [];
        this.rows = rows;
        this.columns = columns;


        //Fills the grid with squares
        for (let row = 0; row < rows; row ++){

            this.map.push([]);

            for (let column = 0; column < columns; column ++){

                const _square = new Square(
                    row * size,
                    column * size,
                    row,
                    column,
                    {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    },
                    size
                    );

                this.map[row].push(_square);

            }

        }

    }

    removeWalls(coordsA, coordsB){

        const aRow = coordsA.row, aCol = coordsA.column, bRow = coordsB.row, bCol = coordsB.column

        // If A is above B
        if(aCol - bCol === -1){

            this.map[aRow][aCol].walls.bottom = false;
            this.map[bRow][bCol].walls.top = false;

        }

        // If A is below B
        if(aCol - bCol === 1){

            this.map[aRow][aCol].walls.top = false;
            this.map[bRow][bCol].walls.bottom = false;

        }

        // If A is to the left of B
        if (aRow - bRow === -1){

            this.map[aRow][aCol].walls.right = false;
            this.map[bRow][bCol].walls.left = false;

        }

        // If A is to the right of B
        if (aRow - bRow === 1){

            this.map[aRow][aCol].walls.left = false;
            this.map[bRow][bCol].walls.right = false;

        }


    }

    getNeighbours(coords){

        let _neighbours = [];
        const cellRow = coords.row;
        const cellColumn = coords.column;

       //Check if cell is not in the top row
       if (cellRow > 0) _neighbours.push(new Coords(cellRow - 1, cellColumn));

       //Check if cell is not in the bottom column
        if (cellRow < this.rows - 1) _neighbours.push(new Coords(cellRow + 1, cellColumn));

        //Check if cell is not in the leftmost column
       if (cellColumn > 0) _neighbours.push(new Coords(cellRow, cellColumn - 1));

       //Check if cell is not in the bottom column
        if (cellColumn < this.columns - 1) _neighbours.push(new Coords(cellRow, cellColumn + 1));

        return _neighbours;

    }

    getMoves(location){

        let moves = [];
        const cellRow = location.row;
        const cellColumn = location.column;


        const locationSquare = this.map[cellRow][cellColumn];


        //Check if cell has top wall
        if (!locationSquare.walls.top) moves.push(new Coords(cellRow, cellColumn  - 1));

        //Check if cell has bottom wall
        if (!locationSquare.walls.bottom) moves.push(new Coords(cellRow, cellColumn + 1));

        //Check if cell has left wall
        if (!locationSquare.walls.left) moves.push(new Coords(cellRow - 1, cellColumn));

        //Check if cell has top wall
        if (!locationSquare.walls.right) moves.push(new Coords(cellRow + 1, cellColumn));

        return moves;

    }

    draw(){

        for (let col of this.map){
            for (let sq of col){

                if (sq.active) {
                    sq.colour = {
                        r: 0,
                        g: 0,
                        b: 255,
                        a: 150
                    }
                }

                if (!sq.active) {
                    sq.colour = {
                        r: 255,
                        g: 0,
                        b: 255,
                        a: sq.alpha
                    }
                }

                if (sq.type === "start"){
                    sq.colour = {
                        r: 255,
                        g: 0,
                        b: 0,
                        a: 150
                    }
                }

                if (sq.type === "candidate"){
                    sq.colour = {
                        r: 0,
                        g: 255,
                        b: 0,
                        a: 50
                    }
                }

                if (sq.type === "end"){
                    sq.colour = {
                        r: 0,
                        g: 255,
                        b: 0,
                        a: 150
                    }
                }

                if (sq.type === "test"){
                    sq.colour = {
                        r: 255,
                        g: 255,
                        b: 0,
                        a: 150
                    }
                }



                sq.draw();
            }
        }

    }

}
