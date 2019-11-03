import { Component, Fragment, createRef } from "react"

import { Dialog, Hidden } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"

import ClickableImage from "../../../components/ClickableImage"
import ProjectLayout from "../../../components/Layout/ProjectLayout"
import ImagePanels from "../../../components/ImagePanels"
import SectionNavigation from "../../../components/Navigation/SectionNavigation"

const screenshotImageData = [
	{ imageSrc: "/static/images/projects/computing/dokcbt/screenshot_landing.png", caption: "Landing Page" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/screenshot_dashboard.png", caption: "Dashboard Page" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/screenshot_tryout_simulation.png", caption: "Tryout Simulation Page" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/screenshot_tryout_analysis.png", caption: "Tryout Analysis Page" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/screenshot_tryout_discussion.png", caption: "Tryout Discussion Page" }
]

const socialMediaImageData = [
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_1.png", caption: "" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_2.png", caption: "" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_3.png", caption: "" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_4.png", caption: "" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_5.png", caption: "" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_6.png", caption: "" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_7.png", caption: "" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_8.png", caption: "" },
	{ imageSrc: "/static/images/projects/computing/dokcbt/socmed_9.png", caption: "" }
]

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

class InteractiveAutoPlaySwipableViews extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentContentIndex: 0
		}
	}

	handleChangeContentIndex = (index) => {
		this.setState({ currentContentIndex: index })
	}

	render() {
		const { content } = this.props
		const { currentContentIndex } = this.state

		return (
			<Fragment>
				<AutoPlaySwipeableViews
					onChangeIndex={this.handleChangeContentIndex}
					enableMouseEvents
					style={{
						boxShadow: "5px 5px 5px 1px #333"
					}}
				>
					{content.map((entry, index) => {
						const { imageSrc } = entry

						return (
							<img src={imageSrc} style={{ width: "100%" }} key={index} />
						)
					})}
				</AutoPlaySwipeableViews>
				{content && content.length > 0 && content[currentContentIndex] && content[currentContentIndex].caption
					? <p style={{ textAlign: "center" }}>{content[currentContentIndex].caption}</p>
					: null
				}
			</Fragment>
		)
	}
}

const ProjectSection = ({ children }) => {
	return (
		<div style={{ marginBottom: "2rem" }}>{children}</div>
	)
}

class DokCBTComputingProjectPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedImageSrc: "",
			isDialogOpen: false
		}
		this.introRef = createRef()
		this.screenshotRef = createRef()
		this.socmedRef = createRef()
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
					projectTitle="dokCBT"
					projectDescription={`This project began as an idea to alleviate the stress experienced by prospective medical doctor graduates in their journey to licensure.
						This website is created to help the medical students to prepare for this exam. As of today, the website administers accurate examination simulations, 
						composed with the latest problem set and thorough answer discussions, so that students can understand medical concepts with ease.`}
					projectKeywords="project, web, development, application, dokcbt, andreas, wangsanata"
					projectImageURL="/static/images/projects/computing/dokcbt/screenshot_landing.png"
				>
					<div style={{ marginTop: "1rem", marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
						<img src="/static/images/projects/computing/dokcbt/logo_black.png" style={{ height: "2rem" }} ref={this.introRef} />
					</div>
					<ProjectSection>
						<InteractiveAutoPlaySwipableViews content={screenshotImageData} />
						<h2>Description</h2>
						<p>
							Created in collaboration with Iryanto Jaya, Jonathan Jones, and Yosua "Yosbi". Website: <a href="https://www.dokcbt.com">www.dokcbt.com</a>
						</p>
						<p>
							This project began as an idea to alleviate the stress experienced by prospective medical doctor graduates in their journey to licensure.
							In the end of Indonesian medical doctor training, every student has to face a difficult computer-based examination.
							The examination is notorious for having a low passing rate as there is a very short amount of time given to complete the test, 
							and that students were not used to a computer-based examination interface.
							This website is created to help the medical students to prepare for this exam. As of today, the website administers accurate examination simulations, 
							composed with the latest problem set and thorough answer discussions, so that students can understand medical concepts with ease.
						</p>
					</ProjectSection>
					<ProjectSection>
						<h2 ref={this.screenshotRef}>Screenshots</h2>
						<ImagePanels
							images={screenshotImageData}
							xl={4}
							md={4}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
					</ProjectSection>
					<ProjectSection>
						<h2 ref={this.socmedRef}>Social Media Design</h2>
						<ImagePanels
							images={socialMediaImageData}
							xl={4}
							md={4}
							xs={12}
							onImageClick={this.handleOpenDialog}
						/>
					</ProjectSection>
					<ProjectSection>
						<h2 ref={this.contribRef}>Contributions</h2>
						<p>My contributions in this project are:</p>
						<ul>
							<li>Technology lead</li>
							<li>Front-end & back-end development</li>
							<li>Web architecture infrastructure design</li>
							<li>DevOps</li>
							<li>Graphic & web design</li>
						</ul>
					</ProjectSection>
					<Hidden smDown>
						<SectionNavigation
							sections={
								[
									{ name: "Introduction", ref: this.introRef },
									{ name: "Screenshots", ref: this.screenshotRef },
									{ name: "Social Media", ref: this.socmedRef },
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

export default DokCBTComputingProjectPage