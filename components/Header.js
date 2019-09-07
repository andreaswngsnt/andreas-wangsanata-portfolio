import { Component } from "react"
import Link from "next/link"

import Hidden from "@material-ui/core/Hidden"

import Menu from "@material-ui/icons/Menu"

import DrawerNavigation from "./Navigation/DrawerNavigation"

const logoImageSrc = "/static/icons/logo_large.png"

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isDrawerOpen: false
		}
	}

	toggleDrawer = (event) => {
		const { isDrawerOpen } = this.state
		this.setState({ isDrawerOpen: !isDrawerOpen })
	}

	render() {
		const { isDrawerOpen } = this.state

		return (
			<header
				style={{
					top: "0",
					left: "0",
					width: "100%",
					position: "sticky",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#444444",
					color: "#a6a6a6",
					zIndex: "100"
				}}
			>
				<div
					style={{
						margin: "0.25rem 1.25rem",
						display: "flex",
						alignItems: "center"
					}}
				>
					<div style={{ marginRight: "1rem" }}>
						<Link href="/">
							<a>
								<img
									src={logoImageSrc}
									style={{
										width: "2.5rem"
									}}
									alt="logo"
								/>
							</a>
						</Link>
					</div>
					<div>
						<Link href="/">
							<a style={{ textDecoration: "none", color: "#a6a6a6" }}>
								<p>Andreas Wangsanata</p>
								<Hidden smDown>
									<p style={{ fontSize: "0.75rem" }}>Web Developer, Architectural Designer</p>
								</Hidden>
							</a>
						</Link>
					</div>
				</div>
				<div
					style={{
						margin: "0.25rem 1.25rem",
						display: "flex",
						alignItems: "center"
					}}
				>
					<Hidden smDown>
						<a style={{ cursor: "pointer", marginRight: "1em" }} onClick={this.toggleDrawer}>
							Navigation
						</a>
					</Hidden>
					<Menu style={{ cursor: "pointer" }} onClick={this.toggleDrawer} />
				</div>
				<DrawerNavigation
					open={isDrawerOpen}
					onClose={this.toggleDrawer}
				/>
			</header>
		)
	}
}

export default Header