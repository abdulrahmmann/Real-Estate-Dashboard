"use client"

import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "", customer: 48, fill: "#CFC8FF", },
    { month: "", customer: 28, fill: "#CFC8FF",  },
    { month: "", customer: 57, fill: "#475BE8",  },
    { month: "", customer: 33, fill: "#CFC8FF",  },
    { month: "", customer: 41, fill: "#CFC8FF",  },
]

const chartConfig = {
    desktop: {
        label: "Customer",
        color: "#2F80ED",
    },
} satisfies ChartConfig

export function TotalCustomersBarChart() {
    return (
        <Card id={'NewCustomersBarChart'} className={`border-none shadow-none bg-transparent p-0`}>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData} width={200} height={150}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => ""}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => ""}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="customer" fill="#2F80ED" radius={0} className={`p-0`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
