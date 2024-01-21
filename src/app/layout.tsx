import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Job Finder",
	description: "Find your dream job",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					" bg-gray-100 font-sans antialiased px-8",
					inter.variable,
				)}
			>
				<Header />
				<main className="w-full max-w-screen-2xl mx-auto mt-4 md:mt-8">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
