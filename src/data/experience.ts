export type ExperienceItem = {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	summary: string;
	highlights: string[];
	tech: string[];
	link?: string;
};

export const experience: ExperienceItem[] = [
	{
		company: "Swif.ai",
		role: "AI Engineer",
		startDate: "May 2025",
		endDate: "Aug 2025",
		summary: "Built AI-powered automation tools and developer experiences for SaaS workflows.",
		highlights: [
			"Developed agentic provisioning and deprovisioning systems for SaaS applications",
			"Built a live terminal with code-assist and automation features",
			"Created a copilot editor capable of generating custom scripts for client applications",
		],
		tech: ["TypeScript", "OpenAI SDK", "LLMs", "Vue.js", "Playwright"],
	},
	{
		company: "Fairfax Financial Holdings",
		role: "Systems Analyst",
		startDate: "Sep 2023",
		endDate: "Dec 2023",
		summary: "Developed data-driven tools and processes to enhance compliance and investment operations.",
		highlights: [
			"Created a data clustering algorithm to optimize compliance data management",
			"Built ETL pipeline to transfer XML data into SQL databases",
			"Executed ORE simulations to assess trade sensitivities across portfolios",
		],
		tech: ["Python", "SQL", "ETL", "Data Engineering"],
	},
]; 