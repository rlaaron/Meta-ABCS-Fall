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


function heightTree(bst){
    if(bst == null){
        return -1;
    }
    let left = heightTree(bst.left);
    let right = heightTree(bst.right);
    return Math.max(left, right) + 1;
}

let bst = setup();
console.log(heightTree(bst));
console.log(bst);