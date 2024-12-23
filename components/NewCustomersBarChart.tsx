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
    { month: "", customer: 186, fill: "#A0D7E7", },
    { month: "", customer: 305, fill: "#2F80ED",  },
    { month: "", customer: 237, fill: "#A0D7E7",  },
    { month: "", customer: 73, fill: "#A0D7E7",  },
    { month: "", customer: 209, fill: "#A0D7E7",  },
]

const chartConfig = {
    desktop: {
        label: "Customer",
        color: "#2F80ED",
    },
} satisfies ChartConfig

export function NewCustomersBarChart() {
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
