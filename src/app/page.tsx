"use client";

import { FadeIn } from "@/components/FadeIn";

export default function Home() {
	return (
		<FadeIn className="space-y-12">
			<div className="space-y-8">
				<p className="text-xl text-muted leading-relaxed font-medium">AI Engineer at Swif.ai, building systems that work smarter so people can focus on what matters</p>
				<p className="text-xl text-muted leading-relaxed font-medium">Studying Mathematics at the University of Waterloo</p>
				<p className="text-xl text-muted leading-relaxed font-medium">Drawn to philosophy and history— Curious about how ideas, patterns, and systems shape the way we think and work</p>
				<p className="text-xl text-muted leading-relaxed font-medium">Interested in exploring a range of domains and keen on turning concepts into working products.</p>
			</div>

			<div className="pt-8 space-y-6">
				<h2 className="text-2xl font-bold tracking-tight text-foreground border-b-2 border-foreground pb-2">Questions I&apos;m still exploring</h2>
				<ul className="space-y-4 text-muted text-xl leading-relaxed">
					<li className="font-medium">• Shouldn&apos;t those with knowledge and wisdom decide who governs?</li>
					<li className="font-medium">• What do we lose when we make everything efficient?</li>
					<li className="font-medium">• In today&apos;s age, should we be generalists or specialists?</li>
				</ul>
			</div>
		</FadeIn>
	);
}
