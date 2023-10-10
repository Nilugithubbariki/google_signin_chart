"use client";
import EChartsReact from "echarts-for-react";
import React from "react";

const BarChartView = () => {
  const barChartData = {
    categories: ["Category A", "Category B", "Category C", "Category D"],
    data: [250, 180, 320, 200],
  };

  const barChartOption = {
    title: {
      text: "Bar Chart",
    },
    xAxis: {
      type: "category",
      data: barChartData.categories,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Series A",
        type: "bar",
        data: barChartData.data,
      },
    ],
  };

  return (
    <div>
      <EChartsReact option={barChartOption} style={{ height: "400px" }} />
    </div>
  );
};

export default BarChartView;
