import { directions } from "../../../config/okr";

const calculateScore = (direction, result) => {
	const score =
		direction.down && direction.start && direction.end
			? ((result.start - result.current) / (result.start - result.end)) * 100
			: direction.up && direction.start && direction.end
			? ((result.current - result.start) / (result.end - result.start)) * 100
			: direction.start && !direction.end
			? (result.current / result.start) * 100
			: !direction.start && direction.end
			? (result.current / result.end) * 100
			: null;
	return score;
};

export default calculateScore;
