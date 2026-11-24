import { PageTitle } from "../styling/styles";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Rent & Bills", value: 1850, fill: "#2563eb" },
  { name: "Groceries", value: 620, fill: "#16a34a" },
  { name: "Savings", value: 750, fill: "#7c3aed" },
];

const Stats = () => {
  return (
    <>
      <PageTitle>STATS</PageTitle>
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              isAnimationActive={false}
              label
            />
            <Tooltip formatter={(value) => `$${value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Stats;
