"use client";

import { FadeIn } from "@/components/FadeIn";

export default function ClientArticle({ title, date, readingTime }: { title: string; date: string; readingTime: string }) {
	return (
		<FadeIn className="prose prose-zinc prose-lg max-w-none">
			<h1 className="text-xl font-semibold tracking-tight not-prose">{title}</h1>
			<p className="text-lg text-black/60 not-prose">{date} · {readingTime}</p>
			<div className="mt-6 space-y-4">
				<p>Placeholder essay content for “{title}”. Replace this with real writing later.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
				<p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
			</div>
		</FadeIn>
	);
} 