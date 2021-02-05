import React, { useContext } from "react";
import Number from "../Number";

import findById from "../../services/findById";

import { MetricsContext } from "../Okr";

const Current = (props) => {
	const metrics = useContext(MetricsContext);
	const metric = findById(metrics, props.metricId);

	const classes = props.className
		? `okr-current ${props.className}`
		: "okr-current";

	return (
		<div className={classes}>
			<small className="okr-label">{props.label} </small>
			<div className="okr-value">
				<Number type="text" metric={metric}>
					{props.value}
				</Number>
			</div>
		</div>
	);
};

export default Current;
