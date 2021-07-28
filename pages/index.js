export default function index() {
	return <div className="home"></div>;
}

export async function getStaticProps(context) {
	return {
		props: {},
	};
}
