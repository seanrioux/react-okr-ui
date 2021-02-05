import React, { useContext } from "react";
import typeOf from "prop-types";

import Format from "react-number-format";

import { GradesContext } from "../Okr";

import calculateGrade from "../../services/calculateGrade";
import calculateScore from "../../services/calculateScore";

const Score = ({
	label,
	direction,
	start,
	end,
	current,
	circle,
	className,
}) => {
	// Calculate score
	const score = calculateScore(direction, start, end, current);

	// Convert score to percentage
	const percentage = score * 100;

	const grades = useContext(GradesContext);
	const grade = calculateGrade(grades, score);

	// Set wrapper className
	const wrapperClasses = className ? `okr-score  ${className}` : "okr-score";

	// Set feature className, apply circle prop
	const featureClasses = circle
		? "okr-value okr-circle okr-center"
		: "okr-value";

	return (
		<div className={wrapperClasses}>
			{label ? <small className="okr-label">{label}</small> : null}
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

Score.propTypes = {
	label: typeOf.string,
	direction: typeOf.oneOf(["increase", "decrease", "maintain", "attain"]),
	start: typeOf.number,
	end: typeOf.number,
	current: typeOf.number,
	circle: typeOf.bool,
	className: typeOf.string,
};

export default Score;
