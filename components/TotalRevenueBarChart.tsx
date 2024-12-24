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
    { month: "January", desktop: 850000, mobile: 423000 },
    { month: "February", desktop: 631000, mobile: 320000 },
    { month: "March", desktop: 217400, mobile: 159800 },
    { month: "April", desktop: 179034, mobile: 115831 },
    { month: "May", desktop: 436509, mobile: 351608 },
    { month: "June", desktop: 216980, mobile: 168510 },
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
                    <BarChart accessibilityLayer data={chartData} width={700} height={250}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value/1000+"k"}
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
