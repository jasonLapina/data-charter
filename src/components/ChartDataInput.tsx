import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  IconButton, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setChartData, goBack } from '../redux/chartSlice';
import { ChartData, ChartType } from '../types/chartTypes';

const getChartTypeLabel = (type: ChartType): string => {
  switch (type) {
    case 'pie': return 'Pie Chart';
    case 'bar': return 'Bar Chart';
    case 'line': return 'Line Chart';
    case 'area': return 'Area Chart';
    default: return 'Chart';
  }
};

const getDefaultLabel = (type: ChartType, index: number): string => {
  switch (type) {
    case 'pie': return `Category ${index + 1}`;
    case 'bar': return `Item ${index + 1}`;
    case 'line':
    case 'area': return `Point ${index + 1}`;
    default: return `Item ${index + 1}`;
  }
};

const ChartDataInput = () => {
  const dispatch = useAppDispatch();
  const selectedChartType = useAppSelector(state => state.chart.selectedChartType);
  
  const [chartData, setLocalChartData] = useState<ChartData[]>([
    { label: getDefaultLabel(selectedChartType as ChartType, 0), value: 0 },
    { label: getDefaultLabel(selectedChartType as ChartType, 1), value: 0 }
  ]);
  
  const [error, setError] = useState<string | null>(null);

  const handleAddRow = () => {
    setLocalChartData([
      ...chartData,
      { label: getDefaultLabel(selectedChartType as ChartType, chartData.length), value: 0 }
    ]);
  };

  const handleRemoveRow = (index: number) => {
    if (chartData.length <= 2) {
      setError('You need at least 2 data points');
      return;
    }
    setError(null);
    setLocalChartData(chartData.filter((_, i) => i !== index));
  };

  const handleLabelChange = (index: number, value: string) => {
    const newData = [...chartData];
    newData[index].label = value;
    setLocalChartData(newData);
  };

  const handleValueChange = (index: number, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    
    const newData = [...chartData];
    newData[index].value = numValue;
    setLocalChartData(newData);
  };

  const handleSubmit = () => {
    // Validate data
    if (chartData.some(item => item.label.trim() === '')) {
      setError('All labels must be filled');
      return;
    }
    
    if (chartData.length < 2) {
      setError('You need at least 2 data points');
      return;
    }
    
    setError(null);
    dispatch(setChartData(chartData));
  };

  const handleBack = () => {
    dispatch(goBack());
  };

  if (!selectedChartType) return null;

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Enter Data for {getChartTypeLabel(selectedChartType)}
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Add labels and values for your chart. You can add or remove rows as needed.
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Value</TableCell>
              <TableCell width="50px"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chartData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    fullWidth
                    value={row.label}
                    onChange={(e) => handleLabelChange(index, e.target.value)}
                    placeholder="Enter label"
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={row.value}
                    onChange={(e) => handleValueChange(index, e.target.value)}
                    placeholder="Enter value"
                    variant="outlined"
                    size="small"
                    type="number"
                  />
                </TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => handleRemoveRow(index)}
                    color="error"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button 
        startIcon={<AddIcon />} 
        onClick={handleAddRow} 
        variant="outlined" 
        sx={{ mb: 3 }}
      >
        Add Row
      </Button>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Create Chart
        </Button>
      </Stack>
    </Box>
  );
};

export default ChartDataInput;