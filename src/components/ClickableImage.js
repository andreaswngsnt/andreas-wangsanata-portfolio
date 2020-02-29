const ClickableImage = (props) => {
	const { src, caption, onClick } = props

	const onImageClick = (event) => {
		event.preventDefault()
		if (onClick) {
			onClick(src)
		}
	}

	return (
		<img
			onClick={onImageClick}
			src={src ? src : ""}
			alt={caption ? caption : ""}
			style={{ width: "100%", cursor: "pointer" }}
		/>
	)
}

export default ClickableImage