import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'navya akshitha sangishetty ─ developer';
	const description = "Hey 👋 I'm Navya Akshitha, a developer";

	return {
		title,
		description,
		canonical: `https://nas-code-chronicles.vercel.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nas-code-chronicles',
			url: `https://nas-code-chronicles.vercel.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
