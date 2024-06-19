import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import { AppProvider } from "../utils/context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Component {...pageProps} />
		</AppProvider>
	);
}

export default MyApp;
