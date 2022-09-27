import { DEFAULT_SAMPLE_CONFIG, SampleConfig } from "./samplesConfig";

const generateSamples = ({ maxValue, samplesQuantity}: Omit<SampleConfig, 'quantityPerSample'>) => {
    return new Array(samplesQuantity)
        .fill(undefined)
        .map(() => Math.ceil(Math.random() * maxValue))
}

const generateMultipleSamples = ({ samplesQuantity, maxValue, quantityPerSample }: SampleConfig) => {
    return new Array(quantityPerSample)
        .fill(undefined)
        .map(() => generateSamples({samplesQuantity, maxValue}))
} 

export const SAMPLES = Array(20)
    .fill(undefined)
    .map((_, index) => generateMultipleSamples({...DEFAULT_SAMPLE_CONFIG, samplesQuantity: Math.pow(2, index + 1 )}))