class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.length++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is Empty");
        } else {
            let curr = this.head;
            let listValues = "";
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.length) {
            return "Invalid Index";
        }
    
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let curr = this.head;
    
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
    
            node.next = curr.next;
            curr.next = node;
        }
    
        this.length++;
    }
    

}
