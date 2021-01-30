import React, { useContext } from "react";

import findById from "../../services/findById";
import { MetricsContext, DirectionsContext } from "../Okr";

import Number from "../Number";

export const ResultContext = React.createContext();
export const ResultProvider = ResultContext.Provider;

const Result = (props) => {
	const result = props.result;
	// Contexts
	const metrics = useContext(MetricsContext);
	const directions = useContext(DirectionsContext);

	const metric = findById(metrics, result.metricId);
	const direction = findById(directions, result.directionId);

	return (
		<section className="okr-result flex-justify-between-align-center">
			<h1>
				<span>{`${direction.name} ${metric.name}`}</span>
				{direction.start && direction.end ? (
					<>
						<span> from </span>
						<Number type="text" metric={metric}>
							{result.start}
						</Number>
						<span> to </span>
						<Number type="text" metric={metric}>
							{result.end}
						</Number>
					</>
				) : direction.start && !direction.end ? (
					<>
						<span> of </span>
						<Number type="text" metric={metric}>
							{result.start}
						</Number>
					</>
				) : !direction.start && direction.end ? (
					<>
						<span> of </span>
						<Number type="text" metric={metric}>
							{result.end}
						</Number>
					</>
				) : null}
			</h1>
			<div className="flex-justify-between-align-center">
				<ResultProvider value={result}>{props.children}</ResultProvider>
			</div>
		</section>
	);
};

export default Result;

// <input type="range" id="vol" name="vol" min="0" max="50" />
