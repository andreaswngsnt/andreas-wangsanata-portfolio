import { Component, Fragment } from "react"
import Link from "next/link"
import Head from "next/head"

import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import FullBanner from "../components/FullBanner"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ProjectCard = (props) => {
	const { title, subtitle, description, imageSrc, linkHref, size } = props

	const styles = {
		paper: {
			padding: "1em",
			boxShadow: "5px 5px 5px 1px #333"
		},
		image: { width: "100%" },
		title: {
			fontFamily: "Roboto Slab"
		},
		link: {
			textDecoration: "none",
			color: "#000000"
		}
	}

	if (size && size === "lg") {
		return (
			<Paper square={true} style={styles.paper}>
				<Grid container spacing={3}>
					<Grid item xl={4} md={4} xs={12}>
						<img src={imageSrc} style={styles.image} />
					</Grid>
					<Grid item xl={8} md={8} xs={12}>
						<h3 style={styles.title}>
							<Link href={linkHref}>
								<a style={styles.link}>
									{title}
								</a>
							</Link>
						</h3>
						<p>{subtitle}</p>
						<p>{description}</p>
						<Link href={linkHref}>
							<a>
								<Button variant="outlined">
									See More
								</Button>
							</a>
						</Link>
					</Grid>
				</Grid>
			</Paper>
		)
	} else {
		return (
			<Paper square={true} style={styles.paper}>
				<img src={imageSrc} style={styles.image} />
				<h3 style={styles.title}>
					<Link href={linkHref}>
						<a style={styles.link}>
							{title}
						</a>
					</Link>
				</h3>
				<p>
					{description.length > 200 ? description.substring(0, 200) + "..." : description}
				</p>
				<Link href={linkHref}>
					<a>
						<Button variant="outlined">
							See More
						</Button>
					</a>
				</Link>
			</Paper>
		)
	}
}

const SectionCategoryTitle = ({ children }) => {
	return (
		<h1 style={{ fontFamily: "Roboto Slab" }}>
			{children}
		</h1>
	)
}

const SectionTitle = ({ children }) => {
	return (
		<h2 style={{ fontFamily: "Roboto Slab" }}>
			{children}
		</h2>
	)
}

const SubsectionTitle = ({ children }) => {
	return <h3>{children}</h3>
}

class HomePage extends Component {
	render() {
		const pageTitle = "Home | Andreas Wangsanata"
		const pageDescription = "Here is my resume page that displays my skills, work experience, and education."
		const pageKeywords = "personal, website, home, andreas, wangsanata"
		const pageImageURL = `${process.env.hostname}/static/images/default_site_image.jpg`

		return (
			<Fragment>
				<Head>
					<title>{pageTitle}</title>
					<meta name='description' content={pageDescription} />
					<meta name='keywords' content={pageKeywords} />
					<meta property='og:title' content={pageTitle} />
					<meta property='og:description' content={pageDescription} />
					<meta property='og:image' content={pageImageURL} />
				</Head>

				<Header />

				<FullBanner
					bannerContent={
						[
							{ title: "Pattern", imageSrc: "/static/images/projects/architecture/pattern/photo_1.jpg", linkHref: "/project/architecture/pattern" },
							{ title: "Arch-Gallery", imageSrc: "/static/images/projects/architecture/arch-gallery/archgallery_intro.jpg", linkHref: "/project/architecture/arch-gallery" },
							{ title: "Quarry Museum", imageSrc: "/static/images/projects/architecture/quarry-museum/quarrymuseum_intro.jpg", linkHref: "/project/architecture/quarry-museum" },
							{ title: "GoodFood", imageSrc: "/static/images/projects/architecture/good-food/goodfood_intro.jpg", linkHref: "/project/architecture/good-food" }
						]
					}
				/>

				<div style={{ padding: '2em', zIndex: "1", backgroundColor: "#EEEEEE" }}>
					<Grid container justify="center">
						<Grid item xl={8} md={10} xs={12}>
							<SectionCategoryTitle>
								Project Showcases
							</SectionCategoryTitle>
							<SectionTitle>
								Computing
							</SectionTitle>
							<Grid container spacing={3} style={{ marginBottom: "2rem" }}>
								<Grid item xl={12} md={12} xs={12}>
									<ProjectCard
										title="dokCBT"
										subtitle={
											<Fragment>
												Web Development | <a href="https://www.dokcbt.com">www.dokcbt.com</a>
											</Fragment>
										}
										description={
											`This project is an education technology website that is used to help prospective medical doctors to pass their licensure exam.
											The features in this website include a real-time exam simulation with a thorough explanation.`
										}
										imageSrc="/static/images/projects/computing/dokcbt/main.png"
										linkHref="/project/computing/dokcbt"
										size="lg"
									/>
								</Grid>
							</Grid>
							<SectionTitle>
								Architecture
							</SectionTitle>
							<SubsectionTitle>Career Projects</SubsectionTitle>
							<Grid container spacing={3} style={{ marginBottom: "2rem" }}>
								<Grid item xl={12} md={12} xs={12}>
									<ProjectCard
										title="Pattern"
										subtitle={
											<Fragment>
												Location: San Francisco | Company: <a href="https://www.tmda.com">TMDA</a>
											</Fragment>
										}
										description={
											`The site of this project is a four-storied former factory space located in San Francisco.
										This space was then redesigned to be used for an office for a renewable energy company named Pattern Energy.
										In order to reflect the values of the company, the space was designed using sustainable and natural materials.`
										}
										imageSrc="/static/images/projects/architecture/pattern/photo_1.jpg"
										linkHref="/project/architecture/pattern"
										size="lg"
									/>
								</Grid>
								<Grid item xl={12} md={12} xs={12}>
									<ProjectCard
										title="Hillside Avenue"
										subtitle={
											<Fragment>
												Location: Los Angeles | Company: <a href="https://www.tmda.com">TMDA</a>
											</Fragment>
										}
										description={
											`This project is a residential construction located on the scenic hills of Los Angeles. 
										As a luxurious dwelling for a family, this house has many features that makes it one of a kind in this neighborhood.
										The direct view of the city, the swimming pool deck, the spacious master bedroom, and natural lighting makes this house truly special.`
										}
										imageSrc="/static/images/projects/architecture/hillside-avenue/rendering_1.jpg"
										linkHref="/project/architecture/hillside-avenue"
										size="lg"
									/>
								</Grid>
							</Grid>
							<SubsectionTitle>Academic Projects</SubsectionTitle>
							<Grid container spacing={3}>
								<Grid item xl={3} md={3} xs={12}>
									<ProjectCard
										title="Arch-Gallery"
										description={
											`This gallery is located on a triangular site in Oakland and is inspired by the classical barrel roof typology.
										The private realm of this building is created by using the barrel roof typology classically to create a vast closed space.
										The public realm is created by using the typology in a contemporary manner to create avenues that intersect one another that makes public spaces that feel intimate.`
										}
										imageSrc="/static/images/index_sect1_1.jpg"
										linkHref="/project/architecture/arch-gallery"
										size="sm"
									/>
								</Grid>
								<Grid item xl={3} md={3} xs={12}>
									<ProjectCard
										title="Quarry Museum"
										description={
											`Based on an abandoned quarry filled with water, this museum showcases the impact of human activity on the landscape. 
										A quarry is a site where materials are displaced from the site into another one. Therefore the concept of this museum is displacement. 
										This displacement is represented in the building by creating forms that look like open containers that becomes the exhibition spaces of the rocks of this geology museum.`
										}
										imageSrc="/static/images/index_sect1_2.jpg"
										linkHref="/project/architecture/quarry-museum"
										size="sm"
									/>
								</Grid>
								<Grid item xl={3} md={3} xs={12}>
									<ProjectCard
										title="GoodFood"
										description={
											`This project is a prototype of a new architectural typology where the architecture is used to educate the public about healthy, good food. 
										This building is a hybrid of a public food court, various educational facilities, such as classes and auditorium, and a research facility. 
										The dichotomy of these functions is represented in the exterior. 
										These various facilities are designed to be placed close and visible to one another so that the public becomes interested in becoming educated about good food consumption.`
										}
										imageSrc="/static/images/index_sect1_3.jpg"
										linkHref="/project/architecture/good-food"
										size="sm"
									/>
								</Grid>
								<Grid item xl={3} md={3} xs={12}>
									<ProjectCard
										title="Other Projects"
										description={
											`Other projects that are related to architecture.`
										}
										imageSrc="/static/images/index_sect1_4.jpg"
										linkHref="/project/architecture/others"
										size="sm"
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
				<Footer />
			</Fragment>
		)
	}
}

export default HomePage