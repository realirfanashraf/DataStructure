class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeSortedLinkedList(l1, l2) {
    let dummy = new LinkedListNode(-1);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

let l1 = new LinkedListNode(10);
l1.next = new LinkedListNode(60);
l1.next.next = new LinkedListNode(70);

let l2 = new LinkedListNode(30);
l2.next = new LinkedListNode(40);
l2.next.next = new LinkedListNode(50);

let mergeLists = mergeSortedLinkedList(l1, l2)

while(mergeLists !== null){
    console.log(mergeLists.value)
    mergeLists = mergeLists.next
}
