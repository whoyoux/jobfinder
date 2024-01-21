import Container from "@/components/ui/container";
import ContactForm from "./contact-form";
import Image from "next/image";

import map from "@/images/map.svg";
import Link from "next/link";

const ContactPage = () => {
	return (
		<div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:gap-8">
			<section>
				<Container className="flex flex-col gap-4">
					<h3 className="text-2xl font-medium">Contact us</h3>
					<p className="text-sm">
						If you have any questions or need further information please feel
						free to contact us.
					</p>
					<ContactForm />
				</Container>
			</section>

			<section>
				<Container className="flex flex-col gap-4">
					<h3 className="text-2xl font-medium">Our office</h3>
					<div>
						<h5 className="text-xl font-semibold mb-1">Job Finder Inc.</h5>
						<p className="text-card-foreground">1234 Main St.</p>
						<p className="text-card-foreground">San Francisco, CA 94123</p>
					</div>

					<div>
						<h5 className="text-xl font-semibold mb-1">Phone</h5>
						<p className="text-card-foreground">Phone: (555) 555-1234</p>
					</div>

					<div>
						<h5 className="text-xl font-semibold mb-1">Fax</h5>
						<p className="text-card-foreground">(555) 555-1234</p>
					</div>

					<div>
						<h5 className="text-xl font-semibold mb-1">Email</h5>
						<p className="text-card-foreground">
							<Link
								href="mailto:info@jobfinder.com"
								className="hover:underline"
							>
								info@jobfinder.com
							</Link>
						</p>
					</div>

					<Image
						src={map}
						alt="map"
						className="w-full max-h-[350px] object-cover rounded-lg mt-4"
					/>
				</Container>
			</section>
		</div>
	);
};

export default ContactPage;
