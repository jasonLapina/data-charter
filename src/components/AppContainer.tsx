import { Box } from '@mui/material';
import { useAppSelector } from '../redux/hooks';
import ChartTypeSelection from './ChartTypeSelection';
import ChartDataInput from './ChartDataInput';
import ChartVisualization from './ChartVisualization';

const AppContainer = () => {
  const { step } = useAppSelector(state => state.chart);

  const renderStep = () => {
    switch (step) {
      case 'selection':
        return <ChartTypeSelection />;
      case 'input':
        return <ChartDataInput />;
      case 'visualization':
        return <ChartVisualization />;
      default:
        return <ChartTypeSelection />;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      {renderStep()}
    </Box>
  );
};

export default AppContainer;