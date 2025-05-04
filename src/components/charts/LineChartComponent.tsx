import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types/chartTypes';

interface LineChartComponentProps {
  data: ChartData[];
  isPreview?: boolean;
}

const LineChartComponent = ({ data, isPreview = false }: LineChartComponentProps) => {
  const height = isPreview ? 200 : 400;

  return (
    <div className={isPreview ? 'chart-preview' : 'chart-container'}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data.map(item => ({ name: item.label, value: item.value }))}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {!isPreview && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" tick={{ fontSize: isPreview ? 10 : 14 }} />
          {!isPreview && <YAxis />}
          {!isPreview && <Tooltip />}
          {!isPreview && <Legend />}
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
