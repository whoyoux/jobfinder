import { cn } from "@/lib/utils";

type ContainerProps = {
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

const Container = ({ children, ...props }: ContainerProps) => {
	return (
		<div className={cn("w-full p-6 bg-background rounded-lg", props.className)}>
			{children}
		</div>
	);
};

export default Container;
