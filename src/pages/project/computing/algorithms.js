import { Component, Fragment } from "react"
import { Button, CircularProgress } from "@material-ui/core"
import ProjectLayout from "../../../components/Layout/ProjectLayout"

class Sort extends Component {
	constructor(props) {
		super(props)
		this.state = {
			numbers: [5, 2, 4, 6, 1, 3, 10, 9, 7, 4, 8, 6, 2, 1, 5],
			status: "UNSORTED"
		}
	}

	reset = () => {
		this.setState({
			numbers: [5, 2, 4, 6, 1, 3, 10, 9, 7, 4, 8, 6, 2, 1, 5],
			status: "UNSORTED"
		})
	}

	returnColor = (number) => {
		switch (number) {
			case 0:
				return "#FFFFFF"
			case 1:
				return "#EEEEEE"
			case 2:
				return "#DDDDDD"
			case 3:
				return "#CCCCCC"
			case 4:
				return "#BBBBBB"
			case 5:
				return "#AAAAAA"
			case 6:
				return "#999999"
			case 7:
				return "#888888"
			case 8:
				return "#777777"
			case 9:
				return "#666666"
			case 10:
				return "#555555"
			default:
				return "#FFFFFF"
		}
	}

	renderActionButtons = () => {
		const { status } = this.state

		switch (status) {
			case "UNSORTED": {
				return (
					<Fragment>
						<Button variant="outlined" onClick={this.sort}>
							Sort
						</Button>
						<Button variant="outlined" onClick={this.sortVisualize} style={{ marginLeft: "0.5rem" }}>
							Visualize
						</Button>
					</Fragment>
				)
			}
			case "SORTED": {
				return (
					<Button variant="outlined" onClick={this.reset}>
						Reset
					</Button>
				)
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
				{this.renderActionButtons()}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						marginTop: "1rem"
					}}
				>
					{numbers.map((entry, index) => {
						return (
							<div
								style={{
									display: "flex",
									minWidth: "3rem",
									minHeight: "3rem",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: this.returnColor(entry),
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

class InsertionSort extends Sort {
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

	sortVisualize = () => {
		const { numbers } = this.state

		this.setState({ status: "IS_SORTING" }, () => {
			let sortedNumbers = [...numbers]

			let i = 0

			const test1 = () => {
				if (i < sortedNumbers.length - 1) {
					setTimeout(() => {
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
						if (i === sortedNumbers.length - 2) {
							this.setState({ status: "SORTED" })
						}
						i++
						test1()
					}, 1000)
				}
			}

			test1()
		})
	}
}

class BubbleSort extends Sort {
	sort = () => {
		const { numbers } = this.state

		this.setState({ status: "IS_SORTING" }, () => {
			let sortedNumbers = [...numbers]
			let isSorted = false

			while (!isSorted) {
				isSorted = true

				for (let i = 0; i < sortedNumbers.length - 1; i++) {
					if (sortedNumbers[i] > sortedNumbers[i + 1]) {
						const bigNumber = sortedNumbers[i]
						const smallNumber = sortedNumbers[i + 1]
						sortedNumbers[i] = smallNumber
						sortedNumbers[i + 1] = bigNumber
						isSorted = false
					}
				}
			}

			this.setState({
				numbers: sortedNumbers,
				status: "SORTED"
			})
		})
	}

	sortVisualize = () => {
		const { numbers } = this.state

		this.setState({ status: "IS_SORTING" }, () => {
			let sortedNumbers = [...numbers]
			let isSorted = false

			const loop = () => {
				if (!isSorted) {
					setTimeout(() => {
						isSorted = true

						for (let i = 0; i < sortedNumbers.length - 1; i++) {
							if (sortedNumbers[i] > sortedNumbers[i + 1]) {
								const bigNumber = sortedNumbers[i]
								const smallNumber = sortedNumbers[i + 1]
								sortedNumbers[i] = smallNumber
								sortedNumbers[i + 1] = bigNumber
								isSorted = false
							}
						}

						this.setState({ numbers: sortedNumbers })
						if (isSorted) {
							this.setState({ status: "SORTED" })
						}

						loop()
					}, 1000)
				}
			}

			loop()
		})
	}
}

class SelectionSort extends Sort {
	sort = () => {
		const { numbers } = this.state

		this.setState({ status: "IS_SORTING" }, () => {
			let sortedNumbers = [...numbers]

			for (let i = 0; i < sortedNumbers.length; i++) {
				let smallestElementIndex = i
				let smallestElement = sortedNumbers[i]

				for (let j = i; j < sortedNumbers.length; j++) {
					if (sortedNumbers[j] < smallestElement) {
						smallestElement = sortedNumbers[j]
						smallestElementIndex = j
					}
				}

				sortedNumbers.splice(smallestElementIndex, 1)
				sortedNumbers.splice(i, 0, smallestElement)
			}

			this.setState({
				numbers: sortedNumbers,
				status: "SORTED"
			})
		})
	}

	sortVisualize = () => {
		const { numbers } = this.state

		this.setState({ status: "IS_SORTING" }, () => {
			let sortedNumbers = [...numbers]

			let i = 0
			const loop1 = () => {
				if (i < sortedNumbers.length) {
					setTimeout(() => {
						let smallestElementIndex = i
						let smallestElement = sortedNumbers[i]

						for (let j = i; j < sortedNumbers.length; j++) {
							if (sortedNumbers[j] < smallestElement) {
								smallestElement = sortedNumbers[j]
								smallestElementIndex = j
							}
						}

						sortedNumbers.splice(smallestElementIndex, 1)
						sortedNumbers.splice(i, 0, smallestElement)
						this.setState({ numbers: sortedNumbers })
						if (i === sortedNumbers.length - 1) {
							this.setState({ status: "SORTED" })
						}

						i++
						loop1()
					}, 1000)
				}
			}
			loop1()
			
		})
	}
}

class MergeSort extends Sort {
	sort = () => {
		const { numbers } = this.state

		this.setState({ status: "IS_SORTING" }, () => {
			let sortedNumbers = [...numbers]

			for (let i = 0; i < sortedNumbers.length; i++) {
				let smallestElementIndex = i
				let smallestElement = sortedNumbers[i]

				for (let j = i; j < sortedNumbers.length; j++) {
					if (sortedNumbers[j] < smallestElement) {
						smallestElement = sortedNumbers[j]
						smallestElementIndex = j
					}
				}

				sortedNumbers.splice(smallestElementIndex, 1)
				sortedNumbers.splice(i, 0, smallestElement)
			}

			this.setState({
				numbers: sortedNumbers,
				status: "SORTED"
			})
		})
	}

	sortVisualize = () => {
		const { numbers } = this.state

		this.setState({ status: "IS_SORTING" }, () => {
			let sortedNumbers = [...numbers]

			let i = 0
			const loop1 = () => {
				if (i < sortedNumbers.length) {
					setTimeout(() => {
						let smallestElementIndex = i
						let smallestElement = sortedNumbers[i]

						for (let j = i; j < sortedNumbers.length; j++) {
							if (sortedNumbers[j] < smallestElement) {
								smallestElement = sortedNumbers[j]
								smallestElementIndex = j
							}
						}

						sortedNumbers.splice(smallestElementIndex, 1)
						sortedNumbers.splice(i, 0, smallestElement)
						this.setState({ numbers: sortedNumbers })
						if (i === sortedNumbers.length - 1) {
							this.setState({ status: "SORTED" })
						}

						i++
						loop1()
					}, 1000)
				}
			}
			loop1()

		})
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
					<h3>Bubble Sort</h3>
					<BubbleSort />
					<h3>Selection Sort</h3>
					<SelectionSort />
					<h3>Merge Sort</h3>
					<MergeSort />
				</ProjectLayout>
			</Fragment>
		)
	}
}

export default AlgorithmsComputingProjectPage