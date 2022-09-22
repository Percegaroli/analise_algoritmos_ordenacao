import { differenceInMilliseconds } from "date-fns";
import { SAMPLES } from "./generateSample";
import { heapSort } from "./sortAlrorithms/heapSort";
import { insertionSort } from "./sortAlrorithms/insertionSort";
import { mergeSort } from "./sortAlrorithms/mergeSort";
import { quickSort } from "./sortAlrorithms/quickSort";
import { selectionSort } from "./sortAlrorithms/selectionSort";

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
        implemented: false,
    },
    {
        name: 'SelectioSort',
        sortFn: selectionSort,
        implemented: false,
    },
    {
        name: 'MergeSort',
        sortFn: mergeSort,
        implemented: true
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
        results: SAMPLES.map(sampleGroup => ({
            quantity: sampleGroup[0].length,
            'durations(ms)': sampleGroup.map(sample => getOrdenationTimeInMiliseconds(sample, sortFn))
        }))
    }))
    .forEach(({ name, results}) => {
        console.log(`Algoritmo: ${name}`);
        console.table(results);
    })
 