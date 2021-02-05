import React from "react";
import typeOf from "prop-types";

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

Result.propTypes = {
	className: typeOf.string,
};

export default Result;
