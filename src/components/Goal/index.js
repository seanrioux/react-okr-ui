import React, { useContext } from "react";
import typeOf from "prop-types";

import { MetricsContext } from "../Okr";
import Number from "../Number";
import findById from "../../services/findById";

const Goal = ({ label, text, metricId, direction, start, end, className }) => {
	// Get metrics from context
	const metrics = useContext(MetricsContext);
	let metric;

	// Objective or Result
	const goalType = text ? "objective" : metricId && direction ? "result" : null;

	// If result find metric in metrics
	if (goalType === "result") {
		metric = findById(metrics, metricId);
	}

	// Classes from className
	const classes = className ? `okr-goal ${className}` : "okr-goal";

	// Utility: make title case
	function makeTitle(string) {
		return string[0].toUpperCase() + string.slice(1).toLowerCase();
	}

	// Return component
	return goalType === "objective" ? (
		<div className={classes}>
			{label ? <small className="okr-label">{label}</small> : null}
			<h1>{text}</h1>
		</div>
	) : goalType === "result" ? (
		<div className={classes}>
			{label ? <small className="okr-label">{label}</small> : null}
			<h1>
				<span>{`${makeTitle(direction)} ${metric.name}`}</span>
				{direction === "increase" || direction === "decrease" ? (
					<>
						<span> from </span>
						<Number type="text" metric={metric}>
							{start}
						</Number>
						<span> to </span>
						<Number type="text" metric={metric}>
							{end}
						</Number>
					</>
				) : direction === "maintain" ? (
					<>
						<span> of </span>
						<Number type="text" metric={metric}>
							{start}
						</Number>
					</>
				) : direction === "attain" ? (
					<>
						<span> of </span>
						<Number type="text" metric={metric}>
							{end}
						</Number>
					</>
				) : null}
			</h1>
		</div>
	) : null;
};

// Prop types
Goal.propTypes = {
	label: typeOf.string,
	text: typeOf.string,
	direction: typeOf.oneOf(["increase", "decrease", "maintain", "attain"]),
	metricId: typeOf.string,
	start: typeOf.number,
	end: typeOf.number,
};

export default Goal;
