export const calculateArrayMean = (numbers: Array<number>) => {
    if (!numbers.length) return 0;
    return numbers.reduce((accumulator, current) => accumulator + current , 0) / numbers.length
}