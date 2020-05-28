class Grid {

    constructor(n_x, n_y, size) {

        this.map = [];
        this.n_x = n_x;
        this.n_y = n_y;


        //Fills the grid with squares
        for (let x = 0; x < n_x; x ++){

            this.map.push([]);

            for (let y = 0; y < n_y; y ++){

                const _square = new Square(
                    x * size,
                    y * size,
                    x,
                    y,
                    size
                    );

                this.map[x].push(_square);

            }

        }

    }

    removeWalls(coordsA, coordsB){

        const aX = coordsA.x, aY = coordsA.y, bX = coordsB.x, bY = coordsB.y;

        // If A is above B
        if(aY - bY === -1){

            this.map[aX][aY].walls.bottom = false;
            this.map[bX][bY].walls.top = false;

        }

        // If A is below B
        if(aY - bY === 1){

            this.map[aX][aY].walls.top = false;
            this.map[bX][bY].walls.bottom = false;

        }

        // If A is to the left of B
        if (aX - bX === -1){

            this.map[aX][aY].walls.right = false;
            this.map[bX][bY].walls.left = false;

        }

        // If A is to the right of B
        if (aX - bX === 1){

            this.map[aX][aY].walls.left = false;
            this.map[bX][bY].walls.right = false;

        }


    }

     getNeighbours(coords){

        let _neighbours = [];
        const x = coords.x;
        const y = coords.y;

       //Check if cell is not in the top row
       if (x > 0) _neighbours.push(new Coords(x - 1, y));

       //Check if cell is not in the bottom column
        if (x < this.n_x - 1) _neighbours.push(new Coords(x + 1, y));

        //Check if cell is not in the leftmost column
       if (y > 0) _neighbours.push(new Coords(x, y - 1));

       //Check if cell is not in the bottom column
        if (y < this.n_y - 1) _neighbours.push(new Coords(x, y + 1));

        return _neighbours;

    }

    getMoves(location){

        let moves = [];
        const x = location.x;
        const y = location.y;


        const locationSquare = this.map[x][y];


        //Check if cell has top wall
        if (!locationSquare.walls.top) moves.push(new Coords(x, y  - 1));

        //Check if cell has bottom wall
        if (!locationSquare.walls.bottom) moves.push(new Coords(x, y + 1));

        //Check if cell has left wall
        if (!locationSquare.walls.left) moves.push(new Coords(x - 1, y));

        //Check if cell has top wall
        if (!locationSquare.walls.right) moves.push(new Coords(x + 1, y));

        return moves;

    }

    draw(){

        for (let col of this.map){
            for (let sq of col){

                sq.draw();

            }
        }

    }

}
