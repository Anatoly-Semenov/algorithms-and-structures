const array: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let iterations: number = 0

function binarySearch(array: number[], item: number): number {
    let start: number = 0
    let end: number = array.length
    let middle: number
    let found: boolean = false
    let position: number = -1

    while (found === false && start <= end) {
        iterations+=1

        middle = Math.floor((start + end) / 2);

        if (array[middle] === item) {
            found = true
            position = middle
            return position;
        }

        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

console.log(binarySearch(array,8))
console.log(iterations)
