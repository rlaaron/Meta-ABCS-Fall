const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
}

function printDoublyLinkedList(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}
// function coypy doubly linked list and returned the node of the head of the new list
function copyDoublyLinkedList(head) {
    let current = head;
    let newHead = null;
    let newTail = null;
    while (current) {
        let newNode = new DoublyLinkedListNode(current.data);
        if (newHead == null) {
            newHead = newNode;
        } else {
            newTail.next = newNode;
            newNode.prev = newTail;
        }
        newTail = newNode;
        current = current.next;
    }
    return newHead;
}



const llist = new DoublyLinkedList();
llist.insertNode(16);
llist.insertNode(13);
llist.insertNode(7);
// printLinkedList(llist.head);
// console.log(llist);
let copy = copyDoublyLinkedList(llist);

console.log(copy);
// printDoublyLinkedList(llist.head);
// printDoublyLinkedList(copy.head);