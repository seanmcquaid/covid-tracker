import { ResponsiveBar } from '@nivo/bar';

type ChartProps = {
  data: any[];
};

const Chart: React.FC<ChartProps> = ({ data }) => {
  // link to docs - https://nivo.rocks/bar
  return <ResponsiveBar data={data}></ResponsiveBar>;
};

export default Chart;
