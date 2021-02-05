const metrics = [
	{
		id: "1",
		name: "churn",
		prefix: "",
		suffix: "%",
		space: false,
		allowNegative: false,
		decimalScale: 2,
	},
	{
		id: "2",
		name: "net promoter score",
		prefix: "",
		suffix: "",
		space: false,
		allowNegative: false,
		decimalScale: 0,
	},
	{
		id: "3",
		name: "daily active users",
		prefix: "",
		suffix: "",
		space: false,
		allowNegative: false,
		decimalScale: 0,
	},
	{
		id: "4",
		name: "lifetime user value",
		prefix: "$",
		suffix: "",
		space: true,
		allowNegative: false,
		decimalScale: 2,
	},
];

const grades = [
	{
		id: "2",
		name: "Fail",
		range: [0.0, 0.5],
		color: "#ef4444",
	},
	{
		id: "2",
		name: "Conditional",
		range: [0.51, 9.74],
		color: "#fbbf24",
	},
	{
		id: "2",
		name: "Pass",
		range: [0.75, 1.0],
		color: "#10b981",
	},
];

const dateOptions = {
	year: "numeric",
	month: "short",
	day: "numeric",
};

export { grades, metrics, dateOptions };
