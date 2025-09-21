"use client";

import { library } from "@/data/library";
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

export default function LibraryPage() {
	const books = library.filter((i) => i.type === "book");
	const videos = library.filter((i) => i.type === "video");
	const quotes = library.filter((i) => i.type === "quote");

	return (
		<motion.section
			className="space-y-12"
			initial="hidden"
			animate="visible"
			variants={container}
		>
			{books.length > 0 && (
				<motion.div className="space-y-8" variants={container}>
					<motion.h2 className="text-3xl font-bold tracking-tight text-foreground border-b-2 border-foreground pb-2" variants={item}>Books</motion.h2>
					<motion.ul className="space-y-8" variants={container}>
						{books.map((item) => (
							<motion.li key={item.id} className="card-modern p-8">
								<div className="flex items-center justify-between mb-4">
									<h3 className="font-bold text-2xl text-foreground">{item.title}</h3>
								</div>
								{item.author && <p className="text-lg text-muted mb-3 font-medium">{item.author}</p>}
								{item.note && <p className="text-lg text-muted leading-relaxed font-medium">{item.note}</p>}
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			)}

			{videos.length > 0 && (
				<motion.div className="space-y-8" variants={container}>
					<motion.h2 className="text-3xl font-bold tracking-tight text-foreground border-b-2 border-foreground pb-2" variants={item}>Videos</motion.h2>
					<motion.ul className="space-y-8" variants={container}>
						{videos.map((item) => (
							<motion.li key={item.id} className="card-modern p-8">
								<div className="flex items-center justify-between mb-4">
									<h3 className="font-bold text-2xl text-foreground">{item.title}</h3>
								</div>
								{item.source && <p className="text-lg text-muted mb-3 font-medium">{item.source}</p>}
								{item.note && <p className="text-lg text-muted mb-4 leading-relaxed font-medium">{item.note}</p>}
								{item.link && (
									<a className="text-lg accent-color hover-accent transition-colors inline-block font-medium" href={item.link} target="_blank" rel="noreferrer">Watch →</a>
								)}
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			)}

			{quotes.length > 0 && (
				<motion.div className="space-y-8" variants={container}>
					<motion.h2 className="text-3xl font-bold tracking-tight text-foreground border-b-2 border-foreground pb-2" variants={item}>Quotes</motion.h2>
					<motion.ul className="space-y-8" variants={container}>
						{quotes.map((item) => (
							<motion.li key={item.id} className="card-modern p-8">
								{item.quoteExcerpt && (
									<blockquote className="text-xl text-muted italic leading-relaxed mb-4 font-medium">&ldquo;{item.quoteExcerpt}&rdquo;</blockquote>
								)}
								{item.title && <p className="text-lg text-muted-light font-medium">— {item.title}</p>}
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			)}
		</motion.section>
	);
} 