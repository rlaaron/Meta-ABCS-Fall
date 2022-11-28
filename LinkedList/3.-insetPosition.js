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

// function insertNodeAtPosition(head, data, position) {
//     let current = head;
//     let count = 0;
//     while (count < position - 1) {
//         current = current.next;
//         count++;
//     }
//     let newNode = new SinglyLinkedListNode(data);
//     newNode.next = current.next;
//     current.next = newNode;
//     return head;
// }
function insert_at_position(head, val, pos){
    let current = head;
    let count = 0;
    while (count < pos - 1) {
        current = current.next;
        count++;
    }
    let newNode = new SinglyLinkedListNode(val);
    newNode.next = current.next;
    current.next = newNode;
    return head;
}