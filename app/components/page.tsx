'use client';

import CounterArrowComponent from '@/common/components/counter/CounterArrowComponent';
import CounterFunctionComponent from '@/common/components/counter/CounterFunctionComponent';

export default function ComponentsPage() {
	return (
		<>
			<CounterArrowComponent />
			<div className="my-6 h-0.5 w-full bg-gray-300" />
			<CounterFunctionComponent />
		</>
	);
}
