export type LibraryItem = {
	id: string;
	title: string;
	type: "book" | "video" | "quote" | "article";
	author?: string;
	source?: string;
	link?: string;
	note?: string;
	tags?: string[];
	dateAdded?: string;
	quoteExcerpt?: string;
};

export const library: LibraryItem[] = [
	{
		id: "sapiens",
		title: "Sapiens",
		type: "book",
		author: "Yuval Noah Harari",
		note: "A brief history of humankind and how we became the dominant species.",
		tags: ["history", "anthropology"],
	},
	{
		id: "mahabharata",
		title: "Mahabharata",
		type: "book",
		note: "A story about war, strategy, politics and the complexity of human nature",
		tags: ["epic", "philosophy"],
	},
	{
		id: "krishnamurti-quote",
		title: "J. Krishnamurti",
		type: "quote",
		quoteExcerpt: "The highest form of human intelligence is to observe without judgment",
	},
	{
		id: "nehru-quote",
		title: "Jawaharlal Nehru",
		type: "quote",
		quoteExcerpt: "An investment in knowledge pays the best interest",
	},
	{
		id: "seneca-quote",
		title: "Seneca",
		type: "quote",
		quoteExcerpt: "It is not that we have a short time to live, but that we waste much of it.",
	},
	{
		id: "small-bets-article",
		title: "Small Bets, Big Outcomes",
		type: "article",
		link: "https://example.com/article",
		note: "An argument for iterative, compounding projects.",
	},
]; 