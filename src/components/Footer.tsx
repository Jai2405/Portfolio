import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t-3 border-foreground bg-highlight">
			<div className="max-w-4xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-6">
				<div className="text-lg text-muted font-medium">
					© 2025 JAI VADERAA
				</div>
				<div className="flex items-center gap-6 text-lg">
					<a className="px-4 py-2 font-medium hover-accent transition-colors" href="mailto:jvaderaa@uwaterloo.ca">Email</a>
					<a className="px-4 py-2 font-medium hover-accent transition-colors" href="https://github.com/Jai2405/" target="_blank" rel="noreferrer">GitHub</a>
					<a className="px-4 py-2 font-medium hover-accent transition-colors" href="https://www.linkedin.com/in/jaivaderaa/" target="_blank" rel="noreferrer">LinkedIn</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer; 