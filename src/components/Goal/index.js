import React, { useContext } from "react";
import propTypes from "prop-types";

import { MetricsContext } from "../Okr";
import Number from "../Number";
import findById from "../../services/findById";

const Goal = ({ label, text, metricId, direction, start, end, className }) => {
	const metrics = useContext(MetricsContext);
	let metric;

	const goalType = text ? "objective" : metricId && direction ? "result" : null;

	if (goalType === "result") {
		metric = findById(metrics, metricId);
	}

	const classes = className ? `okr-goal ${className}` : "okr-goal";

	function makeTitle(string) {
		return string[0].toUpperCase() + string.slice(1).toLowerCase();
	}

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

Goal.propTypes = {
	/**
	 * Test
	 */
	label: propTypes.string,
};

export default Goal;
