export type ChartType = 'pie' | 'bar' | 'line' | 'area';

export interface ChartData {
  label: string;
  value: number;
}

export interface ChartState {
  selectedChartType: ChartType | null;
  chartData: ChartData[];
  step: 'selection' | 'input' | 'visualization';
}