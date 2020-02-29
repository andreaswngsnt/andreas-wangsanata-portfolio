import Grid from "@material-ui/core/Grid"

import ClickableImage from "./ClickableImage"

const ImagePanels = (props) => {
	const { images, xl, md, xs, onImageClick } = props

	return (
		<Grid container spacing={3}>
			{images.map((entry, index) => {
				const { imageSrc, caption } = entry

				return (
					<Grid item xl={xl} md={md} xs={xs} key={index}>
						<ClickableImage
							src={imageSrc}
							caption={caption}
							onClick={onImageClick}
						/>
					</Grid>
				)
			})}
		</Grid>
	)
}

export default ImagePanels