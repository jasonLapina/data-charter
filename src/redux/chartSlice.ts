import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartState, ChartType, ChartData } from '../types/chartTypes';

const initialState: ChartState = {
  selectedChartType: null,
  chartData: [],
  step: 'selection',
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    selectChartType: (state, action: PayloadAction<ChartType>) => {
      state.selectedChartType = action.payload;
      state.step = 'input';
    },
    setChartData: (state, action: PayloadAction<ChartData[]>) => {
      state.chartData = action.payload;
      state.step = 'visualization';
    },
    resetToSelection: (state) => {
      state.selectedChartType = null;
      state.chartData = [];
      state.step = 'selection';
    },
    goBack: (state) => {
      if (state.step === 'visualization') {
        state.step = 'input';
      } else if (state.step === 'input') {
        state.step = 'selection';
        state.selectedChartType = null;
      }
    },
  },
});

export const { selectChartType, setChartData, resetToSelection, goBack } = chartSlice.actions;
export default chartSlice.reducer;