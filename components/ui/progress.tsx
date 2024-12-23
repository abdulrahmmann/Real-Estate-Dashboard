"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorStyle?: React.CSSProperties;
}
>(({ className, value, indicatorStyle, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            "relative h-2.5 w-full overflow-hidden rounded-full bg-[#E4E8EF]",
            className
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className="h-full flex-1 transition-all rounded-full"
            style={{
                transform: `translateX(-${100 - (value || 0)}%)`,
                ...indicatorStyle,
            }}
        />
    </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
