import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'X', value: 100000 },
    { name: 'Instagram', value: 500000 },
    { name: 'Tiktok', value: 2000000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const CreatorPieChart = () => {
    return (
        <PieChart width={400} height={400} className="pie-chart">
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default CreatorPieChart;
