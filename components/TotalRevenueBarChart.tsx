"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#475BE8",
    },
    mobile: {
        label: "Mobile",
        color: "#CFC8FF",
    },
} satisfies ChartConfig

export function TotalRevenueBarChart() {
    return (
        <Card id={'totalRevenueBarChart'} className={`border-none shadow-none mb-3 bg-transparent`}>
            <CardContent>
                <ChartContainer config={chartConfig} className="">
                    <BarChart accessibilityLayer data={chartData} width={700} height={300}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="desktop" fill="#475BE8" radius={4} />
                        <Bar dataKey="mobile" fill="#CFC8FF" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
