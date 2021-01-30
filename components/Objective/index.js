import React from "react";

export const ObjectiveContext = React.createContext();
export const ObjectiveProvider = ObjectiveContext.Provider;

const Objective = (props) => {
	const objective = props.objective;

	return (
		<article className="okr-objective">
			<div className="flex-justify-between-align-center margin-bottom-1">
				<h1>{objective.text}</h1>
				<small>by {objective.date}</small>
			</div>
			<ObjectiveProvider value={objective}>{props.children}</ObjectiveProvider>
		</article>
	);
};

export default Objective;
