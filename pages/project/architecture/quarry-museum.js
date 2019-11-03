import { Component, Fragment, createRef } from "react"

import Dialog from "@material-ui/core/Dialog"
import Hidden from "@material-ui/core/Hidden"
import Grid from "@material-ui/core/Grid"

import ClickableImage from "../../../components/ClickableImage"
import ProjectLayout from "../../../components/Layout/ProjectLayout"
import ImagePanels from "../../../components/ImagePanels"
import SectionNavigation from "../../../components/Navigation/SectionNavigation"

class QuarryMuseumArchitectureProjectPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedImageSrc: "",
			isDialogOpen: false
		}
		this.introRef = createRef()
		this.drawingRef = createRef()
		this.modelRef = createRef()
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
					projectTitle="Quarry Museum"
					projectDescription={`Based on an abandoned quarry filled with water, this museum showcases the impact of human activity on the landscape.
						A quarry is a site where materials are displaced from the site into another one. Therefore the concept of this museum is displacement.
						This displacement is represented in the building by creating forms that look like open containers that becomes the exhibition spaces of the rocks of this geology museum.`}
					projectKeywords="project, academic, quarry, museum, andreas, wangsanata"
					projectImageURL="/static/images/projects/architecture/quarry-museum/quarrymuseum_intro.jpg"
				>
					<h1
						ref={this.introRef}
						style={{
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: "Roboto Slab"
						}}
					>
						Quarry Museum
					</h1>
					<div style={{ marginBottom: "2rem" }}>
						<ClickableImage
							src="/static/images/projects/architecture/quarry-museum/quarrymuseum_intro.jpg"
							caption=""
							onClick={this.handleOpenDialog}
						/>
						<h2>Description</h2>
						<p>
							Created in UC Berkeley's ARCH-100C class, instructed by Rene Davids in 2016.
						</p>
						<p>
							Based on an abandoned quarry filled with water, this museum showcases the impact of human activity on the landscape.
							A quarry is a site where materials are displaced from the site into another one. Therefore the concept of this museum is displacement.
							This displacement is represented in the building by creating forms that look like open containers that becomes the exhibition spaces of the rocks of this geology museum.
						</p>
					</div>
					<div style={{ marginBottom: "2rem" }}>
						<h2 ref={this.drawingRef}> Drawings</h2>
						<h3>Oakland City Analysis</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_map1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_map2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_map3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_map4.jpg", caption: "" }
								]
							}
							xl={3}
							md={3}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Site Plan</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_siteplan.jpg", caption: "" }
								]
							}
							xl={12}
							md={12}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Diagram</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_diagram1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_diagram2.jpg", caption: "" }
								]
							}
							xl={12}
							md={12}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<Grid container spacing={3}>
							<Grid item xl={4} md={4} xs={12}>
								<ClickableImage
									src="/static/images/projects/architecture/quarry-museum/quarrymuseum_diagram3.jpg"
									caption=""
									onClick={this.handleOpenDialog}
								/>
							</Grid>
							<Grid item xl={8} md={8} xs={12}>
								<ClickableImage
									src="/static/images/projects/architecture/quarry-museum/quarrymuseum_diagram4.jpg"
									caption=""
									onClick={this.handleOpenDialog}
								/>
							</Grid>
						</Grid>
						<h3>Renderings</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering4.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering5.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering6.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering7.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering8.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering9.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering10.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering11.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_rendering12.jpg", caption: "" }
								]
							}
							xl={6}
							md={6}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Sections</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_section1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_section2.jpg", caption: "" }
								]
							}
							xl={12}
							md={12}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Floor Plans</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_plan1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_plan2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_plan3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_plan4.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_plan5.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_plan6.jpg", caption: "" }
								]
							}
							xl={4}
							md={4}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
					</div>
					<div>
						<h2 ref={this.modelRef}>Physical Model</h2>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_photo1440_1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_photo1440_2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_photo1440_3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_photo1440_4.jpg", caption: "" }
								]
							}
							xl={6}
							md={6}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
					</div>
					<Hidden smDown>
						<SectionNavigation
							sections={
								[
									{ name: "Introduction", ref: this.introRef },
									{ name: "Drawings", ref: this.drawingRef },
									{ name: "Models", ref: this.modelRef }
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

export default QuarryMuseumArchitectureProjectPage