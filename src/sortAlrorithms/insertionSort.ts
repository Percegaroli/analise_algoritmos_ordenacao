export const insertionSort = (numbers: Array<number>) => {
    const numbersCopy = [...numbers];
    if ([0, 1].includes(numbersCopy.length)) return numbersCopy;
    for (let index = 1; index < numbersCopy.length; index++){
        let indexToInsert = -1;
        for(let indexJ = index - 1; indexJ >= 0 && numbersCopy[index] < numbersCopy[indexJ]; indexJ--){
            indexToInsert = indexJ;
        }
        if (indexToInsert !== -1) insert(index, indexToInsert, numbersCopy);
    }
    return numbersCopy;
}

const insert = (originIndex: number, destinationIndex: number, numbers: Array<number>) => {
    const temp = numbers[originIndex];
    for(let index = originIndex; index > destinationIndex; index--){
        numbers[index] = numbers[index - 1];
    }
    numbers[destinationIndex] = temp;
}