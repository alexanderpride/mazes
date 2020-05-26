

//Initialisation and step 1: Pop a cell from the stack and make it a current cell
let rows = 33;
let columns = 19;
let size = 40;

let maze = new Grid(rows, columns, size);

let startingCell = new Coords(0, 0);
maze.map[startingCell.row][startingCell.column].type = "start"

let currentCell;
let visited = [startingCell];
let stack = [startingCell];

let endCandidates = [];
let endSpot;


function setup() {
  // put setup code here

  createCanvas(rows * size, columns * size);
  // frameRate(2);


}

function draw() {
  // put drawing code here

  background(255);

  // Step 2: While the stack is not empty
  if (stack.length > 0) {

    // Step 2.1
    currentCell = stack.pop();

    // Set active for styling purposes
    maze.map[currentCell.row][currentCell.column].active = true;
    maze.map[currentCell.row][currentCell.column].alpha += 20;


    //Check what neighbours aren't in visited
    const neighbours = maze.getNeighbours(currentCell);

    // There is probably a better way to do this but for now it'll work I hope
    let unvisitedNeighbours = neighbours.filter((neighbour) => {

      for (const item of visited){

        if (neighbour.equals(item)) return false;

      }

      return true;

    });

    // Step 2.2: If the current cell has any neighbours which have not been visited
    if (unvisitedNeighbours.length > 0) {

      // Step 2.2.1: Push the current cell to the stack
      stack.push(currentCell);

      //Step 2.2.2: Choose one of the unvisited neighbours
      const randomNeighbour = unvisitedNeighbours[Math.floor(Math.random() * unvisitedNeighbours.length)];

      //Step 2.2.3 Remove the wall between the current cell and the chosen cell
      maze.removeWalls(currentCell, randomNeighbour);


      //Step 2.2.4 Mark the chosen cell as visited and push it to the stack
      visited.push(randomNeighbour);
      stack.push(randomNeighbour);

    } else{

      // Check where a location doesn't have any visited neighbours and it is the last thing to be added to
      // visited which means it is a dead end

      let lastItem = visited[visited.length - 1];

      if(currentCell.equals(lastItem)){

        endCandidates.push(currentCell);

      }

    }

  } else if (!endSpot){

    let maxDistance = 0.0;
    let max = startingCell;

    for (const candidate of endCandidates){

      const distance = startingCell.distance(candidate);

      if (distance > maxDistance){

        maxDistance = distance;
        max = candidate;

      }

    }


    endSpot = max;

    maze.map[max.row][max.column].type = "end";

  }

  maze.draw();

  maze.map[currentCell.row][currentCell.column].active = false;



}
