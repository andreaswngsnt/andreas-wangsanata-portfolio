import { Component, Fragment } from "react"
import Head from "next/head"

import Dialog from "@material-ui/core/Dialog"
import Grid from "@material-ui/core/Grid"

import ClickableImage from "../../../components/ClickableImage"
import ProjectLayout from "../../../components/Layout/ProjectLayout"

class OtherArchitectureProjectPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedImageSrc: "",
			isDialogOpen: false
		}
	}

	handleOpenDialog = (imageSrc) => {
		this.setState({
			selectedImageSrc: imageSrc,
			isDialogOpen: true
		})
	}

	handleCloseDialog = () => {
		this.setState({
			selectedImageSrc: "",
			isDialogOpen: false
		})
	}

	render() {
		const { selectedImageSrc, isDialogOpen } = this.state

		return (
			<Fragment>
				<Head>
					<title>Other Architecture Projects | Andreas Wangsanata</title>
				</Head>
				<ProjectLayout>
					<h1
						style={{
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: "Roboto Slab"
						}}
					>
						Other Architecture Projects
					</h1>
					<Grid container spacing={3}>
						<Grid item xl={3} md={3} xs={12} style={{ display: "flex", alignItems: "center" }}>
							<ClickableImage
								src="/static/images/projects/architecture/others/other_project1.png"
								caption=""
								onClick={this.handleOpenDialog}
							/>
						</Grid>
						<Grid item xl={9} md={9} xs={12} style={{ display: "flex", alignItems: "center" }}>
							<div>
								<h2>Facade Design</h2>
								<p>Created in UC Berkeley's ARCH-100B class, instructed by Dan Spiegel in 2016.</p>
								<p>
									This project is a prototype of a new facade that is based on a study of an existing building's facade system.
									The project that was analyzed is the Bishan Public Library. This library have a glass facade that protrudes outside.
									These protruding parts become a functional reading pod for the library's inhabitants.
								</p>
								<p>
									After analyzing the project. I have decided to come out with a similar system that works with concrete and stucco material.
									This adaptation is meant to work in places with moderate temperature swings by using concrete as its' thermal mass.
									This adaptation also protrudes inside and outside, making different type of spaces, such as balconies and private sitting areas.
								</p>
							</div>
						</Grid>
						<Grid item xl={3} md={3} xs={12} style={{ display: "flex", alignItems: "center" }}>
							<Grid container spacing={2}>
								<Grid item xl={12} md={12} xs={12}>
									<ClickableImage
										src="/static/images/projects/architecture/others/other_project2_1.jpg"
										caption=""
										onClick={this.handleOpenDialog}
									/>
								</Grid>
								<Grid item xl={12} md={12} xs={12}>
									<ClickableImage
										src="/static/images/projects/architecture/others/other_project2_2.jpg"
										caption=""
										onClick={this.handleOpenDialog}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xl={9} md={9} xs={12} style={{ display: "flex", alignItems: "center" }}>
							<div>
								<h2>Calder Museum</h2>
								<p>Created in DVC's ARCHI-121 class, instructed by Daniel Abbott in 2014.</p>
								<p>
									This project is a museum that is used to harbor Alexander Calder's artwork. Inspired by Calder's <em>mobile</em> sculptures,
									this museum takes a curved form that is inspired by drawings of animals and other organisms. The curved,
									sweeping form creates a courtyard that becomes the place where people can gather and sit around in the cafe.
								</p>
							</div>
						</Grid>
						<Grid item xl={3} md={3} xs={12} style={{ display: "flex", alignItems: "center" }}>
							<ClickableImage
								src="/static/images/projects/architecture/others/other_project3_1.jpg"
								caption=""
								onClick={this.handleOpenDialog}
							/>
						</Grid>
						<Grid item xl={9} md={9} xs={12} style={{ display: "flex", alignItems: "center" }}>
							<div>
								<h2>Steel Bridge</h2>
								<p>Created in collaboration with Juan Nieto, Stefani Johan, and Stephanie Richard in UC Berkeley's ARCH-160 class, instructed by Dana Buntrock in 2016.</p>
								<p>
									This project is about creating a metal bridge that is strong enough to hold 1 person on top of it, while also weighing less than 25 lbs, 
									and aesthetically pleasing. Golden Gate Bridge became an inspiration for this project as it is a suspension bridge. 
									Suspension bridges are known to be remarkably efficient.
								</p>
								<p>
									The resulting project is a bridge that weighs 22 lbs that is constructed using sheet metal, metal cable, and tube metal. 
									These metal components are connected together using hardwares, spot welds, and also linear welding. When tested, 
									this bridge turned out to be much stronger than it appeared to be. This bridge can hold up to 4 adult humans!
								</p>
							</div>
						</Grid>
						<Grid item xl={3} md={3} xs={12} style={{ display: "flex", alignItems: "center" }}>
							<Grid container spacing={2}>
								<Grid item xl={6} md={6} xs={12}>
									<ClickableImage
										src="/static/images/projects/architecture/others/other_project4_1.jpg"
										caption=""
										onClick={this.handleOpenDialog}
									/>
								</Grid>
								<Grid item xl={6} md={6} xs={12}>
									<ClickableImage
										src="/static/images/projects/architecture/others/other_project4_2.jpg"
										caption=""
										onClick={this.handleOpenDialog}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xl={9} md={9} xs={12} style={{ display: "flex", alignItems: "center" }}>
							<div>
								<h2>Wooden Tower</h2>
								<p>Created in collaboration with Stefani Johan and Stephanie Richard in UC Berkeley's ARCH-160 class, instructed by Dana Buntrock in 2016.</p>
								<p>
									This project is about creating a wooden tower that can be assembled and disassembled on the site. The tower had to be 12 feet tall, consist of a cantilever, 
									and its' individual parts must no longer than 3 feet.
								</p>
								<p>
									The system of this tower is inspired by the Schroeder house, because each parts of the tower is seen as a planar surface. 
									As these planes come together, the combined planes gains strength and becomes more spatial. 
									The result is a tower that is built with 0.5 inch thick plywood that can be assembled into a dynamic looking tower.
								</p>
							</div>
						</Grid>
					</Grid>
				</ProjectLayout>
				<Dialog maxWidth="xl" open={isDialogOpen} onClose={this.handleCloseDialog}>
					<ClickableImage
						src={selectedImageSrc}
						caption=""
						onClick={this.handleCloseDialog}
					/>
				</Dialog>
			</Fragment>
		)
	}
}

export default OtherArchitectureProjectPage