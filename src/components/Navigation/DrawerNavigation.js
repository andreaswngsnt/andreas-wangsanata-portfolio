import { Component, Fragment } from "react"
import Link from "next/link"

import { Collapse, Divider, Drawer, List, ListItem, ListItemText } from "@material-ui/core"
import { Close, ExpandMore, ExpandLess } from "@material-ui/icons"

const styles = {
	link: { cursor: "pointer", textDecoration: "none", color: "#a6a6a6" }
}

const menuObject = {
	data: [
		{ name: "Home", linkHref: "/" },
		{ name: "Resume", linkHref: "/resume" },
		{
			name: "Computing",
			children: [
				{ name: "dokCBT", linkHref: "/project/computing/dokcbt" }
			]
		},
		{
			name: "Architecture",
			children: [
				{
					name: "Career Projects",
					children: [
						{ name: "Pattern", linkHref: "/project/architecture/pattern" },
						{ name: "Hillside Avenue", linkHref: "/project/architecture/hillside-avenue" }
					]
				},
				{
					name: "Academic Projects",
					children: [
						{ name: "Arch-Gallery", linkHref: "/project/architecture/arch-gallery" },
						{ name: "Quarry Museum", linkHref: "/project/architecture/quarry-museum" },
						{ name: "GoodFood", linkHref: "/project/architecture/good-food" },
						{ name: "Other Projects", linkHref: "/project/architecture/others" },
					]
				}
			]
		},
		{
			name: "Design",
			children: [
				{ name: "dokYAY", linkHref: "/project/design/dokyay" }
			]
		}
	]
}

const RecursiveListItem = (props) => {
	const { data } = props

	return data.map((entry, index) => {
		if (entry.children) {
			return (
				<CollapsibleListItem
					toggleElement={<p style={styles.link}>{entry.name}</p>}
					hiddenElements={
						<RecursiveListItem data={entry.children} />
					}
					key={index}
				/>
			)
		} else {
			return (
				<ListItem dense={true} key={index}>
					<p>
						{entry.externalLink
							? <a href={entry.linkHref} style={styles.link}>{entry.name}</a>
							: <Link href={entry.linkHref}><a style={styles.link}>{entry.name}</a></Link>
						}
					</p>
				</ListItem>
			)
		}
	})
}

class CollapsibleListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isExpanded: false
		}
	}

	handleToggleExpansion = (event) => {
		const { isExpanded } = this.state
		this.setState({ isExpanded: !isExpanded })
	}

	render() {
		const { toggleElement, hiddenElements } = this.props
		const { isExpanded } = this.state

		return (
			<Fragment>
				<ListItem onClick={this.handleToggleExpansion} dense={true}>
					{toggleElement}
					{isExpanded ? <ExpandLess style={styles.link} /> : <ExpandMore style={styles.link} />}
				</ListItem>
				<Collapse in={isExpanded}>
					{hiddenElements}
				</Collapse>
			</Fragment>
		)
	}
}

const DrawerNavigation = (props) => {
	const { open, onClose } = props

	return (
		<Drawer open={open} onClose={onClose} anchor="right">
			<List
				component="nav"
				style={{
					minHeight: "100vh",
					padding: "2rem",
				}}
			>
				<ListItem style={{ marginBottom: "2rem" }}>
					<Close onClick={onClose} style={styles.link} />
				</ListItem>

				<Divider />

				<RecursiveListItem data={menuObject.data} />
			</List>
		</Drawer>
	)
}

export default DrawerNavigation