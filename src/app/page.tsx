import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/container";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="w-full flex flex-col md:grid md:grid-cols-4 mt-4 md:mt-8 gap-4 md:gap-8">
				<FilterSettings />
				<JobCardsList />
			</div>
		</>
	);
}

const JobCardsList = () => {
	return (
		<section className="w-full md:col-span-3 rounded-lg flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8">
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<Button className="col-span-3">Load more...</Button>
		</section>
	);
};

const JobCard = () => {
	return (
		<Card className="flex flex-col justify-between border-none shadow-none">
			<CardHeader>
				<CardTitle>Software enginner</CardTitle>
				<CardDescription>Google, New York</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<p>We are looking for a skilled software engineer to join our team.</p>
			</CardContent>
			<CardFooter>
				<Button variant="secondary">Apply</Button>
			</CardFooter>
		</Card>
	);
};

const FilterSettings = () => {
	return (
		<div>
			<Container>
				<section>
					<form
						className="flex flex-col gap-6"
						action={async (formData) => {
							"use server";
							console.log("-----");
							console.log(formData.get("search"));
							console.log(formData.get("city"));
							console.log(formData.get("category"));
							console.log(formData.get("salary"));
							console.log(formData.get("checkbox"));
						}}
					>
						<div className="flex items-center justify-between">
							<h3 className="text-xl font-medium">Filter settings</h3>

							<Button size="icon" variant="outline">
								<Filter className="w-4 h-4" />
							</Button>

							{/* Causing hydration error */}
							{/* <TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<Button size="icon" variant="outline">
										<Filter className="w-4 h-4" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Clear filter settings</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider> */}
						</div>
						<Input placeholder="Search" type="search" name="search" />
						<Input placeholder="City" type="search" name="city" />
						<Input placeholder="Category" type="search" name="category" />
						<Input placeholder="Salary" type="search" name="salary" />
						<div className="flex items-center space-x-2">
							<Checkbox id="terms" name="checkbox" />
							<Label htmlFor="terms">Show only remote jobs</Label>
						</div>
						<Button type="submit">Filter</Button>
					</form>
				</section>
			</Container>
		</div>
	);
};
