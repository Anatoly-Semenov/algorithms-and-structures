const array: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let iterations: number = 0

function recursiveBinarySearch(array: number[], item: number, start: number, end: number): number {
    let middle: number = Math.floor((start + end) / 2);

    iterations += 1

    if (item === array[middle]) {
        return middle
    }

    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

console.log(recursiveBinarySearch(array, 0, 0, array.length))
console.log(iterations)
