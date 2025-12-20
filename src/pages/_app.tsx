import '@/style/index.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import NavBar from '@/components/layout-ui/navbar.tsx'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Mari Montoya | Software Developer</title>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/svg+xml" href="/github-logo-2.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<body>
				<NavBar />

				<div style={{ height: 'calc(100dvh - 72px)' }}>
					<Component {...pageProps} />
				</div>
			</body>
		</>
	)
}
