import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Arthur Miller - All-around developer',
	description:
		'Welcome to my website. My name is Arthur, and I specialize in Python, and Batch. I also like making games. I am an all-around developer. I am always looking to improve my skills and learn new things.',
	keywords: [
		'Backend Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Game Development',
		'Arthur Miller',
		'Node.js',
		'Python',
		'JavaScript',
		'Backend Architecture',
	],
	authors: [{ name: 'Arthur Miller' }],
	creator: 'Arthur Miller',
	openGraph: {
		title: 'Arthur Miller - All-around developer Portfolio',
		description: 'My name is Arthur, and I specialize in Python, and Batch. I also like making games. I am an all-around developer. I am always looking to improve my skills and learn new things.',
		siteName: 'Arthur Miller - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Arthur Miller - All-around developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Arthur Miller - All-around developer Portfolio',
		description: 'My name is Arthur, and I specialize in Python, and Batch. I also like making games. I am an all-around developer. I am always looking to improve my skills and learn new things.',
		creator: '@circxit',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
