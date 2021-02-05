import React from "react";

export const ResultContext = React.createContext();
export const ResultProvider = ResultContext.Provider;

const Result = (props) => {
	const result = props.result;

	const classes = props.className
		? `okr-result ${props.className}`
		: "okr-result";

	return (
		<section className={classes}>
			<ResultProvider value={result}>{props.children}</ResultProvider>
		</section>
	);
};

export default Result;

// <input type="range" id="vol" name="vol" min="0" max="50" />
