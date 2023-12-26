const LinkedList = require('./linkedListWithTail.js')

class LinkedListStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    print(){
        return this.list.print()
    }
}

