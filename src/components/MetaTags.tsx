import { Helmet } from "react-helmet-async";

// You can have more props. In my case, these are enough.
function MetaTags({ title = "", image = "", name = "" }) {
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{title}</title>
			<link rel='canonical' href={window.location.href} />

			{/* Open Graph tags (OG) */}
			<meta property='og:url' content={window.location.href} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content='Shop trusted products on KAO with secure payments and fast delivery.' />
			{/* OG image tags */}
			<meta property='og:image' content={image} />
			<meta property='og:image:secure_url' content={image} />
			<meta property='og:image:type' content='image/jpeg' />
			<meta property='og:image:width' content='200' />
			<meta property='og:image:alt' content={`Image of ${title} site`} />
			{/* Twitter tags */}
			<meta name='twitter:creator' content={name} />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={title} />
			<meta property='twitter:image' content={image} />
			<meta
				name='twitter:description'
				content='Shop trusted products on KAO with secure payments and fast delivery.'
			/>
		</Helmet>
	);
}

export default MetaTags;
