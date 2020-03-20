import { Component, Fragment } from "react"
import { Dialog, Grid, Hidden, CircularProgress } from "@material-ui/core"
import ProjectLayout from "../../../components/Layout/ProjectLayout"

class InsertionSort extends Component {
	constructor(props) {
		super(props)
		this.state = {
			numbers: [5, 2, 4, 6, 1, 3, 10, 9, 7, 4],
			status: "UNSORTED"
		}
	}

	reset = () => {
		this.setState({
			numbers: [5, 2, 4, 6, 1, 3, 10, 9, 7, 4],
			status: "UNSORTED"
		})
	}

	sort = () => {
		const { numbers } = this.state

		this.setState({ status: "IS_SORTING" }, () => {
			let sortedNumbers = [...numbers]

			for (let i = 0; i < sortedNumbers.length - 1; i++) {

				if (sortedNumbers[i + 1] < sortedNumbers[i]) {

					for (let j = 0; j < (i + 1); j++) {

						if (sortedNumbers[j] > sortedNumbers[i + 1]) {

							const movedElement = sortedNumbers[i + 1]
							sortedNumbers.splice(i + 1, 1)
							sortedNumbers.splice(j, 0, movedElement)

							this.setState({ numbers: sortedNumbers })
						}

					}
				}
			}

			this.setState({
				numbers: sortedNumbers,
				status: "SORTED"
			})
		})
	}

	renderStatus = () => {
		const { status } = this.state

		switch (status) {
			case "UNSORTED": {
				return <p onClick={this.sort}>Not Sorted</p>
			}
			case "SORTED": {
				return <p onClick={this.reset}>Sorted!</p>
			}
			case "IS_SORTING": {
				return <CircularProgress />
			}
			default:
				return null
		}
	}

	render() {
		const { numbers } = this.state

		return (
			<div>
				{this.renderStatus()}
				<div style={{ display: "flex" }}>
					{numbers.map((entry, index) => {
						return (
							<div
								style={{
									display: "flex",
									minWidth: "3rem",
									minHeight: "3rem",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#EEEEEE",
									margin: "0.25rem"
								}}
								key={`insertionSortItem${index}`}
							>
								{entry}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

class AlgorithmsComputingProjectPage extends Component {
	render() {
		return (
			<Fragment>
				<ProjectLayout
					projectTitle="Algorithms"
					projectDescription={`Just about algorithms`}
					projectKeywords="algorithm, sort, andreas, wangsanata"
					projectImageURL="/static/images/projects/computing/dokcbt/screenshot_landing.png"
				>
					<h2>Sorts</h2>
					<h3>Insertion Sort</h3>
					<InsertionSort />
				</ProjectLayout>
			</Fragment>
		)
	}
}

export default AlgorithmsComputingProjectPage