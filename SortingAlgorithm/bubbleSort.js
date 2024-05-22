const arr = [1,5,2,6,47,8,3,10]

function bubbleSort(arr){
    let swapped; 
    do{
        let swapped = false
        for(let i = 0; i<arr.length;i++){
            if(arr[i+1] < arr[i]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
}

bubbleSort(arr)
console.log(arr)