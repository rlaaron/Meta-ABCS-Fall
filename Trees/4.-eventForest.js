class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addNode(n){
        if(n.value < this.value){
            if(this.left == null){
                this.left = n;
            }else{
                this.left.addNode(n);
            }
        }else if(n.value > this.value){
            if(this.right == null){
                this.right = n;
            }else{
                this.right.addNode(n);
            }
        }
    }
}

function setup() {
    let values = [7,4,2,6,1,3,5,7];
    let bst = new Node(values[0]);
    for(let i = 1; i < values.length; i++){
        bst.addNode(new Node(values[i]));
    }
    return bst;
}

function evenForest(t_nodes, t_edges, t_from, t_to) {
    let nodes = [];
    for(let i = 0; i < t_nodes; i++){
        nodes.push(new Node(i+1));
    }
    for(let i = 0; i < t_edges; i++){
        nodes[t_from[i]-1].addNode(nodes[t_to[i]-1]);
    }
    return nodes;
}

// let bst = setup();
eventForest(bst);