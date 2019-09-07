import { Component, Fragment, createRef } from "react"
import Head from "next/head"

import { Dialog, Hidden, Grid } from "@material-ui/core"

import ClickableImage from "../../../components/ClickableImage"
import ProjectLayout from "../../../components/Layout/ProjectLayout"
import ImagePanels from "../../../components/ImagePanels"
import SectionNavigation from "../../../components/Navigation/SectionNavigation"

class ArchGalleryArchitectureProjectPage extends Component {
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
				<Head>
					<title>Arch-Gallery | Andreas Wangsanata</title>
				</Head>
				<ProjectLayout>
					<h1
						ref={this.introRef}
						style={{
							marginBottom: "2rem",
							textAlign: "center",
							fontFamily: "Roboto Slab"
						}}
					>
						Arch-Gallery
					</h1>
					<div style={{ marginBottom: "2rem" }}>
						<ClickableImage
							src="/static/images/projects/architecture/arch-gallery/archgallery_intro.jpg"
							caption=""
							onClick={this.handleOpenDialog}
						/>
						<h2>Description</h2>
						<p>
							Created in collaboration with <a href="http://srichard806.portfoliobox.net/">Stephanie Richard</a> in UC Berkeley's ARCH-100D class,
							instructed by Mete Sonmez in 2017.
						</p>
						<p>
							This project is about the exploration of spaces created by the barrel roof typology.
							In this project, barrel roof is seen as both a form giver and space maker that is linear.
							By understanding barrel roof in this way, it is used to create the primary massing of the building and also the carved avenue spaces.
							The primary massing of this building is created by putting a series of barrel roofs with different scales next to each other in a parallel way to create a continuous form and space that is linear.
							This becomes the private part of the building.
							Another feature of this building is the carved avenue space that is done by subtracting barrel roof volumes that intersects to each other in many directions out of the primary mass.
							The resulting space is a nonlinear network of public spaces that are connected to each other and the surrounding cityscape.
						</p>
					</div>
					<div style={{ marginBottom: "2rem" }}>
						<h2 ref={this.drawingRef}>Drawings</h2>
						<h3>Diagrams</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_diagram.png", caption: "" }
								]
							}
							xl={12}
							md={12}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Renderings</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_4.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_5.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_6.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_7.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_8.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_render600_9.jpg", caption: "" }
								]
							}
							xl={4}
							md={4}
							xs={6}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Oblique Drawings</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_wormeye600_1.png", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_wormeye600_2.png", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_wormeye600_3.png", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_oblique600_1.png", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_oblique600_2.png", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_oblique600_3.png", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_oblique600_4.png", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_oblique600_5.png", caption: "" }
								]
							}
							xl={4}
							md={4}
							xs={6}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Sections</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_section_1.png", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_section_2.png", caption: "" }
								]
							}
							xl={12}
							md={12}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Floor Plans</h3>
						<Grid container spacing={3}>
							<Grid item xl={12} md={12} xs={12}>
								<ClickableImage
									src="/static/images/projects/architecture/arch-gallery/archgallery_plan_1.png"
									caption=""
									onClick={this.handleOpenDialog}
								/>
							</Grid>
							<Grid item xl={4} md={4} xs={12}>
								<ClickableImage
									src="/static/images/projects/architecture/arch-gallery/archgallery_plan_2.png"
									caption=""
									onClick={this.handleOpenDialog}
								/>
							</Grid>
							<Grid item xl={4} md={4} xs={12}>
								<ClickableImage
									src="/static/images/projects/architecture/arch-gallery/archgallery_plan_3.png"
									caption=""
									onClick={this.handleOpenDialog}
								/>
							</Grid>
							<Grid item xl={4} md={4} xs={12}>
								<ClickableImage
									src="/static/images/projects/architecture/arch-gallery/archgallery_plan_4.png"
									caption=""
									onClick={this.handleOpenDialog}
								/>
							</Grid>
						</Grid>
					</div>
					<div>
						<h2 ref={this.modelRef}>Physical Model</h2>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_4.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_5.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_6.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_7.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_8.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_photo600_9.jpg", caption: "" }
								]
							}
							xl={4}
							md={4}
							xs={6}
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

export default ArchGalleryArchitectureProjectPage