class Stack {
    constructor() {
        this.items = [];
    }

    // Push element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek at the top element without removing it
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

// Example usage:
const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log("Top element:", myStack.peek()); // Output: 3

console.log("Popped element:", myStack.pop()); // Output: 3

console.log("Is the stack empty?", myStack.isEmpty()); // Output: false

console.log("Size of the stack:", myStack.size()); // Output: 2
