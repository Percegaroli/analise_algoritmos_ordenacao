import { swapNumbersInArray } from "../utils/swapNumbersInArray";

export const quickSort = (numbers: Array<number>) => {
    if ([0, 1].includes(numbers.length)) return [...numbers];
    return quickSortRecursive(numbers, 0, numbers.length - 1);
}

const quickSortRecursive = (numbers: Array<number>, leftIndex: number, rightIndex: number) => {
    if(leftIndex < rightIndex){
        let pivotIndex = leftIndex;
        const pivot = numbers[pivotIndex];
        let indexLastChanged = -1;
        for (let indexI = pivotIndex + 1; indexI <= rightIndex; indexI++){
            if (numbers[indexI] < pivot){
                if (indexLastChanged === -1){
                    indexLastChanged = pivotIndex + 1;
                } else {
                    indexLastChanged++;
                }
                swapNumbersInArray(numbers, [indexLastChanged, indexI]);
            }
        }
        if (indexLastChanged !== -1) {
            swapNumbersInArray(numbers, [pivotIndex, indexLastChanged]);
            pivotIndex = indexLastChanged;
        }
        quickSortRecursive(numbers, leftIndex, pivotIndex - 1);
        quickSortRecursive(numbers, pivotIndex + 1, rightIndex);
    }
    return numbers;
}