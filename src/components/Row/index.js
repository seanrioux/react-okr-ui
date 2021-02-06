import React from "react";
import propTypes from "prop-types";

const Row = ({ kind, children }) => {
	return (
		<div
			className={`okr-${
				kind === "wrap" ? "wrap" : kind === "flex" ? "flex" : "flex"
			}`}
		>
			{children}
		</div>
	);
};

Row.propTypes = {
	kind: propTypes.oneOf(["wrap", "flex"]),
};

export default Row;
