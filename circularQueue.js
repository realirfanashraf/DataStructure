class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    enqueue(value) {
        if (this.isFull()) {
            return "Queue is full";
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = value;
        this.currentLength++;

        if (this.front === -1) {
            this.front = this.rear;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        const removedItem = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;

        return removedItem;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        return this.items[this.front];
    }

    size() {
        return this.currentLength;
    }

    clear() {
        this.items = new Array(this.capacity);
        this.rear = -1;
        this.front = -1;
        this.currentLength = 0;
    }
}