import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Header = () => {
	return (
		<header className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 bg-background rounded-lg  flex items-center justify-between py-6 mt-4 md:mt-8">
			<Link href="/">
				<div className="flex gap-2 items-center">
					<Briefcase />
					<h1 className="font-semibold text-xl">Job Finder</h1>
				</div>
			</Link>
			<nav className="flex items-center">
				<Link href="/">
					<Button variant="link">Home</Button>
				</Link>
				<Link href="/search">
					<Button variant="link">Browse Jobs</Button>
				</Link>
				<Link href="/post">
					<Button variant="link">Post an offer</Button>
				</Link>
				<Link href="/contact">
					<Button variant="link">Contact</Button>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
