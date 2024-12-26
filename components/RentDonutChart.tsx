"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { browser: "Rent Properties 1", visitors: 210, fill: "#FD8539" },
    { browser: "Rent Properties 2", visitors: 160, fill: "#E4E8EF" },
];


interface ChartConfig {
    [key: string]: {
        label: string;
        color?: string;
    };
}

const chartConfig: ChartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Rent Properties 1",
        color: "#FD8539",
    },
    safari: {
        label: "Rent Properties 2",
        color: "#E4E8EF",
    },
};

export function RentDonutChart() {
    return (
        <Card className="flex flex-col border-none shadow-none mb-3 bg-transparent">
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto w-[70px] h-[70px]"
                >
                    <PieChart width={80} height={80}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={25}
                            outerRadius={40}
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
