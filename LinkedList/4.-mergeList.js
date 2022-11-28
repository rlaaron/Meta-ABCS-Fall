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

// function mergeLists(head1, head2) {
//     let current1 = head1;
//     let current2 = head2;
//     let newHead = null;
//     let newTail = null;
//     while (current1 && current2) {
//         let newNode = null;
//         if (current1.data < current2.data) {
//             newNode = new SinglyLinkedListNode(current1.data);
//             current1 = current1.next;
//         } else {
//             newNode = new SinglyLinkedListNode(current2.data);
//             current2 = current2.next;
//         }
//         if (newHead == null) {
//             newHead = newNode;
//         } else {
//             newTail.next = newNode;
//         }
//         newTail = newNode;
//     }
//     if (current1) {
//         newTail.next = current1;
//     }
//     if (current2) {
//         newTail.next = current2;
//     }
//     return newHead;
// }
function merge_sorted_lists(first, second){
    let current1 = first;
    let current2 = second;
    let newHead = null;
    let newTail = null;
    while (current1 && current2) {
        let newNode = null;
        if (current1.data < current2.data) {
            newNode = new SinglyLinkedListNode(current1.data);
            current1 = current1.next;
        } else {
            newNode = new SinglyLinkedListNode(current2.data);
            current2 = current2.next;
        }
        if (newHead == null) {
            newHead = newNode;
        } else {
            newTail.next = newNode;
        }
        newTail = newNode;
    }
    if (current1) {
        newTail.next = current1;
    }
    if (current2) {
        newTail.next = current2;
    }
    return newHead;
    
}