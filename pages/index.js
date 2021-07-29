import Events from "@components/home/Events";
import Articles from "@components/home/Articles";
import Join from "@components/home/Join";
import Footer from "@components/home/Footer";
import Hero from "@components/home/Hero";
import Nav from "@components/home/Nav";
import Stars from "@components/home/Stars";

import { createClient } from "contentful";
export default function index({ events, articles, categories }) {
	return (
		<div className="home">
			<Stars />
			<Nav />
			<Hero />
			<Events events={events} />
			<Articles categories={categories} articles={articles} />
			<Join />
			<Footer />
		</div>
	);
}

export async function getStaticProps(context) {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const events = await client.getEntries({ content_type: "events" });
	const articles = await client.getEntries({ content_type: "articles" });
	const categories = await client.getEntries({ content_type: "category" });

	return {
		props: {
			events: events.items,
			articles: articles.items,
			categories: categories.items,
		},
	};
}
