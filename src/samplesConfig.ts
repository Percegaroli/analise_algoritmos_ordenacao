export interface SampleConfig {
    samplesQuantity: number;
    maxValue: number;
    quantityPerSample: number;
}

export const DEFAULT_SAMPLE_CONFIG: Omit<SampleConfig, 'samplesQuantity'> = {
    maxValue: 1000000,
    quantityPerSample: 20
}