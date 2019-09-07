import { Component, Fragment } from "react"
import Head from "next/head"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import Header from "../components/Header"
import Footer from "../components/Footer"

const EducationText = (props) => {
	const { school, major, degree, location, duration } = props

	return (
		<div style={{ marginBottom: "2rem", fontSize: "1.25rem" }}>
			{school ? <p style={{ margin: "0.25em 0" }}><strong>{school}</strong></p> : null}
			{major ? <p style={{ margin: "0.25em 0" }}>{major}</p> : null}
			{degree ? <p style={{ margin: "0.25em 0" }}>{degree}</p> : null}
			{location ? <p style={{ margin: "0.25em 0" }}>{location}</p> : null}
			{duration ? <p style={{ margin: "0.25em 0" }}>{duration}</p> : null}
		</div>
	)
}

const WorkExperienceText = (props) => {
	const { company, role, duration, responsibilities } = props
	return (
		<div style={{ marginBottom: "2rem", fontSize: "1.25rem" }}>
			{company ? <p style={{ margin: "0.25em 0" }}><strong>{company}</strong></p> : null}
			{role ? <p style={{ margin: "0.25em 0" }}>{role}</p> : null}
			{duration ? <p style={{ margin: "0.25em 0" }}>{duration}</p> : null}
			{responsibilities && responsibilities.length > 0
				? (
					<ul>
						{responsibilities.map((entry, index) => {
							return <li key={index}>{entry}</li>
						})}
					</ul>
				) : null
			}
		</div>
	)
}

class ResumePage extends Component {
	render() {
		return (
			<Fragment>
				<Head>
					<title>Resume | Andreas Wangsanata</title>
				</Head>

				<Header />

				<div style={{ padding: '2em', zIndex: "1", backgroundColor: "#EEEEEE" }}>
					<Grid container justify="center">
						<Grid item xl={8} md={10} xs={12}>
							<h1 style={{ fontFamily: "Roboto Slab" }}>Resume</h1>
							<Grid container spacing={6}>
								<Grid item xl={6} md={6} xs={12}>
									<div style={{ marginBottom: "3rem" }}>
										<h2>Summary</h2>
										<img src="/static/images/resume/resume_profile.jpg" style={{ width: "100%", marginBottom: "2rem" }} />
										<blockquote style={{ margin: "1rem", paddingLeft: "1rem", borderLeft: "5px solid #444444", fontSize: "1.25rem" }}>
											<p>
												An architecture graduate from University of California, Berkeley, with some work experience in the architecture industry.
												Out of interest in technology, taught himself full-stack web development, and created an Indonesian internet educational startup - dokCBT.
											</p>
										</blockquote>
									</div>
									<div>
										<h2>Education</h2>
										<EducationText
											school="University of California, Berkeley"
											major="Architecture"
											degree="Awarded Bachelor of Arts in Architecture, Honors"
											location="Berkeley, California"
											duration="August 2015 - December 2017"
										/>
										<EducationText
											school="Diablo Valley College"
											major="Architecture"
											location="Pleasant Hill, California"
											duration="June 2013 - May 2015"
										/>
									</div>
								</Grid>
								<Grid item xl={6} md={6} xs={12}>
									<div style={{ marginBottom: "3rem" }}>
										<h2>Work Experience</h2>
										<WorkExperienceText
											company="dokCBT"
											role="Chief Technology Officer & Co-founder"
											duration="December 2018 - present"
											responsibilities={[
												"Lead a team of three software engineers to finish the end product.",
												"Designed the web architecure of the project using the latest tech stack.",
												"Involved in programming the front-end, back-end, and dev-ops aspects of the project.",
												"Contributed in the marketing campaign of the product.",
												"Designed some of the graphics to be used in the site."
											]}
										/>
										<WorkExperienceText
											company="Tim Murphy Design Associates"
											role="Architecural Designer"
											duration="January 2018 - December 2018"
											responsibilities={[
												"Created drawings for architectural permit set and construction.",
												"Made 3D models, renderings and finish packages for presentations.",
												"Ensured that the design meets the current building code through code research.",
												"Designed concepts for a restaurant and commercial project.",
												"Selected specifications for finishes, lighting, and appliances.",
												"Converted previous CAD standards to Revit BIM assets."
											]}
										/>
										<WorkExperienceText
											company="Tim Murphy Design Associates"
											role="Intern"
											duration="June 2016 - August 2016"
											responsibilities={[
												"Assisted in the creation of architectural permit set and construction drawings.",
												"Created renderings and physical models for presentation."
											]}
										/>
									</div>
								</Grid>
								<Grid item xl={12} md={12} xs={12}>
									<h2>Skills</h2>
									<Grid container>
										<Grid item xl={12} md={12} xs={12}>
											<h3>General Skills</h3>
											<ul style={{ fontSize: "1.25em" }}>
												<li>Project Management</li>
												<li>Microsoft Office</li>
											</ul>
										</Grid>
										<Grid item xl={12} md={12} xs={12}>
											<h3>Technical Skills</h3>
											<Grid container>
												<Grid item xl={12} md={12} xs={12}>
													<h4>Software Engineering</h4>
												</Grid>
												<Grid item xl={3} md={3} xs={12}>
													<p>Languages</p>
													<ul style={{ fontSize: "1.25em" }}>
														<li>HTML</li>
														<li>CSS</li>
														<li>JavaScript</li>
														<li>Python</li>
														<li>MatLab</li>
													</ul>
												</Grid>
												<Grid item xl={3} md={3} xs={12}>
													<p>Frameworks</p>
													<ul style={{ fontSize: "1.25em" }}>
														<li>NodeJS</li>
														<li>jQuery</li>
														<li>ReactJS</li>
														<li>NextJS</li>
														<li>ExpressJS</li>
														<li>Django</li>
													</ul>
												</Grid>
												<Grid item xl={3} md={3} xs={12}>
													<p>Other Tools</p>
													<ul style={{ fontSize: "1.25em" }}>
														<li>Git</li>
														<li>GitHub</li>
														<li>Linux</li>
														<li>MongoDB</li>
														<li>PostgreSQL</li>
														<li>Amazon Web Services</li>
													</ul>
												</Grid>
												<Grid item xl={3} md={3} xs={12}>
													<p>Concepts</p>
													<ul style={{ fontSize: "1.25em" }}>
														<li>Full-Stack Web Development</li>
														<li>Cloud Computing</li>
														<li>Machine Learning</li>
													</ul>
												</Grid>
												<Grid item xl={12} md={12} xs={12}>
													<h4>Construction</h4>
												</Grid>
												<Grid item xl={3} md={3} xs={12}>
													<p>Softwares</p>
													<ul style={{ fontSize: "1.25em" }}>
														<li>Revit</li>
														<li>Rhino3D</li>
														<li>Sketchup</li>
														<li>V-Ray</li>
														<li>AutoCAD</li>
														<li>Adobe Creative Cloud</li>
													</ul>
												</Grid>
												<Grid item xl={3} md={3} xs={12}>
													<p>Other Skills</p>
													<ul style={{ fontSize: "1.25em" }}>
														<li>Construction Drawings</li>
														<li>Building Code Research</li>
														<li>Architectural Design</li>
														<li>3D Modelling</li>
														<li>Physical Model Fabrication</li>
													</ul>
												</Grid>
												<Grid item xl={12} md={12} xs={12}>
													<h4>Design</h4>
												</Grid>
												<Grid item xl={3} md={3} xs={12}>
													<ul style={{ fontSize: "1.25em" }}>
														<li>Graphic Design</li>
														<li>UI/UX Design</li>
													</ul>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
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

export default ResumePage