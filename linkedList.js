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

    removeFrom(index) {
        if (index < 0 || index >= this.length) {
            return "Invalid Index";
        }
    
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = removeNode.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            removeNode = curr.next;
            curr.next = removeNode.next;
        }
        
        this.length--;
        return removeNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return "Value not Found";
        }
    
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length -= 1;
            return "Value removed";
        } else {
            let curr = this.head;
            let removeNode;
            while (curr.next && curr.next.value !== value) {
                curr = curr.next;
            }
            if (curr.next) {
                removeNode = curr.next;
                curr.next = removeNode.next;
                this.length -= 1;
                return "Value removed";
            }
        }
    
        return "Value not Found";
    }

    search(value) {
        if (this.isEmpty()) {
            return "List is empty";
        }
    
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i; 
            }
            curr = curr.next;
            i++;
        }
    
        return -1;
    }

    reverse(){
        if(this.isEmpty()){
            return "List is empty"
        }else{
            let prev = null
            let curr = this.head
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
        }
        return "List reversed";
    }
    
}
