// Implement a function called bubbleSort.
// Given an array, bubbleSort will sort the values in the array.
// Bubble sort is an O(n^2) algorithm

function bubbleSort(arr) {
    for (let i=0; i<arr.length; i++) {
        // last i elements are already in place
        for (let j=0; j<(arr.length-i-1); j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;

