const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
}
// create a linked list



function printLinkedList(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}
const llist = new SinglyLinkedList();
llist.insertNode(16);
llist.insertNode(13);
llist.insertNode(7);
printLinkedList(llist.head);