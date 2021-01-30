import React, { useContext } from "react";
import Number from "../Number";

import findById from "../../services/findById";

import { MetricsContext } from "../Okr";
import { ResultContext } from "../Result";

const Current = () => {
	const result = useContext(ResultContext);
	const metrics = useContext(MetricsContext);
	const metric = findById(metrics, result.metricId);

	return (
		<small className="okr-result-current">
			<div>
				<b>Current</b>
			</div>
			<Number type="text" metric={metric}>
				{result.current}
			</Number>
		</small>
	);
};

export default Current;
