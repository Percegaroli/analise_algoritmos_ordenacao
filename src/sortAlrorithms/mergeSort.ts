export const mergeSort = (numbers: Array<number>) => {
    return mergeSortRecursive(numbers);
}

const mergeSortRecursive = (numbers: Array<number>): Array<number> => {
    if (numbers.length === 1) return numbers;
    const half = Math.ceil(numbers.length / 2)
    const firstHalfSorted = mergeSortRecursive(numbers.slice(0, half));
    const secondHalfSorted = mergeSortRecursive(numbers.slice(half));
    return mergeSortedArrays(firstHalfSorted, secondHalfSorted);
}

const mergeSortedArrays = (left: Array<number>, right: Array<number>) => {
    const results: Array<number> = []
    for (let indexI = 0, indexJ = 0; indexI < left.length || indexJ < right.length; null){
        if (indexJ === right.length){
            results.push(left[indexI]);
            indexI++;
        } 
        else if (indexI === left.length){
            results.push(right[indexJ]);
            indexJ++;
        }
        else if (left[indexI] < right[indexJ]){
            results.push(left[indexI]);
            indexI++;
        }
        else {
            results.push(right[indexJ]);
            indexJ++;
        }
    }
    return results;
}