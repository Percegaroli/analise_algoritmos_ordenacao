import { differenceInMilliseconds } from "date-fns";
import { SAMPLES } from "./generateSample";
import { heapSort } from "./sortAlrorithms/heapSort";
import { insertionSort } from "./sortAlrorithms/insertionSort";
import { mergeSort } from "./sortAlrorithms/mergeSort";
import { quickSort } from "./sortAlrorithms/quickSort";
import { selectionSort } from "./sortAlrorithms/selectionSort";
import { calculateArrayMean } from "./utils/calculateArrayMean";

type OrdenationFn = (numbers: Array<number>) => Array<number>

const ordenationFunctions = [
    {
        name: 'InsertionSort',
        sortFn: insertionSort,
        implemented: false,
    },
    {
        name: 'HeapSort',
        sortFn: heapSort,
        implemented: false
    },
    {
        name: 'QuickSort',
        sortFn: quickSort,
        implemented: true,
    },
    {
        name: 'SelectioSort',
        sortFn: selectionSort,
        implemented: false,
    },
    {
        name: 'MergeSort',
        sortFn: mergeSort,
        implemented: false
    },
]

const getOrdenationTimeInMiliseconds = (numbers: Array<number>, ordenationFn: OrdenationFn) => {
    const initialTime = new Date();
    const orderedArray = ordenationFn([...numbers]);
    const finalTime = new Date();
    const correctSort = [...numbers].sort((a, b) => a - b);
    if (!correctSort.every((number, index) => number === orderedArray[index])){
        throw new Error('Ordenação incorreta');
    }
    return differenceInMilliseconds(finalTime, initialTime)
}

ordenationFunctions
    .filter(({implemented}) => implemented)
    .map(({ sortFn, name, }) => ({
        name,
        results: SAMPLES.map(sampleGroup => {
            const durations = sampleGroup.map(sample => getOrdenationTimeInMiliseconds(sample, sortFn))
            return {
                quantity: sampleGroup[0].length,
                mean: calculateArrayMean(durations),
                'durations(ms)': durations,
            }}
        )
    }))
    .forEach(({ name, results}) => {
        console.log(`Algoritmo: ${name}`);
        console.table(results);
    })
 