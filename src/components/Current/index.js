import React, { useContext } from "react";
import typeOf from "prop-types";

import Number from "../Number";

import findById from "../../services/findById";

import { MetricsContext } from "../Okr";

const Current = ({ label, value, metricId, className }) => {
	const metrics = useContext(MetricsContext);
	const metric = findById(metrics, metricId);

	const classes = className ? `okr-current ${className}` : "okr-current";

	return (
		<div className={classes}>
			<small className="okr-label">{label} </small>
			<div className="okr-value">
				<Number type="text" metric={metric}>
					{value}
				</Number>
			</div>
		</div>
	);
};

Current.propTypes = {
	label: typeOf.string,
	value: typeOf.number,
	metricId: typeOf.string,
	className: typeOf.string,
};

export default Current;
