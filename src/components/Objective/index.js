import React from "react";

const Objective = (props) => {
	const classes = props.className
		? `okr-objective ${props.className}`
		: "okr-objective";

	return <article className={classes}>{props.children}</article>;
};

export default Objective;
