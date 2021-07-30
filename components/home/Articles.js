import Link from "next/link";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Articles({ categories, articles }) {
	const [activeIndex, setIndex] = useState(0);
	const [activeArticles, setArticles] = useState(articles);

	const activate = (index, catName) => {
		setIndex(index);
		let newArt = articles.filter(
			(el, idx) => el.fields.category.fields.name == catName
		);
		setArticles(newArt);
	};
	useEffect(() => {
		activate(0, categories[0].fields.name);
	}, []);
	return (
		<div className="articles-wrapper" id="articles">
			<div className="title large">ARTICLES</div>
			<div className="categories">
				{categories.length > 0
					? categories.map((el, idx) => (
							<Category
								data={el}
								key={idx}
								activate={() => activate(idx, el.fields.name)}
								active={activeIndex == idx}
							/>
					  ))
					: null}
			</div>
			<div className="articles">
				{activeArticles.length > 0 &&
					activeArticles.map((el, idx) => <Article data={el} key={idx} />)}
			</div>
		</div>
	);
}

function Article({ data }) {
	const { fields } = data;
	const { shortDescription, title, slug, featuredImage } = fields;
	return (
		<article className="article">
			<div className="details">
				<Link href={`/${slug}`}>
					<a>
						<h2 className="big title">{title}</h2>
					</a>
				</Link>
				<p className="small short-description">{shortDescription}</p>
			</div>
			<img className="image" src={featuredImage.fields.file.url} alt={title} />
		</article>
	);
}

function Category({ data, activate, active }) {
	const { fields } = data;
	const { name, image } = fields;
	return (
		<div
			className={`category ${active && "active"}`}
			onClick={() => activate()}
		>
			<img src={image.fields.file.url} alt={name} />
			<div className="overlay" />
			<div className="name regular">{name}</div>
		</div>
	);
}
