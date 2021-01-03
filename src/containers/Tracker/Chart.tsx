import { LineChart, Line } from 'recharts';

type ChartProps = {
  data: any[];
};

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export default Chart;
