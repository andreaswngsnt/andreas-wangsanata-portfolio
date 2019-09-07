import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Paper from "@material-ui/core/Paper"

import Header from "../Header"
import Footer from "../Footer"

const ProjectLayout = (props) => {
	const { children } = props

	return (
		<div style={{ backgroundColor: "#EEEEEE" }}>
			<Header />
			<div style={{ padding: "2rem" }}>
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