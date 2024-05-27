import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './PieChartBox.css';

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/items')
    .then(res => res.json)
    .then(data => setItems(data));
  }, []);

  function renderItems() {
    return items.map((item, keyIndex) => {
      return (
        <div key = {keyIndex}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      );
    });
  }

  return (
    <Link to="/networth" style={{ textDecoration: 'none' }}> {/* Wrap the component in Link */}
      <div className="pieChartBox">
        <h1>Leads by Source</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
              <Pie data={data} innerRadius="70%" outerRadius="90%" paddingAngle={5} dataKey="value">
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="options">
          {data.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PieChartBox;
