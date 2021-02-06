import calculateScore from "./calculateScore";

const calculateProgress = (results) => {
	let sum = 0;

	results.map((result) => {
		const score = calculateScore(
			result.direction,
			result.start,
			result.end,
			result.current
		);
		return (sum = sum + score);
	});

	const progress = sum / results.length;
	return progress;
};

export default calculateProgress;
