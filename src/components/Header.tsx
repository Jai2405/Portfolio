import Link from "next/link";

const navItems = [
	{ href: "/work", label: "Work" },
	{ href: "/musings", label: "Musings" },
	{ href: "/library", label: "Library" },
];

export function Header() {
	return (
		<header className="header-bold">
			<div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
				<Link href="/" className="font-bold text-2xl tracking-tight text-foreground">JAI VADERAA</Link>
				<nav className="flex items-center gap-8 text-base text-muted">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="nav-link transition-colors hover-accent"
						>
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}

export default Header; 