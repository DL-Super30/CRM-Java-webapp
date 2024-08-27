"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    leads: 4000,
    opportunities: 2400,
  },
  {
    name: "Feb",
    leads: 3000,
    opportunities: 1398,
  },
  {
    name: "Mar",
    leads: 2000,
    opportunities: 9800,
  },
  {
    name: "Apr",
    leads: 2780,
    opportunities: 3908,
  },
  {
    name: "May",
    leads: 1890,
    opportunities: 4800,
  },
  {
    name: "Jun",
    leads: 2390,
    opportunities: 3800,
  },
  {
    name: "Jul",
    leads: 3490,
    opportunities: 4300,
  },
  {
    name: "Aug",
    leads: 4000,
    opportunities: 2400,
  },
  {
    name: "Sep",
    leads: 3000,
    opportunities: 1398,
  },
  {
    name: "Oct",
    leads: 2000,
    opportunities: 9800,
  },
  {
    name: "Nov",
    leads: 2780,
    opportunities: 3908,
  },
  {
    name: "Dec",
    leads: 1890,
    opportunities: 4800,
  },
];

const FinanceChart = () => {
  return (
    <div className="relative bg-white rounded-xl w-full h-full p-4">
      {/* TITLRE */}
      <div className=" flex justify-between items-center">
        <h1 className="font-semibold text-lg">Leads vs Opportunities</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART  */}
      <div className=" w-full h-full">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={20}
            />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#FAE27C"
              strokeWidth={5}
            />
            <Line
              type="monotone"
              dataKey="opportunities"
              stroke="#C3EBFA"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
