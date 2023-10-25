import { clsx } from '../utils/clsx';

type ButtonProps = {
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
};

export default function Button({ children, className, onClick }: ButtonProps) {
	return (
		<button
			className={clsx(
				'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
