import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types/chartTypes';

interface BarChartComponentProps {
  data: ChartData[];
  isPreview?: boolean;
}

const BarChartComponent = ({ data, isPreview = false }: BarChartComponentProps) => {
  const height = isPreview ? 200 : 400;

  return (
    <div className={isPreview ? 'chart-preview' : 'chart-container'}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
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
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
