import { useState } from 'react';
import Button from '../button';

export default function SimpleConditional() {
	const [isTrue, setIsTrue] = useState(false);
	const [condition, setCondition] = useState<'a' | 'b' | 'c'>('a');

	return (
		<div className="w-full flex flex-col gap-y-5">
			<Button onClick={() => setIsTrue((t) => !t)}>
				Click to toggle
			</Button>

			<div className="">
				<p>Ternary condition</p>
				{isTrue ? <p>Condition is true</p> : <p>Condition is false</p>}
			</div>
			<div>
				<p>Logical && operator</p>
				{isTrue && <p>Condition is true</p>}
			</div>
			<div>
				<p>If else condition</p>
				{renderContent(isTrue)}
			</div>
			<div>
				<p>Rendering one of many components</p>
				<select
					value={condition}
					onChange={(e) => setCondition(e.target.value as any)}
					className="mb-4"
				>
					<option value="a">Component A</option>
					<option value="b">Component B</option>
					<option value="c">Component C</option>
				</select>
				{renderComponent(condition)}
			</div>
		</div>
	);
}

const ComponentA = () => (
	<div className="bg-red-500 text-white p-2 rounded-md shadow-md w-44">
		Component A
	</div>
);
const ComponentB = () => (
	<div className="bg-blue-500 text-white p-2 rounded-md shadow-md w-44">
		Component B
	</div>
);
const ComponentC = () => (
	<div className="bg-green-500 text-white p-2 rounded-md shadow-md w-44">
		Component C
	</div>
);

const componentMapper = {
	a: ComponentA,
	b: ComponentB,
	c: ComponentC,
};

const renderComponent = (condition: 'a' | 'b' | 'c') => {
	const Component = componentMapper[condition];
	return Component ? <Component /> : null;
};

const renderContent = (isTrue: boolean) => {
	if (isTrue) {
		return <p>Condition is true</p>;
	} else {
		return <p>Condition is false</p>;
	}
};
