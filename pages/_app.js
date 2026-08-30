import "@styles/styles.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Astro - A astronomy varsity club</title>
				<link rel="shortcut icon" type="image/png" href="/astro.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
