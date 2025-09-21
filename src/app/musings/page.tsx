"use client";

import Link from "next/link";
import { essays } from "@/data/essays";
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

export default function MusingsPage() {
	return (
		<div className="w-full">
			<motion.section
				className="space-y-12 w-full"
				initial="hidden"
				animate="visible"
				variants={container}
			>
				<motion.h1 className="text-3xl font-bold tracking-tight text-foreground border-b-2 border-foreground pb-2" variants={item}>Musings</motion.h1>
				
				{essays.length > 0 ? (
					<motion.ul className="space-y-8 w-full" variants={container}>
						{essays.map((post) => (
							<motion.li key={post.slug} className="card-modern p-8 w-full" variants={item}>
								<div className="flex items-center justify-between mb-4">
									<h2 className="font-bold text-2xl text-foreground">
										<Link href={`/musings/${post.slug}`} className="hover-accent transition-colors">
											{post.title}
										</Link>
									</h2>
									<span className="text-lg text-muted font-medium">{post.date} · {post.readingTime}</span>
								</div>
								<p className="text-lg text-muted leading-relaxed font-medium">{post.summary}</p>
							</motion.li>
						))}
					</motion.ul>
				) : (
					<motion.div className="card-modern p-12 w-full text-center" variants={item}>
						<h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
						<p className="text-lg text-muted leading-relaxed">
							I&apos;m working on some thoughtful essays and musings. Check back soon for new content!
						</p>
					</motion.div>
				)}
			</motion.section>
		</div>
	);
} 