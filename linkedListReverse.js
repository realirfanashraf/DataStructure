class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    

    isEmpty(){
        return this.length === 0 
    }
    prepand(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.tail = this.head 
        this.head = prev
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
}

let list = new LinkedList()

list.prepand(10)
list.prepand(20)
list.prepand(30)
list.reverse()
list.print()


