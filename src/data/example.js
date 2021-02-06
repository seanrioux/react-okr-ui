const metrics = [
	{
		id: "1",
		name: "churn",
		prefix: null,
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

const results = [
	{
		id: "1",
		metricId: "1",
		direction: "increase",
		start: 50,
		end: 10,
		current: 20,
		score: 0,
	},
	{
		id: "2",
		metricId: "2",
		direction: "increase",
		start: 100,
		end: 200,
		current: 150,
		score: 0,
	},
	{
		id: "3",
		metricId: "3",
		direction: "maintain",
		start: 60,
		end: null,
		current: 45,
		score: 0,
	},
	{
		id: "4",
		metricId: "4",
		direction: "attain",
		start: null,
		end: 10000,
		current: 9000,
		score: 0,
	},
];

const okr = [
	{
		id: "1",
		text: "Carve a niche",
		date: "January 01 2022",
		progress: 0.65,
		results: [
			{
				id: "1",
				metricId: "1",
				direction: "increase",
				start: 50,
				end: 10,
				current: 20,
				score: 0,
			},
			{
				id: "2",
				metricId: "2",
				direction: "increase",
				start: 100,
				end: 200,
				current: 150,
				score: 0,
			},
			{
				id: "3",
				metricId: "3",
				direction: "maintain",
				start: 60,
				end: null,
				current: 45,
				score: 0,
			},
			{
				id: "4",
				metricId: "4",
				direction: "attain",
				start: null,
				end: 10000,
				current: 9000,
				score: 0,
			},
		],
	},
];

export { grades, metrics, okr, results, dateOptions };
