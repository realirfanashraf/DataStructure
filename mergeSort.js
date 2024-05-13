const arr = [1,235,6,7,47,8,3,2]

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor((arr.length)/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArray,rightArray){
    let sortedArray = []
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            sortedArray.push(leftArray.shift())
        }else{
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}

console.log(mergeSort(arr))