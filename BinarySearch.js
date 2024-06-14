function binarySearch(target, arr) {
    return search(target, arr, 0, arr.length - 1);
}

function search(target, arr, left, right) {
    if (left > right) {
        return false;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return true;
    } else if (arr[mid] < target) {
        return search(target, arr, mid + 1, right); 
    } else {
        return search(target, arr, left, mid - 1); 
    }
}