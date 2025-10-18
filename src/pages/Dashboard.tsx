import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { TrendingUp, TrendingDown, Wallet, Receipt } from "lucide-react";

const Dashboard = () => {
  const [monthlyExpenses] = useState([
    { name: "Food", value: 450, color: "hsl(220, 70%, 28%)" },
    { name: "Transport", value: 230, color: "hsl(220, 60%, 50%)" },
    { name: "Utilities", value: 340, color: "hsl(220, 75%, 20%)" },
    { name: "Entertainment", value: 180, color: "hsl(220, 70%, 65%)" },
    { name: "Housing", value: 1200, color: "hsl(220, 80%, 15%)" },
  ]);

  const [weeklyData] = useState([
    { day: "Mon", amount: 85 },
    { day: "Tue", amount: 120 },
    { day: "Wed", amount: 95 },
    { day: "Thu", amount: 140 },
    { day: "Fri", amount: 180 },
    { day: "Sat", amount: 210 },
    { day: "Sun", amount: 160 },
  ]);

  const totalExpenses = monthlyExpenses.reduce((acc, curr) => acc + curr.value, 0);
  const monthlyBudget = 3000;
  const remaining = monthlyBudget - totalExpenses;

  return (
    <div className="min-h-screen p-4 pb-24">
      {/* Header */}
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Track your expenses at a glance</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6 animate-slide-up">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wallet className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">Total Spent</span>
            </div>
            <p className="text-2xl font-bold text-foreground">${totalExpenses}</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-destructive" />
              <span className="text-xs text-destructive">+12% this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Receipt className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">Remaining</span>
            </div>
            <p className="text-2xl font-bold text-foreground">${remaining}</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingDown className="w-3 h-3 text-primary" />
              <span className="text-xs text-primary">of ${monthlyBudget}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expense Breakdown Pie Chart */}
      <Card className="mb-6 shadow-card animate-scale-in">
        <CardHeader>
          <CardTitle className="text-lg">Expense Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={monthlyExpenses}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {monthlyExpenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {monthlyExpenses.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-muted-foreground">
                  {item.name}: ${item.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Spending Chart */}
      <Card className="shadow-card animate-scale-in">
        <CardHeader>
          <CardTitle className="text-lg">This Week's Spending</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
