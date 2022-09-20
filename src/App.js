import React from "react";
import SearchParams from "./SearcchParams";
import { StrictMode } from "react";
// import Pet from "./Pet";

export const App = () => {
	return (
		<StrictMode>
			<div>
				<h1>Adopt Me</h1>
				<SearchParams />
			</div>
		</StrictMode>
	);
};
