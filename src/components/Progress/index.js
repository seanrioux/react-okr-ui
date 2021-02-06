import React, { useContext } from "react";
import { GradesContext } from "../Okr";

import typeOf from "prop-types";

// Services
import calculateGrade from "../../services/calculateGrade";
import calculateProgress from "../../services/calculateProgress";

const Progress = ({ label, value, results, className }) => {
	// Get progress from or calculate from results
	const progress = value ? value : results ? calculateProgress(results) : null;

	// Get grades and grade progress
	const grades = useContext(GradesContext);
	const grade = calculateGrade(grades, progress);

	// Convert to percentage
	const percentage = progress * 100;

	// Create className
	let classesArray = ["okr-progress-wrapper"];

	if (className) {
		classesArray.push(className);
	}

	const classes = classesArray.join(" ");

	return (
		<div className={classes}>
			{label ? <small className="okr-label">{label}</small> : null}
			<div className="okr-progress">
				<div
					role="progressbar"
					className="okr-progress-bar"
					aria-label="Progress"
					aria-valuenow={progress}
					aria-valuemin="0"
					aria-valuemax="100"
					style={{
						width: percentage + "%",
						background: grade.color,
					}}
				></div>
			</div>
		</div>
	);
};

Progress.propTypes = {
	label: typeOf.string,
	value: typeOf.number,
	results: typeOf.arrayOf(
		typeOf.shape({
			id: typeOf.string,
			metricId: typeOf.string,
			direction: typeOf.string,
			start: typeOf.number,
			end: typeOf.number,
			current: typeOf.number,
		})
	),
	className: typeOf.string,
};

// label, value, results, fullWidth, className
export default Progress;
