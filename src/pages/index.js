import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
	return (
		<Layout pageTitle='Home Page'>
			<p>I'm making this by following the Gatsby Tutorial.'</p>
			<StaticImage
				alt='Hoshimachi Suisei - Ghost'
				src='../images/img.jpg'></StaticImage>
		</Layout>
	)
}
// Step 3: Export your component
export default IndexPage
