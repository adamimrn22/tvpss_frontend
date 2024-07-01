import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';

const data = [
  { day: 1, admin: 2, editor: 3, viewer: 1 },
  { day: 2, admin: 5, editor: 2, viewer: 3 },
  { day: 3, admin: 3, editor: 4, viewer: 2 }
];

const LineChartComponent = () => {
  return <LineChart width={800} height={400} series={[]}></LineChart>;
};

export default LineChartComponent;
