import '../style/index.scss';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps){
    return (
        <>
            <head>
                <title>Mari Montoya | Software Developer</title>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/github-logo-2.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <Component {...pageProps} />
            </body>
        </>
    );
}
