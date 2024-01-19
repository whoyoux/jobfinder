import Image from "next/image";

import interview from "@/images/interview.svg";
import Container from "./ui/container";

const Hero = () => {
	return (
		<Container className="flex flex-col md:flex-row py-16">
			<section>
				<div className="flex-1 flex items-center justify-center">
					<div>
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
			</section>
		</Container>
	);
};

export default Hero;
