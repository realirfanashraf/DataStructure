const arr = [4,2,6,7,3,2,1]

function selectionSort(arr){
   for(let i = 1 ; i < arr.length ; i++){
    let curr = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>curr){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = curr
   }
}

selectionSort(arr)
console.log(arr)