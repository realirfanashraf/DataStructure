const arr = [5,2,12,5,1,4,5,76];

function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let leftArray = [];
    let rightArray = [];
    let pivot = arr[arr.length - 1];
    
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort(arr));
