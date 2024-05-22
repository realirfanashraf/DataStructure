class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function sortedArrayToBST(arr){
    if(arr.length === 0){
        return null
    }
    return buildBST(arr , 0 , arr.length-1)
}

function buildBST(arr , start , end){
    if(start > end){
        return null
    }

    const mid = Math.floor((start+end)/2)
    const node = new Node(arr[mid])
    node.left = buildBST(arr, start, mid-1)
    node.right = buildBST(arr, mid+1, end)
    return node
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const bstRoot = sortedArrayToBST(sortedArray);

console.log(bstRoot);