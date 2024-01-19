"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Textarea } from "@/components/ui/textarea";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	companyEmail: z.string().email(),
	companyName: z.string(),
	jobDescription: z.string(),
	jobLocation: z.string(),
	jobTitle: z.string(),
	jobType: z.string(),
	salary: z.number(),
});

const PostForm = () => {
	return (
		<div className="grid grid-cols-5 gap-4 md:gap-8">
			<section className="col-span-2">
				<Container>
					<UploadImage />
				</Container>
			</section>

			<Container className="col-span-3">
				<section>
					<InformationForm />
				</section>
			</Container>
		</div>
	);
};

const UploadImage = () => {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-2xl font-medium">Upload image</h3>
			<input type="file" accept="image/*" />
			<div>
				<Button>Upload</Button>
			</div>
		</div>
	);
};

const InformationForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			companyEmail: "",
			companyName: "",
			jobTitle: "",
			jobDescription: "",
			jobLocation: "",
			jobType: "",
			salary: undefined,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<>
			<h3 className="text-2xl font-medium mb-4">Post a job offer</h3>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="companyEmail"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Company email</FormLabel>
								<FormControl>
									<Input placeholder="Enter a company email" {...field} />
								</FormControl>
								{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="companyName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Company name</FormLabel>
								<FormControl>
									<Input placeholder="Enter a company name" {...field} />
								</FormControl>
								{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="jobTitle"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job title</FormLabel>
								<FormControl>
									<Input placeholder="Enter a job title" {...field} />
								</FormControl>
								{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="jobDescription"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job description</FormLabel>
								<FormControl>
									<Textarea placeholder="Enter a job description" {...field} />
								</FormControl>
								{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="jobLocation"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job location</FormLabel>
								<FormControl>
									<Input placeholder="Enter a job location" {...field} />
								</FormControl>
								<FormDescription>
									If remote, please write only "remote"
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="jobType"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job type</FormLabel>
								<FormControl>
									<Input placeholder="Enter a job type" {...field} />
								</FormControl>
								{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="salary"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Salary</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter a job salary"
										type="number"
										{...field}
									/>
								</FormControl>
								<FormDescription>Salary per year.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</>
	);
};

export default PostForm;
