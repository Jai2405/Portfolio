import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jai Vaderaa",
	description: "Personal website of Jai Vaderaa.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black min-h-screen flex flex-col`}>
				<Header />
				<main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
