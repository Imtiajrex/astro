import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
	return (
		<div className="nav-wrapper">
			<div className="nav">
				<div className="logo">
					<Link href="/">
						<a>
							<Image src={Logo} width={120} height={70} alt="logo" />
						</a>
					</Link>
				</div>
				<div className="menu">
					<Link href="/#articles">
						<a>Articles</a>
					</Link>
					<Link href="/#events">
						<a>Events</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
