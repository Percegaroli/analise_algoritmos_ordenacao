import { swapNumbersInArray } from "../utils/swapNumbersInArray";

export const selectionSort = (numbers: Array<number>) => {
    if ([0, 1].includes(numbers.length)) return [...numbers];
    for (let index = 0; index < numbers.length; index++){
        let lowestIndex = index
        for(let indexJ = index + 1; indexJ < numbers.length; indexJ++){
            if (numbers[indexJ] < numbers[lowestIndex]) lowestIndex = indexJ;
        }
        swapNumbersInArray(numbers, [lowestIndex, index]);
    }
    return numbers;
}