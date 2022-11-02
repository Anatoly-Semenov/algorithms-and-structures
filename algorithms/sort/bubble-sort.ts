const arr: number[] = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32]
let iterations: number = 0

function bubbleSort(array) {
    for (let parent: number = 0; parent < array.length; parent++) {
        for (let child: number = 0; child < array.length; child++) {
            if (array[child + 1] < array[child]) {
                let value: number = array[child]

                array[child] = array[child + 1]
                array[child + 1] = value
            }

            iterations++
        }
    }
    return array
}

console.log(bubbleSort(arr)) // O(n*n)
console.log('iterations = ', iterations)
