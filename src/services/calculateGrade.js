const calculateGrades = (grades, score) => {
	let grade;

	grades.map((object) => {
		if (score >= object.range[0] && score <= object.range[1]) {
			return (grade = object);
		}
		return null;
	});

	return grade;
};

export default calculateGrades;
