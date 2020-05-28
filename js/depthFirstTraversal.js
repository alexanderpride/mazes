class DepthFirstTraversal {

    constructor(maze, startSquare, endSquare, lineScale) {

        this.maze = maze;
        this.startSquare = startSquare;
        this.endSquare = endSquare;
        this.currentPath;

        this.visited = [];
        this.stack = [new Line([startSquare], 0, size)];

        this.traversalComplete = false;

        this.lineScale = lineScale

    }

    draw(){

        if (this.currentPath){

            this.currentPath.drawLine({r: 255, g: 0, b: 255}, this.lineScale, 0.75);

        }

    }

    step(){

        if (this.stack.length > 0 && !this.traversalComplete){

            this.currentPath = this.stack.pop();

            if (this.currentPath.head.equals(this.endSquare)){

                this.traversalComplete = true;

            } else {

                const inVisited = this.visited.find(spot => spot.equals(this.currentPath.head));

                if (!inVisited) {

                    this.visited.push(this.currentPath.head);
                    const paths = this.maze.getMoves(this.currentPath.head);

                    for (const path of paths) {

                        const pathInVisited = this.visited.find(spot => spot.equals(path));

                        if (!pathInVisited) {

                            this.stack.push(new Line([...this.currentPath.path, path], 0));

                        }

                    }

                }
            }

        }

    }

}