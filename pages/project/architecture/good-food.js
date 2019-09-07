import { Component, Fragment, createRef } from "react"
import Head from "next/head"

import Dialog from "@material-ui/core/Dialog"
import Hidden from "@material-ui/core/Hidden"

import ClickableImage from "../../../components/ClickableImage"
import ProjectLayout from "../../../components/Layout/ProjectLayout"
import ImagePanels from "../../../components/ImagePanels"
import SectionNavigation from "../../../components/Navigation/SectionNavigation"

class GoodFoodArchitectureProjectPage extends Component {
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
					<title>GoodFood | Andreas Wangsanata</title>
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
						GoodFood
					</h1>
					<div style={{ marginBottom: "2rem" }}>
						<ClickableImage
							src="/static/images/projects/good-food/goodfood_intro.jpg"
							caption=""
							onClick={this.handleOpenDialog}
						/>
						<h2>Description</h2>
						<p>
							Created in UC Berkeley's ARCH-100B class, instructed by Dan Spiegel in 2016.
						</p>
						<p>
							This project is a prototype of a new architectural typology where the architecture is used to educate the public about healthy, good food.
							This building is a hybrid of a public food court, various educational facilities, such as classes and auditorium, and a research facility.
							The dichotomy of these functions is represented in the exterior.
							These various facilities are designed to be placed close and visible to one another so that the public becomes interested in becoming educated about good food consumption.
						</p>
					</div>
					<div style={{ marginBottom: "2rem" }}>
						<h2 ref={this.drawingRef}>Drawings</h2>
						<h3>Diagrams</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/good-food/goodfood_diagram1.jpg", caption: "" }
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
									{ imageSrc: "/static/images/projects/good-food/goodfood_render1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_render2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_render3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_render4.jpg", caption: "" }
								]
							}
							xl={6}
							md={6}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Site Plan</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/good-food/goodfood_siteplan.jpg", caption: "" }
								]
							}
							xl={12}
							md={12}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Sections</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/good-food/goodfood_section1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_section2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_section3.jpg", caption: "" }
								]
							}
							xl={4}
							md={4}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Conceptual Cut</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/good-food/goodfood_conceptualcut.jpg", caption: "" }
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
									{ imageSrc: "/static/images/projects/good-food/goodfood_plan1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_plan2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_plan3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_plan4.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_plan5.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_plan6.jpg", caption: "" }
								]
							}
							xl={4}
							md={4}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
						<h3>Performance Diagram</h3>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/good-food/goodfood_performance.jpg", caption: "" }
								]
							}
							xl={12}
							md={12}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
					</div>
					<div style={{ marginBottom: "2rem" }}>
						<h2 ref={this.modelRef}>Physical Model</h2>
						<ImagePanels
							images={
								[
									{ imageSrc: "/static/images/projects/good-food/goodfood_model1.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_model2.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_model3.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_model4.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_model5.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_model6.jpg", caption: "" },
									{ imageSrc: "/static/images/projects/good-food/goodfood_model7.jpg", caption: "" }
								]
							}
							xl={4}
							md={4}
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

export default GoodFoodArchitectureProjectPage