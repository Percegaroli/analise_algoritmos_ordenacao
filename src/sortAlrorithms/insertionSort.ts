import { swapNumbersInArray } from "../utils/swapNumbersInArray";

export const insertionSort = (numbers: Array<number>) => {
    const numbersCopy = [...numbers];
    if ([0, 1].includes(numbersCopy.length)) return numbersCopy;
    for (let index = 1, sortedSubarraySize = 1, lastSortedIndex = 0; index < numbersCopy.length; index++, sortedSubarraySize++, lastSortedIndex = sortedSubarraySize - 1){
        if (numbersCopy[index] < numbersCopy[lastSortedIndex]){
            swapNumbersInArray(numbersCopy, [index, lastSortedIndex]);
            let shouldContinue = Boolean(lastSortedIndex);
            while(shouldContinue){
                if (numbersCopy[lastSortedIndex] < numbersCopy[lastSortedIndex - 1]){
                    swapNumbersInArray(numbersCopy, [lastSortedIndex, lastSortedIndex - 1]);
                    lastSortedIndex--;
                    shouldContinue = Boolean(lastSortedIndex);
                }
                else shouldContinue = false;
            }
        }
    }
    return numbersCopy;
}