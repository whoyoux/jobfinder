import Link from "next/link";
import { Briefcase } from "lucide-react";
import Navigation from "./navigation";

const Header = () => {
	return (
		<header className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 bg-background rounded-lg  flex items-center justify-between py-6 mt-4 md:mt-8 relative">
			<Link href="/">
				<div className="flex gap-2 items-center">
					<Briefcase />
					<h1 className="font-semibold text-xl">Job Finder</h1>
				</div>
			</Link>
			<Navigation />
		</header>
	);
};

export default Header;
