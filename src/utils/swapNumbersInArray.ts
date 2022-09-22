export const swapNumbersInArray = (numbers: Array<number>, indexes: [number, number]) => {
    const temp = numbers[indexes[0]];
    numbers[indexes[0]] = numbers[indexes[1]];
    numbers[indexes[1]] = temp;
}