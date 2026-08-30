import CTA from "./CTA";

export default function Join() {
	return (
		<div className="join">
			<div className="title large">JOIN OUR COMMUNITY</div>
			<div className="sub-text small">
				Want to attend events or do research session with us? Join our community
				by entering your email.
			</div>
			<CTA text="Enter Your Email" />
		</div>
	);
}
