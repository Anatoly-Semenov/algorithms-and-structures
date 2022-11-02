const array: number[] = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32]
let iterations: number = 0

function selectionSort(_array: number[]): number[] {
    for (let parent: number = 0; parent < _array.length; parent++) {

        let indexMin: number = parent

        for (let child: number = parent+1; child < _array.length; child++) {
            if (_array[child] < _array[indexMin]) {
                indexMin = child
            }
            iterations += 1
        }

        let value: number = _array[parent]

        _array[parent] = _array[indexMin]
        _array[indexMin] = value
    }
    return _array
}

console.log(selectionSort(array))
console.log('iterations = ', iterations)
