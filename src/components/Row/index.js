import React from "react";
import propTypes from "prop-types";

const Row = ({ type, children }) => {
	return (
		<div
			className={`okr-${
				type === "wrap" ? "wrap" : type === "flex" ? "flex" : "flex"
			}`}
		>
			{children}
		</div>
	);
};

Row.propTypes = {
	/**
	 * Set row type of `wrap`, or `flex` (justify content between)
	 */
	type: propTypes.oneOf(["wrap", "flex"]),
};

export default Row;
