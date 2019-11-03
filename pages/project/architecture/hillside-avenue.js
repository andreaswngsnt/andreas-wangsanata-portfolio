import { Component, Fragment, createRef } from "react"

import Dialog from "@material-ui/core/Dialog"
import Hidden from "@material-ui/core/Hidden"

import ClickableImage from "../../../components/ClickableImage"
import ProjectLayout from "../../../components/Layout/ProjectLayout"
import ImagePanels from "../../../components/ImagePanels"
import SectionNavigation from "../../../components/Navigation/SectionNavigation"

class HillsideAvenueArchitectureProject extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedImageSrc: "",
			isDialogOpen: false
		}
		this.introRef = createRef()
		this.drawingRef = createRef()
		this.contribRef = createRef()
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
				<ProjectLayout
					projectTitle="Hillside Avenue"
					projectDescription={`This project is a residential construction located on the scenic hills of Los Angeles. 
						As a luxurious dwelling for a family, this house has many features that makes it one of a kind in this neighborhood.`}
					projectKeywords="project, residential, hillside, avenue, andreas, wangsanata"
					projectImageURL="/static/images/projects/architecture/hillside-avenue/rendering_1.jpg"
				>
					<h1
						ref={this.introRef}
						style={{
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: "Roboto Slab"
						}}
					>
						Hillside Avenue
					</h1>

					<div style={{ marginBottom: "2rem" }}>
						<ClickableImage
							src="/static/images/projects/architecture/hillside-avenue/rendering_1.jpg"
							caption=""
							onClick={this.handleOpenDialog}
						/>
						<h2>Description</h2>
						<p>
							Worked on this project when employed under <a href="https://www.tmda.com">TMDA</a>.
						</p>
						<p>
							This project is a residential construction located on the scenic hills of Los Angeles. 
							As a luxurious dwelling for a family, this house has many features that makes it one of a kind in this neighborhood.
							The direct view of the city, the swimming pool deck, the spacious master bedroom, and natural lighting makes this house truly special.
						</p>
					</div>

					<div style={{ marginBottom: "2rem" }}>
						<h2 ref={this.drawingRef}>Drawings</h2>
						<h3>Renderings</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/hillside-avenue/rendering_1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/hillside-avenue/rendering_2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/hillside-avenue/rendering_3.jpg", caption: "" }
								]
							}
							xl={4}
							md={4}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
					</div>

					<div style={{ marginBottom: "2rem" }}>
						<h2 ref={this.contribRef}>Contributions</h2>
						<p>My contributions in this project are:</p>
						<ul>
							<li>Construction Drawings</li>
							<li>BIM & 3D Modelling</li>
							<li>Presentation Preparations</li>
							<li>Computer Renderings</li>
						</ul>
						<p><em>For recruiters: Feel free to contact me for more information on these activities.</em></p>
					</div>

					<Hidden smDown>
						<SectionNavigation
							sections={
								[
									{ name: "Introduction", ref: this.introRef },
									{ name: "Drawings", ref: this.drawingRef },
									{ name: "Contributions", ref: this.contribRef }
								]
							}
						/>
					</Hidden>

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

export default HillsideAvenueArchitectureProject