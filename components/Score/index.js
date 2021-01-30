import React, { useContext } from "react";

import Format from "react-number-format";
import findById from "../../services/findById";

import calculateScore from "../../services/calculateScore";

import { DirectionsContext } from "../Okr";
import { ResultContext } from "../Result";

const Score = () => {
	const result = useContext(ResultContext);
	const directions = useContext(DirectionsContext);

	const direction = findById(directions, result.directionId);
	const score = calculateScore(direction, result);

	return (
		<small className="okr-result-score flex-justify-center-align-center">
			<Format
				displayType="text"
				value={score > 0 ? score : 0}
				suffix={"%"}
				decimalScale={0}
			/>
		</small>
	);
};

export default Score;
