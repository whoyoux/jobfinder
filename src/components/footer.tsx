import Container from "@/components/ui/container";

const Footer = () => {
	return (
		<>
			<footer>
				<Container className="max-w-screen-2xl mt-4 md:mt-8 flex items-center justify-center font-medium mb-8 mx-auto">
					{"© 2024 JobFinder. All rights reserved"}
				</Container>
			</footer>
		</>
	);
};

export default Footer;
