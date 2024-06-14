

const arr = [1,5,3,6,3,22,4,5,9]

function insertionSort(arr){
    for(let i = 1;i<arr.length; i++){
        let curr = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>curr){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = curr
    }
}

insertionSort(arr)
console.log(arr)
