import { Component, Fragment, createRef } from "react"

import Dialog from "@material-ui/core/Dialog"
import Hidden from "@material-ui/core/Hidden"

import ClickableImage from "../../../components/ClickableImage"
import ProjectLayout from "../../../components/Layout/ProjectLayout"
import ImagePanels from "../../../components/ImagePanels"
import SectionNavigation from "../../../components/Navigation/SectionNavigation"

class PatternArchitectureProjectPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedImageSrc: "",
			isDialogOpen: false
		}
		this.introRef = createRef()
		this.photoRef = createRef()
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
					projectTitle="Pattern"
					projectDescription={`The site of this project is a four-storied former factory space located in San Francisco.
						This space was then redesigned to be used for an office for a renewable energy company named Pattern Energy.`}
					projectKeywords="project, commercial, pattern, energy, andreas, wangsanata"
					projectImageURL="/static/images/projects/architecture/pattern/photo_1.jpg"
				>
					<h1
						ref={this.introRef}
						style={{
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: "Roboto Slab"
						}}
					>
						Pattern
					</h1>

					<div style={{ marginBottom: "2rem" }}>
						<ClickableImage
							src="/static/images/projects/architecture/pattern/photo_1.jpg"
							caption=""
							onClick={this.handleOpenDialog}
						/>
						<h2>Description</h2>
						<p>
							Worked on this project when employed under <a href="https://www.tmda.com">TMDA</a>.
						</p>
						<p>
							The site of this project is a four-storied former factory space located in San Francisco.
							This space was then redesigned to be used for an office for a renewable energy company named Pattern Energy.
							In order to reflect the values of the company, the space was designed using sustainable and natural materials.
							Natural lighting was also employed in this project to make the space lighter without using additional energy during the day.
						</p>
					</div>

					<div style={{ marginBottom: "2rem" }}>
						<h2 ref={this.photoRef}>Photographs</h2>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_4.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_5.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_6.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_7.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_8.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/photo_9.jpg", caption: "" }
								]
							}
							xl={4}
							md={4}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
					</div>

					<div style={{ marginBottom: "2rem" }}>
						<h2 ref={this.drawingRef}>Drawings</h2>
						<h3>Renderings</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/pattern/rendering_1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/rendering_2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/rendering_3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/rendering_4.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/pattern/rendering_5.jpg", caption: "" }
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
							<li>Space Planning & Design</li>
							<li>Construction Drawings</li>
							<li>BIM & 3D Modelling</li>
							<li>Project Coordinations</li>
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
									{ name: "Photos", ref: this.photoRef },
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

export default PatternArchitectureProjectPage