import { Component, Fragment } from "react"

import { Button, Grid } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"

import ProjectLayout from "../../../components/Layout/ProjectLayout"

const mockupImageData = [
	{
		imageSrc: "/static/images/projects/design/dokyay/mock_1.png",
		title: "Welcome to dokYAY!",
		explanation: `This project began as an idea to help patients to find the best nearest doctor for them.
			The idea is to create a mobile app that could map the nearest medical practicioners, which would also contain details about the medical practice & user reviews.
			Reservations could also be done in this mobile app, so that patients do not need to spend a lot of time waiting for the doctor.`
	},
	{
		imageSrc: "/static/images/projects/design/dokyay/mock_2.png",
		title: "Healthcare Map",
		explanation: `This is the very first view that users are greeted with. Users can immidiately see where they are right now and see who are practicing medicine around.
			Users can also search for a particular doctor or clinic, and filter the type of doctor specialization or the type of practice (solo or hospital practice).`
	},
	{
		imageSrc: "/static/images/projects/design/dokyay/mock_3.png",
		title: "Health Provider List",
		explanation: `Another important feature on this project is the health provider list. 
			On this list, similar to the previous map, users can see who are practicing medicine around and search for a particular doctor. 
			However, unlike the previous view, users can also sort the order of the providers based on their distance, price, or user ratings.`
	},
	{
		imageSrc: "/static/images/projects/design/dokyay/mock_3a.png",
		title: "Health Provider Detail",
		explanation: `If the user selects a healthcare provider listed on the previous views, the user is then directed to this view. 
			This view gives all the important details of the practicioner, such as their user ratings, educational credentials, location, practicing hours, and many more.`
	},
	{
		imageSrc: "/static/images/projects/design/dokyay/mock_3b.png",
		title: "Health Provider Review",
		explanation: `If the user wants to see the details of the reviews of the doctors, the user navigates from the previous view to this one.`
	},
	{
		imageSrc: "/static/images/projects/design/dokyay/mock_3c.png",
		title: "Health Provider Reservation",
		explanation: `Once the user has decided which doctor is best for them, the user proceed to schedule a meeting with the doctor on this view.
			The user then navigates through the available date and time, and also selects which treatment does he/she wants.`
	},
	{
		imageSrc: "/static/images/projects/design/dokyay/mock_3d.png",
		title: "Remote Check-in",
		explanation: `After the doctor confirmed the user's reservation through another app, the user then has the reservation added to his/her account. 
			If the doctor allows remote check-in and the user have filled all personal information in this app, the user can perform the check-in easily online, 
			and the user is cleared to meet the doctor during the specified time.`
	},
	{
		imageSrc: "/static/images/projects/design/dokyay/mock_4.png",
		title: "Favorite Doctors",
		explanation: `The user can also save their favorite doctor, so that they can meet their doctor more easily for another subsequent visit.`
	}
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

	handleAddContentIndex = (event) => {
		const { content } = this.props
		const { currentContentIndex } = this.state

		const nextContentIndex = currentContentIndex < content.length - 1
			? currentContentIndex + 1
			: 0

		this.handleChangeContentIndex(nextContentIndex)
	}

	handleSubstractContentIndex = (event) => {
		const { content } = this.props
		const { currentContentIndex } = this.state

		const previousContentIndex = currentContentIndex > 0
			? currentContentIndex - 1
			: content.length - 1

		this.handleChangeContentIndex(previousContentIndex)
	}

	render() {
		const { content } = this.props
		const { currentContentIndex } = this.state

		const currentContentTitle = content[currentContentIndex].title
		const currentContentExplanation = content[currentContentIndex].explanation

		return (
			<Grid container spacing={3}>
				<Grid item xl={4} md={4} xs={12}>
					<AutoPlaySwipeableViews
						index={currentContentIndex}
						onChangeIndex={this.handleChangeContentIndex}
						interval={7500}
						enableMouseEvents
					>
						{content.map((entry, index) => {
							const { imageSrc } = entry

							return <img src={imageSrc} style={{ width: "100%" }} key={index}/>
						})}
					</AutoPlaySwipeableViews>
				</Grid>
				<Grid item xl={8} md={8} xs={12} style={{ display: "flex", alignItems: "center" }}>
					<div style={{ width: "100%" }}>
						<h2>{currentContentTitle}</h2>
						<p>{currentContentExplanation}</p>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Button onClick={this.handleSubstractContentIndex} variant="outlined">
								Previous
							</Button>
							<div>
								<p>{currentContentIndex + 1} / {content.length}</p>
							</div>
							<Button onClick={this.handleAddContentIndex} variant="outlined">
								Next
							</Button>
						</div>
					</div>
				</Grid>
			</Grid>
		)
	}
}

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

const DokYAYDesignProjectPage = () => {
	return (
		<Fragment>
			<ProjectLayout
				projectTitle="dokYAY"
				projectDescription={`This project began as an idea to help patients to find the best nearest doctor for them.
					The idea is to create a mobile app that could map the nearest medical practicioners, which would also contain details about the medical practice & user reviews.
					Reservations could also be done in this mobile app, so that patients do not need to spend a lot of time waiting for the doctor.`}
				projectKeywords="project, ui, ux, design, dokyay, andreas, wangsanata"
				projectImageURL="/static/images/projects/design/dokyay/mock_2.png"
			>
				<ProjectTitle>
					dokYAY
				</ProjectTitle>
				<ProjectSection>
					<InteractiveAutoPlaySwipableViews content={mockupImageData} />
				</ProjectSection>
			</ProjectLayout>
		</Fragment>
	)
}

export default DokYAYDesignProjectPage