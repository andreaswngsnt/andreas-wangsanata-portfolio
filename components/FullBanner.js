import { Component } from "react"
import Link from "next/link"

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"

class FullBanner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bannerContent: [
				{ title: "Pattern", imageSrc: "/static/images/projects/pattern/photo_1.jpg", linkHref: "/project/architecture/pattern" },
				{ title: "Arch-Gallery", imageSrc: "/static/images/projects/arch-gallery/archgallery_intro.jpg", linkHref: "/project/architecture/arch-gallery" },
				{ title: "Quarry Museum", imageSrc: "/static/images/projects/quarry-museum/quarrymuseum_intro.jpg", linkHref: "/project/architecture/quarry-museum" },
				{ title: "GoodFood", imageSrc: "/static/images/projects/good-food/goodfood_intro.jpg", linkHref: "/project/architecture/good-food" }
			],
			currentBannerIndex: 0
		}
	}

	componentDidMount() {
		this.bannerInvervalFunction = setInterval(() => {
			const { bannerContent, currentBannerIndex } = this.state
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
		const { bannerContent, currentBannerIndex } = this.state
		if (currentBannerIndex < bannerContent.length - 1) {
			this.setState({ currentBannerIndex: currentBannerIndex + 1 })
		} else {
			this.setState({ currentBannerIndex: 0 })
		}
	}

	handleRewindContent = (event) => {
		const { bannerContent, currentBannerIndex } = this.state
		if (currentBannerIndex > 0) {
			this.setState({ currentBannerIndex: currentBannerIndex - 1 })
		} else {
			this.setState({ currentBannerIndex: bannerContent.length - 1 })
		}
	}

	render() {
		const { bannerContent, currentBannerIndex } = this.state

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
						backgroundImage: `url(${bannerContent[currentBannerIndex].imageSrc})`,
						transition: "all 1s"
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
								<Link href={bannerContent[currentBannerIndex].linkHref}>
									<a style={{ textDecoration: "none", color: "#FFFFFF" }}>
										{bannerContent[currentBannerIndex].title}
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