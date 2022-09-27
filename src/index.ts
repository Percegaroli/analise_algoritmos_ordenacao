import { differenceInMilliseconds } from "date-fns";
import { stdev } from 'stats-lite'
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
        implemented: true
    },
    {
        name: 'QuickSort',
        sortFn: quickSort,
        implemented: true,
    },
    {
        name: 'SelectioSort',
        sortFn: selectionSort,
        implemented: true,
    },
    {
        name: 'MergeSort',
        sortFn: mergeSort,
        implemented: true
    },
]

const getOrdenationTimeInMiliseconds = (numbers: Array<number>, ordenationFn: OrdenationFn) => {
    const initialTime = new Date();
    ordenationFn([...numbers]);
    const finalTime = new Date();
    return differenceInMilliseconds(finalTime, initialTime)
}

ordenationFunctions
    .filter(({implemented}) => implemented)
    .map(({ sortFn, name, }) => ({
        name,
        results: SAMPLES.map(sampleGroup => {
            const durations = sampleGroup.map(sample => getOrdenationTimeInMiliseconds(sample, sortFn))
            return {
                'tamanho arrays': sampleGroup[0].length,
                'tempo medio ordenacao (ms)': calculateArrayMean(durations),
                'desvio padrao': stdev(durations) 
            }}
        )
    }))
    .forEach(({ name, results}) => {
        console.log(`Algoritmo: ${name}`);
        console.table(results);
    })
 