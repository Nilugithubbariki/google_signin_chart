"use client";
import EChartsReact from "echarts-for-react";
import React from "react";

const LineChartView = () => {
  const lineChartData = {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    series: [
      {
        name: "Series A",
        data: [150, 220, 320, 180, 280],
      },
      {
        name: "Series B",
        data: [80, 160, 240, 120, 200],
      },
    ],
  };

  const lineChartOption = {
    title: {
      text: "Line Chart",
    },
    xAxis: {
      type: "category",
      data: lineChartData.categories,
    },
    yAxis: {
      type: "value",
    },
    series: lineChartData.series.map((series) => ({
      name: series.name,
      type: "line",
      data: series.data,
    })),
  };

  return (
    <div>
      <EChartsReact option={lineChartOption} style={{ height: "400px" }} />
    </div>
  );
};

export default LineChartView;
