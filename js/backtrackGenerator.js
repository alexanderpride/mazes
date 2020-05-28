class BacktrackGenerator{

    constructor(n_x, n_y, size, startSquare, endSquare) {

        this.maze = new Grid(n_x, n_y, size);

        this.startSquare = startSquare;
        this.endSquare = endSquare;
        this.drawStartSquare = endSquare;

        this.currentCell;
        this.visited = [this.drawStartSquare];
        this.stack = [this.drawStartSquare];

        this.generationComplete = false;

    }

    step(){

        // Step 2: While the stack is not empty
        if (this.stack.length > 0) {

            if (this.currentCell) this.maze.map[this.currentCell.x][this.currentCell.y].colour = undefined;

            // Step 2.1
            this.currentCell = this.stack.pop();

            // Set active for styling purposes
            this.maze.map[this.currentCell.x][this.currentCell.y].colour = {r: 0, g: 0, b: 255};
            this.maze.map[this.startSquare.x][this.startSquare.y].colour = {r: 255, g: 0, b: 0};
            this.maze.map[this.endSquare.x][this.endSquare.y].colour = {r: 0, g: 255, b: 0};

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