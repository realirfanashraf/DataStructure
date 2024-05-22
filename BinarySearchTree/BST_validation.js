class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


function isValidBst(root){
    return validate(root , -Infinity , Infinity)
}

function validate(node , min , max){
    if(!node){
        return true
    }

    if(node.value <= min || node.value >= max){
        return false
    }

    return (validate(node.left , min , node.value) && validate(node.right, node.value, max))
}

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(20);

console.log(isValidBst(root));