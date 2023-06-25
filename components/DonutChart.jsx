import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DonutChart = (props) => {
  return (
    <div style={{ height: 300, width: 300 }}>
      <Doughnut data={props.data} />
    </div>
  );
};

export default DonutChart;
