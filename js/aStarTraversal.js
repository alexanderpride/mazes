class AStarTraversal {

    constructor(maze, startNode, endNode){

        this.maze = maze;
        this.frontier = [new Line([new Point(startNode.row, startNode.column, 0)], 0)];
        this.visited = [];

        this.endNode = endNode;
        this.traversalComplete = false;
        this.currentPath;

    }

    draw(){

        if (this.currentPath){

            this.currentPath.drawLine();

        }

    }

    addToHeap(line){

        let i = 0;

        while ( i < this.frontier.length){
            if (line.estimate < this.frontier[i].estimate){


                this.frontier = [...this.frontier.slice(0, i), line, ...this.frontier.slice(i)];
                i = this.frontier.length;


            } else{

                i++;

            }
        }

        // if theres nothing to index or theres nothing higher than this
        if (this.frontier.length === i){
            this.frontier.push(line);
        }

    }

    step(){

        // if (this.frontier.length > 0) console.log(this.frontier);

        if (this.frontier.length > 0 && !this.traversalComplete){

            // current = remove lowest rank item from OPEN
            this.currentPath = this.frontier.shift();


            // add current to CLOSED
            this.visited.push(this.currentPath.head);

            if (this.currentPath.head.equals(this.endNode)){

                this.traversalComplete = true;

            } else {

                const moves = this.maze.getMoves(this.currentPath.head);

                // for neighbors of current:
                for (const move of moves){

                    // cost = g(current) + movementcost(current, neighbor)
                    const cost = this.currentPath.head.cost + 1;

                    // if neighbor in OPEN and cost less than g(neighbor):
                    this.frontier = this.frontier.filter(line => !(line.head.equals(move) && cost < line.head.cost));

                    // if neighbor in CLOSED and cost less than g(neighbor):
                    this.visited = this.visited.filter(spot => !(spot.equals(move) && cost < spot.cost));

                    // if neighbor not in OPEN and neighbor not in CLOSED:

                    const inFrontier = this.frontier.find(line => line.head.equals(move));
                    const inVisited = this.visited.find(spot => spot.equals(move));

                    if (!inFrontier && !inVisited){

                        const heuristic = move.distance(this.endNode);
                        const estimate = heuristic + cost;

                        const _line = new Line([...this.currentPath.path, new Point(move.row, move.column, cost)], estimate);

                        this.addToHeap(_line);

                    }

                }

            }

        }

    }

}