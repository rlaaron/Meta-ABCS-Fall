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

function findMergeNode(headA, headB){
    let currentA = headA;
    let currentB = headB;
    while (currentA) {
        while (currentB) {
            if (currentA === currentB) {
                return currentA.data;
            }
            currentB = currentB.next;
        }
        currentA = currentA.next;
        currentB = headB;
    }
}