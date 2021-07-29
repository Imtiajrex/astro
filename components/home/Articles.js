import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Articles({ categories, articles }) {
	const [activeIndex, setIndex] = useState(0);
	const activate = (index) => setIndex(index);
	return (
		<div className="articles">
			<div className="title large">ARTICLES</div>
			<div className="categories">
				{categories.length > 0
					? categories.map((el, idx) => (
							<Category
								data={el}
								key={idx}
								activate={() => activate(idx)}
								active={activeIndex == idx}
							/>
					  ))
					: null}
			</div>
			<div className="articles">
				{articles.length > 0 &&
					articles.map((el, idx) => <Article data={el} key={idx} />)}
			</div>
		</div>
	);
}

function Article({ data }) {}

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
