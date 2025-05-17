import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChartComponent = ({ data }) => {
  const performanceData = data.map(score => ({
    name: `Test ${data.indexOf(score) + 1}`,
    value: score
  }));

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#FF7373', '#8884d8'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={performanceData}
        dataKey="value"
        nameKey="name"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {performanceData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
