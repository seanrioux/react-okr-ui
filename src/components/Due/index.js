import React from "react";
import typeOf from "prop-types";

const Due = (props) => {
	const classes = props.className ? `okr-due ${props.className}` : "okr-due";

	const options = props.options
		? props.options
		: { year: "numeric", month: "long", day: "numeric" };

	let due = new Date(props.date);
	due = due.toLocaleDateString(undefined, options);

	return (
		<div className={classes}>
			{props.label ? <small className="okr-label">{props.label}</small> : null}
			<div className="okr-value">{due}</div>
		</div>
	);
};

Due.propTypes = {
	label: typeOf.string,
	date: typeOf.string,
	options: typeOf.shape({
		weekday: typeOf.string,
		year: typeOf.string,
		month: typeOf.string,
		day: typeOf.string,
	}),
};

export default Due;
