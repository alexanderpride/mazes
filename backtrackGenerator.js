class BacktrackGenerator{

    constructor(rows, columns, size, startSquare, endSquare) {

        this.maze = new Grid(rows, columns, size);

        this.startSquare = startSquare;
        this.endSquare = endSquare;
        this.drawStartSquare = endSquare;

        this.currentCell;
        this.visited = [this.drawStartSquare];
        this.stack = [this.drawStartSquare];

        this.maze.map[this.startSquare.row][this.startSquare.column].type = "start";
        this.maze.map[this.endSquare.row][this.endSquare.column].type = "end";

        this.generationComplete = false;

    }

    step(){

        // Step 2: While the stack is not empty
        if (this.stack.length > 0) {

            if (this.currentCell) this.maze.map[this.currentCell.row][this.currentCell.column].active = false;

            // Step 2.1
            this.currentCell = this.stack.pop();

            // Set active for styling purposes
            this.maze.map[this.currentCell.row][this.currentCell.column].active = true;

            // if (heatmap === "true") maze.map[currentCell.row][currentCell.column].alpha += 30;

            //Check what neighbours aren't in visited
            const neighbours = this.maze.getNeighbours(this.currentCell);

            // There is probably a better way to do this but for now it'll work I hope
            let unvisitedNeighbours = neighbours.filter((neighbour) => {

                for (const item of this.visited){

                    if (neighbour.equals(item)) return false;

                }

                return true;

            });

            // Step 2.2: If the current cell has any neighbours which have not been visited
            if (unvisitedNeighbours.length > 0) {

                // Step 2.2.1: Push the current cell to the stack
                this.stack.push(this.currentCell);

                //Step 2.2.2: Choose one of the unvisited neighbours
                const randomNeighbour = unvisitedNeighbours[Math.floor(Math.random() * unvisitedNeighbours.length)];

                //Step 2.2.3 Remove the wall between the current cell and the chosen cell
                this.maze.removeWalls(this.currentCell, randomNeighbour);


                //Step 2.2.4 Mark the chosen cell as visited and push it to the stack
                this.visited.push(randomNeighbour);
                this.stack.push(randomNeighbour);

            }

        } else {

            this.generationComplete = true;

        }





    }

}