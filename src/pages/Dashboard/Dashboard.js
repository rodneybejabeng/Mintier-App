import React from 'react';
import BarChartBox from "../../components/BarChartBox/BarChartBox";
import BigChartBox from "../../components/BigChartBox/BigChartBox";
import ChartBox from "../../components/ChartBox/ChartBox";
import PieChartBox from "../../components/PieChartBox/PieChartBox";
import TopBox from "../../components/TopBox/TopBox";
// import {
//   barChartBoxRevenue,
//   barChartBoxVisit,
//   chartBoxConversion,
//   chartBoxProduct,
//   chartBoxRevenue,
//   chartBoxUser,
// } from "../../data";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="box box1"><TopBox /></div>
      {/* <div className="box box2"><ChartBox {...chartBoxUser} /></div> */}
      <div className="box box3"><ChartBox /></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5"><ChartBox  /></div>
      <div className="box box6"><ChartBox  /></div>
      <div className="box box7"><BigChartBox /></div>
      <div className="box box8"><BarChartBox  /></div>
      <div className="box box9"><BarChartBox  /></div>
    </div>
  );
};

export default Dashboard;
