import Head from "next/head"

import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Paper from "@material-ui/core/Paper"

import Header from "../Header"
import Footer from "../Footer"

const ProjectLayout = (props) => {
	const { children, projectTitle, projectDescription, projectKeywords, projectImageURL } = props

	const pageTitle = `${projectTitle} | Andreas Wangsanata`
	const pageDescription = projectDescription
	const pageKeywords = projectKeywords
	const pageImageURL = `${process.env.hostname}${projectImageURL}`

	return (
		<div>
			<Head>
				{typeof projectTitle === 'string'
					? <title>{pageTitle}</title>
					: null
				}
				{typeof projectDescription === 'string'
					? <meta name='description' content={pageDescription} />
					: null
				}
				{typeof projectKeywords === 'string'
					? <meta name='keywords' content={pageKeywords} />
					: null
				}
				{typeof projectTitle === 'string'
					? <meta property='og:title' content={pageTitle} />
					: null
				}
				{typeof projectDescription === 'string'
					? <meta property='og:description' content={pageDescription} />
					: null
				}
				{typeof projectImageURL === 'string'
					? <meta property='og:image' content={pageImageURL} />
					: null
				}
			</Head>
			<Header />
			<div style={{ padding: "2rem", backgroundColor: "#EEEEEE" }}>
				<Grid container justify="center">
					<Grid item xl={8} md={10} xs={12}>
						<Hidden smDown>
							<Paper
								square={true}
								style={{
									padding: "2rem",
									boxShadow: "5px 5px 5px 1px #333"
								}}
							>
								{children}
							</Paper>
						</Hidden>
						<Hidden mdUp>
							{children}
						</Hidden>
					</Grid>
				</Grid>
			</div>
			<Footer />
		</div>
	)
}

export default ProjectLayout