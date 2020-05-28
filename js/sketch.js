

//Initialisation and step 1: Pop a cell from the stack and make it a current cell
const urlParams = new URLSearchParams(window.location.search);

let rows = parseInt(urlParams.get('rows'), 10) || 24;
let columns = parseInt(urlParams.get('columns'), 10) || 24;
let size = parseInt(urlParams.get('size'), 10) || 24;
let fr = parseInt(urlParams.get('framerate'), 10);
let heatmap = urlParams.get('heatmap');

let mazeStartSquare = new Coords(0, 0);
let mazeEndSquare = new Coords(rows - 1, columns - 1);

let generator = new BacktrackGenerator(rows, columns, size, mazeStartSquare, mazeEndSquare);
let traversal;

let generatorJustCompleted = true;
let traversalJustCompleted = true;


function setup() {
  // put setup code here

  createCanvas(rows * size, columns * size);


  if(fr){
    frameRate(fr);
  }

  // frameRate(2);


}

function draw() {
  // put drawing code here

  background(255);

  if (!generator.generationComplete){

    generator.step();

  } else if (generatorJustCompleted) {

    traversal = new AStarTraversal(generator.maze, mazeStartSquare, mazeEndSquare);
    generatorJustCompleted = false;

  } else if (!traversal.traversalComplete){

    traversal.step();

  } else if (!traversal.traversalComplete){

    console.log(traversal.currentPath);

  }

  generator.maze.draw();

  if (traversal){

    traversal.draw();

  }




}
