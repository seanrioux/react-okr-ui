import React, { useContext } from "react";
import { GradesContext } from "../Okr";

// Services
import calculateGrade from "../../services/calculateGrade";
import calculateProgress from "../../services/calculateProgress";

const Progress = (props) => {
	// Get progress from props or calculate from results
	const progress = props.value
		? props.value
		: props.results
		? calculateProgress(props.results)
		: null;

	// Get grades and grade progress
	const grades = useContext(GradesContext);
	const grade = calculateGrade(grades, progress);

	// Convert to percentage
	const percentage = progress * 100;

	// Create className
	let classesArray = ["okr-progress-wrapper"];

	if (props.className) {
		classesArray.push(props.className);
	}

	if (props.fullWidth) {
		classesArray.push("full-width");
	}

	const classes = classesArray.join(" ");

	return (
		<div className={classes}>
			{props.label ? <small className="okr-label">{props.label}</small> : null}
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

export default Progress;
