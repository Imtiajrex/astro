import Lottie from "react-lottie";
import animationData from "@public/earth.json";
export default function Earth() {
	return (
		<div className="earth">
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData: animationData,
					rendererSettings: {
						preserveAspectRatio: "xMidYMid slice",
					},
				}}
			/>
		</div>
	);
}
