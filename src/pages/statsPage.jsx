import { PageTitle } from "../styling/styles";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const expenseBreakdown = [
  { name: "Rent & Bills", value: 1850, fill: "#2563eb" },
  { name: "Groceries", value: 620, fill: "#16a34a" },
  { name: "Savings", value: 750, fill: "#7c3aed" },
  { name: "Transport", value: 310, fill: "#d97706" },
];

const monthlyCashflow = [
  { month: "Jan", revenue: 4200, expenses: 2400 },
  { month: "Feb", revenue: 4800, expenses: 2650 },
  { month: "Mar", revenue: 5100, expenses: 2900 },
  { month: "Apr", revenue: 4650, expenses: 2500 },
];

const Stats = () => {
  return (
    <>
      <PageTitle>STATS</PageTitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          alignItems: "center",
        }}
      >
        <PieChart
          responsive
          style={{ width: "100%", maxHeight: 340, aspectRatio: 1 }}
        >
          <Pie
            data={expenseBreakdown}
            dataKey="value"
            nameKey="name"
            outerRadius="80%"
            isAnimationActive={false}
            label
          />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
        </PieChart>
      </div>
      <BarChart
        responsive
        data={monthlyCashflow}
        style={{ width: "100%", maxHeight: 340, aspectRatio: 1.618 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis width="auto" />
        <Tooltip formatter={(value) => `$${value}`} />
        <Legend />
        <Bar
          dataKey="revenue"
          name="Revenue"
          fill="#2563eb"
          radius={[6, 6, 0, 0]}
          isAnimationActive={false}
        />
        <Bar
          dataKey="expenses"
          name="Expenses"
          fill="#d97706"
          radius={[6, 6, 0, 0]}
          isAnimationActive={false}
        />
      </BarChart>
    </>
  );
};

export default Stats;
