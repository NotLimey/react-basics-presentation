'use client';
import Button from '@/common/components/button';

export default function PropsAndState() {
	const handleButtonOneClick = () => {
		alert('Button 1 clicked');
	};

	const handleButtonTwoClick = () => {
		alert('Button 2 clicked');
	};

	const handleButtonThreeClick = () => {
		alert('Button 3 clicked');
	};

	return (
		<>
			<h1>Props and state</h1>
			<div className="flex gap-x-2 items-center">
				<Button onClick={handleButtonOneClick}>Variant 1</Button>
				<Button
					onClick={handleButtonTwoClick}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				>
					Variant 2
				</Button>
				<Button
					onClick={handleButtonThreeClick}
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					Variant 3
				</Button>
			</div>
			<p className="mt-5">
				Vis component tree i react dev tools for og se hvordan props og
				state blir sendt nedover i komponentene
			</p>
		</>
	);
}
