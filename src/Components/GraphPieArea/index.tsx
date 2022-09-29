import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: any;
}
const GraphPieArea = (Props: Props) => {
  return <Pie data={Props.data} />;
}

export default GraphPieArea;
