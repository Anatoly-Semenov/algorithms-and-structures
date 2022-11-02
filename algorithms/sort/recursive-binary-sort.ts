const array: number[] = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32]
let iterations: number = 0

function recursiveBinarySort(_array): number[] {
    if (_array.length <= 1) {
        return _array
    }

    let pivotIndex: number = Math.floor(_array.length / 2);
    let pivot: number = _array[pivotIndex]
    let less: number[] = []
    let greater: number[] = []

    for (let item = 0; item < _array.length; item++) {
        iterations++

        if(item === pivotIndex)
            continue
        if (_array[item] < pivot) {
            less.push(_array[item])
        } else {
            greater.push(_array[item])
        }
    }
    return [...recursiveBinarySort(less), pivot, ...recursiveBinarySort(greater)]
}

console.log(recursiveBinarySort(array))
console.log('iterations', iterations)
