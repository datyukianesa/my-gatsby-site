module.exports = {
	siteMetadata: {
		title: 'My Gatsby Site',
	},
	plugins: [
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
	],
}
