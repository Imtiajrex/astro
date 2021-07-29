import CTA from "./CTA";
import Earth from "./Earth";
export default function Hero() {
	return (
		<div className="hero">
			<div className="headings">
				<h1 className="header large">
					Astro Physics Research Driven Chittagong Univeristy Club
				</h1>
				<p className="sub-header big">
					We prioritize research & discussion in our workshops. Regularly
					learning something new and organizing events for exploring depths of
					space is our motto.{" "}
				</p>
				<CTA />
			</div>
			<div className="image">
				<Earth />
			</div>
		</div>
	);
}
