import React, { useContext } from "react";

import Format from "react-number-format";

import { GradesContext } from "../Okr";

import calculateGrade from "../../services/calculateGrade";
import calculateScore from "../../services/calculateScore";

const Score = (props) => {
	// Calculate score
	const score = calculateScore(
		props.direction,
		props.start,
		props.end,
		props.current
	);

	// Convert score to percentage
	const percentage = score * 100;

	const grades = useContext(GradesContext);
	const grade = calculateGrade(grades, score);

	// Set wrapper className
	const wrapperClasses = props.className
		? `okr-score  ${props.className}`
		: "okr-score";

	// Set feature className, apply circle prop
	const featureClasses = props.circle
		? "okr-value okr-circle okr-center"
		: "okr-value";

	return (
		<div className={wrapperClasses}>
			{props.label ? <small className="okr-label">{props.label}</small> : null}
			<div
				className={featureClasses}
				style={{ borderColor: grade.color, background: grade.color }}
			>
				<Format
					displayType="text"
					value={percentage > 0 ? percentage : 0}
					suffix={"%"}
					decimalScale={0}
				/>
			</div>
		</div>
	);
};

export default Score;
