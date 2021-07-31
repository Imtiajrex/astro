/* eslint-disable @next/next/no-img-element */
import { createClient } from "contentful";
import Nav from "@components/home/Nav";
import Join from "@components/home/Join";
import Footer from "@components/home/Footer";
import Head from "next/head";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Link from "next/link";
export default function articlepage({ post, relatedArticles }) {
	const { title, shortDescription, featuredImage, article, category } =
		post.fields;
	const blog = documentToHtmlString(article);
	return (
		<div className="article-page">
			<Head>
				<title>{title}</title>
			</Head>
			<Nav />
			<div className="featured">
				<img src={featuredImage.fields.file.url} alt={title} />
			</div>
			<div className="article">
				<h1 className="title large">{title}</h1>
				<div className="short-description regular">{shortDescription}</div>
				<div
					className="blog small"
					dangerouslySetInnerHTML={{ __html: blog }}
				/>
			</div>
			<div className="author"></div>
			<div className="related-articles">
				<div className="title large">Somethings you might like</div>
				<div className="article-list">
					{relatedArticles.map((element, index) => {
						const { title, shortDescription, featuredImage, slug } =
							element.fields;
						return (
							<div className="related-article" key={index}>
								<img src={featuredImage.fields.file.url} alt={title} />
								<div className="details">
									<Link href={`/${slug}`}>
										<a className="title big">{title}</a>
									</Link>
									<p className="short-description small">{shortDescription}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Join />
			<Footer />
		</div>
	);
}
export async function getStaticPaths() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const articles = await client.getEntries({ content_type: "articles" });

	const paths = articles.items.map((article, index) => ({
		params: { slug: article.fields.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const article = await client.getEntries({
		content_type: "articles",
		"fields.slug": slug,
	});
	const relatedArticles = await client.getEntries({
		content_type: "articles",
		limit: 2,
		"fields.slug[ne]": slug,
	});

	return {
		props: {
			post: article.items[0],
			relatedArticles: relatedArticles.items,
		},
	};
}
