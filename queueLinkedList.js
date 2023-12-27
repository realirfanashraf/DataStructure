const LinkedList = require('./linkedListWithTail.js')

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    print(){
        return this.list.print()
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}


