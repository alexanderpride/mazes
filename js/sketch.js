

//Initialisation and step 1: Pop a cell from the stack and make it a current cell
const urlParams = new URLSearchParams(window.location.search);

let n_x = parseInt(urlParams.get('x'), 10) || 24;
let n_y = parseInt(urlParams.get('y'), 10) || 24;
let size = parseInt(urlParams.get('size'), 10) || 24;
let fr = parseInt(urlParams.get('framerate'), 10);
let heatmap = urlParams.get('heatmap');

let mazeStartSquare = new Coords(Math.round(Math.random() * (n_x - 1)), Math.round(Math.random() * (n_y - 1)));
let mazeEndSquare = new Coords(Math.round(Math.random() * (n_x - 1)), Math.round(Math.random() * (n_y - 1)));

let generator = new BacktrackGenerator(n_x, n_y, size, mazeStartSquare, mazeEndSquare);
let aStarTraversal;
let depthFirstTraversal;
let breadthFirstTraversal;

let generatorJustCompleted = true;



function setup() {
  // put setup code here

  createCanvas(n_x * size, n_y * size);


  if(fr){
    frameRate(fr);
  }


  }

function draw() {
  // put drawing code here
  background(255);


  if (!generator.generationComplete){

    generator.step();

  } else if (generatorJustCompleted){

    aStarTraversal = new AStarTraversal(generator.maze, mazeStartSquare, mazeEndSquare, size);
    depthFirstTraversal = new DepthFirstTraversal(generator.maze, mazeStartSquare, mazeEndSquare, size);
    breadthFirstTraversal = new BreadthFirstTraversal(generator.maze, mazeStartSquare, mazeEndSquare, size);

    generatorJustCompleted = false;

  } else {

    aStarTraversal.step();
    aStarTraversal.draw();
    depthFirstTraversal.step();
    depthFirstTraversal.draw();
    breadthFirstTraversal.step();
    breadthFirstTraversal.draw();

  }

  generator.maze.draw();


}
