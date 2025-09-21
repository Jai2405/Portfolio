"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function FadeIn({ children, className }: PropsWithChildren<{ className?: string }>) {
	return (
		<motion.section
			className={className}
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.22, ease: "easeOut" }}
		>
			{children}
		</motion.section>
	);
}

const listContainer = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.05, delayChildren: 0.05 },
	},
};

const listItem = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export function FadeInList({ children, className }: PropsWithChildren<{ className?: string }>) {
	return (
		<motion.ul className={className} initial="hidden" animate="visible" variants={listContainer}>
			{children}
		</motion.ul>
	);
}

export function FadeInItem({ children, className }: PropsWithChildren<{ className?: string }>) {
	return (
		<motion.li className={className} variants={listItem}>
			{children}
		</motion.li>
	);
} 