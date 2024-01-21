import Image from "next/image";

import interview from "@/images/interview.svg";
import Container from "./ui/container";

const Hero = () => {
	return (
		<section>
			<Container className="flex flex-col md:flex-row gap-8 md:gap-0 py-16">
				<div className="flex-1 flex items-center justify-center">
					<div className="text-center md:text-left">
						<h2 className="text-4xl font-bold">Find your dream job</h2>
						<p className="font-medium mt-4">
							Join the largest community of job seekers and find the perfect job
							for you
						</p>
					</div>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<Image
						src={interview}
						alt="Interview"
						className="max-w-[70%]"
						priority
					/>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
