class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.head = 0;
        this.length = 0;
    }

    enqueue(value) {
        this.items[this.rear] = value;
        this.rear++;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        const removedItem = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        this.length--;

        return removedItem;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        return this.items[this.head];
    }

    size() {
        return this.length;
    }

    clear() {
        this.items = {};
        this.rear = 0;
        this.head = 0;
        this.length = 0;
    }
}