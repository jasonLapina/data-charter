import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { resetToSelection, goBack } from '../redux/chartSlice';
import PieChartComponent from './charts/PieChartComponent';
import BarChartComponent from './charts/BarChartComponent';
import LineChartComponent from './charts/LineChartComponent';
import AreaChartComponent from './charts/AreaChartComponent';

const getChartTypeLabel = (type: string): string => {
  switch (type) {
    case 'pie': return 'Pie Chart';
    case 'bar': return 'Bar Chart';
    case 'line': return 'Line Chart';
    case 'area': return 'Area Chart';
    default: return 'Chart';
  }
};

const ChartVisualization = () => {
  const dispatch = useAppDispatch();
  const { selectedChartType, chartData } = useAppSelector(state => state.chart);

  const handleBack = () => {
    dispatch(goBack());
  };

  const handleReset = () => {
    dispatch(resetToSelection());
  };

  if (!selectedChartType || chartData.length === 0) return null;

  const renderChart = () => {
    switch (selectedChartType) {
      case 'pie':
        return <PieChartComponent data={chartData} />;
      case 'bar':
        return <BarChartComponent data={chartData} />;
      case 'line':
        return <LineChartComponent data={chartData} />;
      case 'area':
        return <AreaChartComponent data={chartData} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {getChartTypeLabel(selectedChartType)} Visualization
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ height: 500 }}>
          {renderChart()}
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Data Summary:
      </Typography>
      
      <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
        <Box component="ul" sx={{ pl: 2 }}>
          {chartData.map((item, index) => (
            <Box component="li" key={index} sx={{ mb: 1 }}>
              <Typography>
                <strong>{item.label}:</strong> {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" onClick={handleBack}>
          Edit Data
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Create New Chart
        </Button>
      </Stack>
    </Box>
  );
};

export default ChartVisualization;