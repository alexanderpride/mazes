

//Initialisation and step 1: Pop a cell from the stack and make it a current cell
const urlParams = new URLSearchParams(window.location.search);

let n_x = parseInt(urlParams.get('x'), 10) || 24;
let n_y = parseInt(urlParams.get('y'), 10) || 24;
let size = parseInt(urlParams.get('size'), 10) || 24;
let fr = parseInt(urlParams.get('framerate'), 10);
let heatmap = urlParams.get('heatmap');

let mazeStartSquare = new Coords(0, 0);
let mazeEndSquare = new Coords(n_x - 1, n_y - 1);

let generator = new BacktrackGenerator(n_x, n_y, size, mazeStartSquare, mazeEndSquare);
let traversal;

let generatorJustCompleted = true;
let traversalJustCompleted = true;


function setup() {
  // put setup code here

  createCanvas(n_x * size, n_y * size);


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

  } else if (generatorJustCompleted){

    traversal = new AStarTraversal(generator.maze, mazeStartSquare, mazeEndSquare, size);
    generatorJustCompleted = false;

  } else {

    traversal.step();
    traversal.draw();

  }

  generator.maze.draw();


}
