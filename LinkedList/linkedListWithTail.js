class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    isEmpty() {
        return this.length === 0;
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

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
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
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return "List is Empty"
        }
        const value = this.head.value
        this.head = this.head.next
        this.length--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return "List is Empty"
        }
        const value = this.tail.value
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.length--
        return value
    }
}

module.exports = LinkedList