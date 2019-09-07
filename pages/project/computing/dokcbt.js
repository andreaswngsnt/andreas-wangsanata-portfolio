import { Component, Fragment, createRef } from "react"
import Head from "next/head"

import { Dialog, Hidden, Grid } from "@material-ui/core"

import ClickableImage from "../../../components/ClickableImage"
import ProjectLayout from "../../../components/Layout/ProjectLayout"
import ImagePanels from "../../../components/ImagePanels"
import SectionNavigation from "../../../components/Navigation/SectionNavigation"

const ProjectTitle = ({ children }) => {
	return (
		<h1
			style={{
				marginBottom: "2rem",
				textAlign: "center",
				fontFamily: "Roboto Slab"
			}}
		>
			{children}
		</h1>
	)
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
		return (
			<Fragment>
				<Head>
					<title>DokCBT | Andreas Wangsanata</title>
				</Head>

				<ProjectLayout>
					<ProjectTitle ref={this.introRef}>
						dokCBT
					</ProjectTitle>
					<ProjectSection>
						<ClickableImage
							src="/static/images/projects/computing/dokcbt/main.png"
							caption=""
							onClick={this.handleOpenDialog}
						/>
					</ProjectSection>
				</ProjectLayout>
			</Fragment>
		)
	}
}

export default DokCBTComputingProjectPage