class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.tail.next = this.head;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "queue is empty";
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
            this.length--;
        }
    }

    print() {
        if (this.isEmpty()) {
            return "queue is empty";
        } else {
            let curr = this.head;
            const result = [];
            while (curr !== null && curr !== this.tail) {
                result.push(curr.value);
                curr = curr.next;
            }
            result.push(curr.value);
            return result.join('->');
        }
    }

    isCircular(){
        let fastPointer = this.head
        let slowPointer = this.head
        while(fastPointer !== null && fastPointer.next !== null){
            fastPointer = fastPointer.next.next
            slowPointer = slowPointer.next
            if(fastPointer === slowPointer){
                return true
            }
        }
        return false
    }
}

let queue = new CircularQueue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(40)
console.log(queue.print())
console.log(queue.isCircular())
