import React from "react";
import moment from "moment";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Graph = ({ chartPrices }) => {
  const startUnixTimestamp = moment().subtract(7, "days").unix();
  const data = chartPrices?.map((item, index) => ({
    name: moment.unix(startUnixTimestamp + (index + 1) * 3600).format("MM-DD HH:mm"),
    price: item,
    amt: item,
  }));

  let previousValue = chartPrices[0]; // Initialize with the first value
  const colors = chartPrices.map((currentValue) => {
    const color = currentValue >= previousValue ? "green" : "red";
    previousValue = currentValue; // Update previous value
    return color;
  });

  const tooltipFormatter = (value) => value.toFixed(2);

  const minY = Math.min(...chartPrices);
  const maxY = Math.max(...chartPrices);

  return (
    <LineChart width={800} height={370} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[minY, maxY]} />
      <Tooltip formatter={tooltipFormatter} />
      {data.map((entry, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey="price"
          stroke={colors[index]}
          strokeWidth={3}
          dot={false}
          isAnimationActive={false}
        />
      ))}
    </LineChart>
  );
};

export default Graph;
