"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Browse jobs",
		href: "/search",
	},
	{
		label: "Post an offer",
		href: "/post",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

const Navigation = () => {
	const [isOpen, setOpen] = useState(false);
	const path = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <when user change page, mobile menu should be closed>
	useEffect(() => {
		setOpen(false);
	}, [path]);

	return (
		<>
			<nav className="md:flex items-center hidden">
				{NAV.map((item) => (
					<Link href={item.href} key={item.href}>
						<Button variant="link">{item.label}</Button>
					</Link>
				))}
			</nav>
			<div className="flex md:hidden">
				<Button
					variant="outline"
					size="icon"
					onClick={() => setOpen((prev) => !prev)}
				>
					{isOpen ? <X /> : <Menu />}
				</Button>
			</div>
			{isOpen && (
				<nav className="md:hidden absolute top-[90px] left-0 right-0 w-full flex flex-col gap-4 bg-background border shadow py-6 rounded-lg">
					{NAV.map((item) => (
						<Link href={item.href} key={item.href}>
							<Button variant="link" className="w-full">
								{item.label}
							</Button>
						</Link>
					))}
				</nav>
			)}
		</>
	);
};

export default Navigation;
