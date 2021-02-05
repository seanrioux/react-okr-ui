const calculateScore = (direction, start, end, current) => {
	const score =
		direction === "increase"
			? (start - current) / (start - end)
			: direction === "decrease"
			? (current - start) / (end - start)
			: direction === "maintain"
			? current / start
			: direction === "attain"
			? current / end
			: null;
	return score;
};

export default calculateScore;
