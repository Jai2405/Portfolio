import { notFound } from "next/navigation";
import { essays } from "@/data/essays";
import ClientArticle from "./client-article";

export async function generateStaticParams() {
	return essays.map((e) => ({ slug: e.slug }));
}

export default async function MusingDetail({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = essays.find((e) => e.slug === slug);
	if (!post) return notFound();
	return <ClientArticle title={post.title} date={post.date} readingTime={post.readingTime} />;
} 