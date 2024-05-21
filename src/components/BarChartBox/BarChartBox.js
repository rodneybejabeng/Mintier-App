import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BarChartBox.css';

const BarChartBox = ({ title, color, dataKey, chartData }) => {
  return (
    <Link to="/expenses" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Wrap in Link */}
      <div className="barChartBox">
        <h1>{title}</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height={150}>
            <BarChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                labelStyle={{ display: "none" }}
                cursor={{ fill: "none" }}
              />
              <Bar dataKey={dataKey} fill={color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Link>
  );
};

export default BarChartBox;
