"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0, y: 8 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.22, ease: "easeOut", staggerChildren: 0.05, delayChildren: 0.05 },
	},
};

const item = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const projects = [
	{
		title: "Cold Email Agent",
		description: "An agent that identifies opportunities and sends cold emails to companies.",
		stack: ["OpenAI SDK", "Python", "React.js", "FastAPI"],
		link: "https://github.com/Jai2405/Cold-Email_Agent",
	},
	{
		title: "WatSched",
		description: "AI-powered class schedule generator for UW students.",
		stack: ["Next.js", "FastAPI", "Groq API", "Selenium"],
		link: "https://github.com/Jai2405/WATsched",
	},
];

export default function WorkPage() {
	return (
		<motion.section
			className="space-y-12"
			initial="hidden"
			animate="visible"
			variants={container}
		>
			<motion.h1 className="text-3xl font-bold tracking-tight text-foreground border-b-2 border-foreground pb-2" variants={item}>Experience</motion.h1>
			<motion.ul className="space-y-8" variants={container}>
				{experience.map((itemData) => (
					<motion.li key={`${itemData.company}-${itemData.startDate}`} className="card-modern p-8" variants={item}>
						<div className="flex items-center justify-between mb-4">
							<h2 className="font-bold text-2xl text-foreground">{itemData.role} · {itemData.company}</h2>
							<span className="text-lg text-muted font-medium">{itemData.startDate} — {itemData.endDate}</span>
						</div>
						<p className="text-lg text-muted mb-6 leading-relaxed font-medium">{itemData.summary}</p>
						<ul className="space-y-2 mb-6 text-lg text-muted">
							{itemData.highlights.map((h) => (
								<li key={h} className="leading-relaxed font-medium">• {h}</li>
							))}
						</ul>
						{itemData.tech.length > 0 && (
							<p className="text-base text-muted-light font-medium">Tech: {itemData.tech.join(", ")}</p>
						)}
					</motion.li>
				))}
			</motion.ul>

			<motion.div className="space-y-8" variants={container}>
				<motion.h1 className="text-3xl font-bold tracking-tight text-foreground border-b-2 border-foreground pb-2" variants={item}>Projects</motion.h1>
				<ul className="space-y-8">
					{projects.map((p) => (
						<li key={p.title} className="card-modern p-8">
							<div className="flex items-center justify-between mb-4">
								<h3 className="font-bold text-2xl text-foreground">{p.title}</h3>
							</div>
							<p className="text-lg text-muted mb-6 leading-relaxed font-medium">{p.description}</p>
							<p className="text-base text-muted-light mb-4 font-medium">Stack: {p.stack.join(", ")}</p>
							{p.link && (
								<a href={p.link} className="text-lg accent-color hover-accent transition-colors inline-block font-medium" target="_blank" rel="noreferrer">View →</a>
							)}
						</li>
					))}
				</ul>
			</motion.div>
		</motion.section>
	);
} 