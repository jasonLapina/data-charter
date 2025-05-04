import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ChartData } from '../../types/chartTypes';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

interface PieChartComponentProps {
  data: ChartData[];
  isPreview?: boolean;
}

const PieChartComponent = ({ data, isPreview = false }: PieChartComponentProps) => {
  const height = isPreview ? 200 : 400;

  return (
    <div className={isPreview ? 'chart-preview' : 'chart-container'}>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={!isPreview}
            label={!isPreview ? ({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)` : false}
            outerRadius={isPreview ? 60 : 120}
            fill="#8884d8"
            dataKey="value"
            nameKey="label"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          {!isPreview && <Tooltip formatter={(value) => `${value}`} />}
          {!isPreview && <Legend />}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
