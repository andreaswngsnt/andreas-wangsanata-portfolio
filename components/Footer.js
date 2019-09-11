import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
	return (
		<footer
			style={{
				padding: "2rem",
				background: "#444444",
				textAlign: "center"
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center"
				}}
			>
				<div style={{ margin: "1em" }}>
					<a href="https://www.linkedin.com/in/andreaswngsnt/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{ width: "2em", height: "2em", color: "#FFFFFF" }} /></a>
				</div>
				<div style={{ margin: "1em" }}>
					<a href="https://www.instagram.com/andreaswngsnt" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{ width: "2em", height: "2em", color: "#FFFFFF" }} /></a>
				</div>
				<div style={{ margin: "1em" }}>
					<a href="mailto: andreaswngsnt@berkeley.edu"><FontAwesomeIcon icon={faEnvelope} style={{ width: "2em", height: "2em", color: "#FFFFFF" }} /></a>
				</div>
			</div>
			<div
				style={{
					color: "#bbb",
					margin: "0 0 2rem 0",
					padding: "0",
					textAlign: "center"
				}}
			>
				Copyright &copy; {new Date().getFullYear()}. Andreas Wangsanata.
				</div>
		</footer>
	)
}

export default Footer