'use client';

import Button from '@/common/components/button';
import useEventListener from '@/common/hooks/useEventListener';
import { clsx } from '@/common/utils/clsx';
import { useRef, useState } from 'react';

export default function EventHandling() {
	const inputField = useRef<HTMLInputElement>(null);
	const page = useRef<HTMLDivElement>(null);

	const [redBg, setRedBg] = useState<boolean>(false);
	const [text, setText] = useState<string>('');
	const [pageClicks, setPageClicks] = useState<number>(0);

	const handleKeyPress = (event: KeyboardEvent) => {
		console.log('event', event);
		setText((t) => t + event.key);
	};

	useEventListener('keydown', handleKeyPress, inputField);
	useEventListener('click', () => setPageClicks((p) => p + 1), page);

	return (
		<div
			className={clsx(
				' w-full min-h-[60vh]',
				redBg ? 'bg-red-100' : 'bg-blue-100'
			)}
			ref={page}
		>
			<Button
				onClick={() => {
					setRedBg((r) => !r);
				}}
			>
				Handle button click
			</Button>
			<input type="text" ref={inputField} />
			<p>{text}</p>
			<p>Area clicked {pageClicks}</p>
		</div>
	);
}
