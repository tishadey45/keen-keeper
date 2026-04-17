"use client";

import { useEffect, useState } from "react";
import { Pie, PieChart, Cell, Tooltip } from "recharts";

export default function StatsPage({ isAnimationActive = true }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("friendEntries")) || [];
    setHistory(data);
  }, []);

  // count
  const callCount = history.filter(item => item.type === "call").length;
  const textCount = history.filter(item => item.type === "text").length;
  const videoCount = history.filter(item => item.type === "video").length;

  const chartData = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  // 🎨 colors
  const COLORS = ["#22c55e", "#3b82f6", "#a855f7"]; // green, blue, purple

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 text-center">
      
      <h1 className="text-4xl font-bold mb-8">
        Friendship Analytics
      </h1>

      {/* Chart */}
      <div className="flex justify-center">
        <PieChart width={350} height={350}>
          <Pie
            data={chartData}
            innerRadius={90}
            outerRadius={130}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={isAnimationActive}
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </div>

      {/* 🔥 Legend */}
      <div className="mt-8 flex gap-4 space-y-3 text-left max-w-xs mx-auto">
        
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-green-500"></span>
          <p>Call ({callCount})</p>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-blue-500"></span>
          <p>Text ({textCount})</p>
        </div>

        <div className="flex items-center gap-1 -mt-2.5">
          <span className="w-4 h-4 rounded-full bg-purple-500"></span>
          <p>Video ({videoCount})</p>
        </div>

      </div>
    </div>
  );
}