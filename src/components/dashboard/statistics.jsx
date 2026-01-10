"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Statistics() {
  // ✅ Define the chart data for each month
  const chartData = {
    january: [
      { name: "Cremation", value: 40, fill: "#124395" },
      { name: "Urn Burial", value: 30, fill: "#526587" },
      { name: "Burial of Body", value: 30, fill: "#9DABC4" },
    ],
    february: [
      { name: "Cremation", value: 20, fill: "#124395" },
      { name: "Urn Burial", value: 50, fill: "#526587" },
      { name: "Burial of Body", value: 30, fill: "#9DABC4" },
    ],
    march: [
      { name: "Cremation", value: 25, fill: "#124395" },
      { name: "Urn Burial", value: 25, fill: "#526587" },
      { name: "Burial of Body", value: 50, fill: "#9DABC4" },
    ],
  };

  // ✅ Dropdown options
  const months = ["january", "february", "march"];

  // ✅ State for selected month
  const [activeMonth, setActiveMonth] = React.useState("january");

  // ✅ Active dataset for selected month
  const activeData = chartData[activeMonth];

  // ✅ Chart config (for tooltip & legend)
   const chartConfig = {
    cremation: { label: "Cremation", color: "#124395" },
    urnBurial: { label: "Urn Burial", color: "#526587" },
    burialOfBody: { label: "Burial of Body", color: "#9DABC4" },
    january: { label: "January" },
    february: { label: "February" },
    march: { label: "March" },
  };

  const id = "pie-interactive";

  return (
    <div className="flex my-8 gap-5 flex-col lg:w-3/8 w-full">
      <Card data-chart={id} className="flex flex-col">
        <ChartStyle id={id} config={chartConfig} />
        <CardHeader className="flex-row items-start space-y-0 pb-0">
          <div className="grid gap-1 w-full">
            <CardTitle>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>
                  <h1 className="pl-3 font-arimoB uppercase">STATISTICS</h1>
                </div>

                {/* Dropdown */}
                <Select value={activeMonth} onValueChange={setActiveMonth}>
                  <SelectTrigger
                    className="ml-auto h-7 w-[130px] rounded-none border-slate-400 pl-2.5"
                    aria-label="Select a value"
                  >
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent align="end" className="rounded-xl">
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {chartConfig[month].label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardTitle>
          </div>
        </CardHeader>

        {/* Pie Chart */}
      <CardContent className="flex flex-1 flex-col items-center pb-0">
  <ChartContainer
    id={id}
    config={chartConfig}
    className="mx-auto aspect-square w-full max-w-[300px]"
  >
    <PieChart>
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      />
      <Pie
        data={activeData}
        dataKey="value"
        nameKey="name"
        innerRadius={0}
        outerRadius={100}
      >
        {activeData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
    </PieChart>

    {/* Custom legend */}
    <div className="flex justify-center gap-4 mt-4">
      {activeData.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-xs">
          <div
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: entry.fill }}
          />
          <span>{entry.name}</span>
        </div>
      ))}
    </div>
  </ChartContainer>
</CardContent>

      </Card>
    </div>
  );
}

export default Statistics;
