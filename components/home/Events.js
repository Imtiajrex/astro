/* eslint-disable @next/next/no-img-element */

import CTA from "./CTA";

export default function Events({ events }) {
	return (
		<div className="wrapper">
			<img src="/bgwave.svg" className="wave" alt="wavy background" />
			<div className="events-wrapper">
				<h2 className="title large">PAST EVENTS</h2>
				<div className="events">
					{events.length > 0 &&
						events.map((el, idx) => <Event data={el} key={idx} />)}
				</div>
				<div className="btn">
					<CTA text="Attend Next Event" />
				</div>
			</div>
		</div>
	);
}

function Event({ data }) {
	const { fields } = data;
	const { title, shortDescription, eventImage } = fields;
	return (
		<div className="event">
			<div className="event-title big">{title}</div>
			<div className="image">
				<div className="overlay" />
				<img src={eventImage.fields.file.url} alt={title} className="image" />
			</div>

			<div className="event-description small">{shortDescription}</div>
		</div>
	);
}
