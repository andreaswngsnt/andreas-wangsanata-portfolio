// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
					<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet" />
					<link rel="shortcut icon" href="/static/icons/logo_small.png" />
				</Head>
				<body style={{ fontFamily: "Quicksand, sans-serif", margin: "0" }}>
					<Main />
					<NextScript />
					<noscript>Enable JavaScript in order to experience the website optimally.</noscript>
				</body>
			</Html>
		)
	}
}

export default MyDocument