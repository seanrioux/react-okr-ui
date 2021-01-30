import React from "react";

const Progress = (props) => {
	const progress = {
		percentage: 75,
		color: "green",
		message: "At risk",
	};

	return (
		<div className="okr-progress">
			<div
				role="progressbar"
				className={"okr-progress-bar" + " " + "progress-" + progress.color}
				aria-valuenow={progress.percentage}
				aria-valuemin="0"
				aria-valuemax="100"
				style={{ width: progress.percentage + "%" }}
			></div>
		</div>
	);
};

export default Progress;
