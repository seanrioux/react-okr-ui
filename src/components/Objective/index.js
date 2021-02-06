import React from "react";
import typeOf from "prop-types";

const Objective = ({ className, children }) => {
	const classes = className ? `okr-objective ${className}` : "okr-objective";

	return <article className={classes}>{children}</article>;
};

Objective.propTypes = {
	className: typeOf.string,
};

export default Objective;
