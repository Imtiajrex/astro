import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
	return (
		<div className="nav">
			<div className="logo">
				<Link href="/">
					<a>
						<Image src={Logo} width={120} height={70} alt="logo" />
					</a>
				</Link>
			</div>
			<div className="menu">
				<a href="#articles">Articles</a>
				<Link href="/research">
					<a>Research</a>
				</Link>
				<a href="#events">Events</a>
			</div>
		</div>
	);
}
