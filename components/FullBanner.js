import { Component } from "react"
import Link from "next/link"

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"

class FullBanner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentBannerIndex: 0
		}
	}

	componentDidMount() {
		this.bannerInvervalFunction = setInterval(() => {
			const { bannerContent } = this.props
			const { currentBannerIndex } = this.state
			const nextBannerIndex = currentBannerIndex + 1
			this.setState({
				currentBannerIndex: currentBannerIndex < bannerContent.length - 1
					? nextBannerIndex
					: 0
			})
		}, 5000)
	}

	componentWillUnmount() {
		clearInterval(this.bannerInvervalFunction)
	}

	handleForwardContent = (event) => {
		const { bannerContent } = this.props
		const { currentBannerIndex } = this.state
		if (currentBannerIndex < bannerContent.length - 1) {
			this.setState({ currentBannerIndex: currentBannerIndex + 1 })
		} else {
			this.setState({ currentBannerIndex: 0 })
		}
	}

	handleRewindContent = (event) => {
		const { bannerContent } = this.props
		const { currentBannerIndex } = this.state
		if (currentBannerIndex > 0) {
			this.setState({ currentBannerIndex: currentBannerIndex - 1 })
		} else {
			this.setState({ currentBannerIndex: bannerContent.length - 1 })
		}
	}

	render() {
		const { bannerContent } = this.props
		const { currentBannerIndex } = this.state

		const title = bannerContent[currentBannerIndex].title
		const backgroundImage = bannerContent[currentBannerIndex].imageSrc
		const linkHref = bannerContent[currentBannerIndex].linkHref

		return (
			<section
				style={{
					padding: 0,
					minHeight: "100vh",
					height: "100vh"
				}}
			>
				<div
					style={{
						height: "100%",
						zIndex: "0",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundAttachment: "fixed",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundImage: `url(${backgroundImage})`,
						transition: "1s ease-out"
					}}
				>
					<div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<div onClick={this.handleRewindContent} style={{ marginLeft: "1rem", padding: "0.1rem", background: "rgba(0, 0, 0, 0.25)", cursor: "pointer" }}>
							<KeyboardArrowLeft style={{ width: "3rem", height: "3rem", color: "#FFFFFF" }} />
						</div>
						<div style={{ padding: "0.25rem 0.5rem", background: "rgba(0, 0, 0, 0.25)" }} >
							<h3 style={{ textAlign: "center", color: "#FFFFFF" }}>Project Showcase</h3>
							<hr />
							<h1 style={{ textAlign: "center", fontSize: "3rem", fontFamily: "Roboto Slab" }}>
								<Link href={linkHref}>
									<a style={{ textDecoration: "none", color: "#FFFFFF" }}>
										{title}
									</a>
								</Link>
							</h1>
						</div>
						<div onClick={this.handleForwardContent} style={{ marginRight: "1rem", padding: "0.1rem", background: "rgba(0, 0, 0, 0.25)", cursor: "pointer" }}>
							<KeyboardArrowRight style={{ width: "3rem", height: "3rem", color: "#FFFFFF" }} />
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default FullBanner