'use client';
import { clsx } from '@/common/utils/clsx';
import Image from 'next/image';
import Link from 'next/link';

const links = [
	{
		href: '/components',
		title: 'Components',
	},
	{
		href: '/props-state',
		title: 'Props and State',
	},
	{
		href: '/event-handling',
		title: 'Event handling',
	},
	{
		href: '/conditional-rendering',
		title: 'Conditional rendering',
	},
];

export default function Home() {
	return (
		<div className="flex flex-col">
			{links.map((link, i) => (
				<Link
					href={link.href}
					key={link.href}
					className={clsx(`underline text-blue-500 cursor-pointer`)}
				>
					{i + 1}. {link.title}
				</Link>
			))}
		</div>
	);
}
