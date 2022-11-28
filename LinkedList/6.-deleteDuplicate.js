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
function removeDuplicates(llist){
    let current = llist;
    while (current) {
        if (current.next && current.data === current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return llist;
}
