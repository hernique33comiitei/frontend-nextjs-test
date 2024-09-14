import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import { ToastProvider } from '@/contexts/ToastContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Teste Front-End - BNP</title>
			</Head>

			<ToastProvider>
				<Component {...pageProps} />
			</ToastProvider>
		</>
	);
}
