import { BiRightArrowAlt } from "react-icons/bi";
export default function CTA({ text = "Join Our Community" }) {
	return (
		<div className="cta">
			<div className="input-box">
				<input type="email" placeholder={text} className="regular" />
				<button className="button">
					<BiRightArrowAlt color="#222831" size={40} />
				</button>
			</div>
			<div className="info small">Enter Your Email</div>
		</div>
	);
}
