import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverable?: boolean;
}

export function Card({ className, children, hoverable = true, ...props }: CardProps) {
    return (
        <motion.div
            whileHover={hoverable ? { y: -5, transition: { duration: 0.2 } } : undefined}
            className={cn(
                "rounded-2xl bg-secondary/30 border border-secondary/50 p-6 shadow-xl backdrop-blur-sm",
                "transition-colors hover:border-accent/30",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
