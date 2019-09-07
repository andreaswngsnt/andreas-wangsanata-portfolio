import Paper from "@material-ui/core/Paper"

const SectionNavigation = (props) => {
	const { sections } = props

	const executeScroll = (event) => (ref) => {
		window.scrollTo({
			left: 0, top: ref.current.offsetTop - 100, behavior: "smooth"
		})
	}

	return (
		<Paper
			square={true}
			style={{
				position: "fixed",
				bottom: "10vh",
				right: "5rem",
				zIndex: "3",
				padding: "1rem",
				boxShadow: "5px 5px 5px 1px #333"
			}}
		>
			{sections.map((entry, index) => {
				const { name, ref } = entry

				return (
					<p style={{ textAlign: "right" }} key={index}>
						<a onClick={event => executeScroll(event)(ref)} style={{ cursor: "pointer" }}>
							{name}
						</a>
					</p>
				)
			})}
		</Paper>
	)
}

export default SectionNavigation