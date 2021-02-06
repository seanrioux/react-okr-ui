import React from "react";
import typeOf from "prop-types";

import "../../style/style.css";

export const ConfigContext = React.createContext();
export const ConfigProvider = ConfigContext.Provider;

export const MetricsContext = React.createContext();
export const MetricsProvider = MetricsContext.Provider;

export const DirectionsContext = React.createContext();
export const DirectionsProvider = DirectionsContext.Provider;

export const GradesContext = React.createContext();
export const GradesProvider = GradesContext.Provider;

const Okr = ({ metrics, grades, children }) => {
	return (
		<div className="okr">
			<MetricsProvider value={metrics}>
				<GradesProvider value={grades}>{children}</GradesProvider>
			</MetricsProvider>
		</div>
	);
};

Okr.propTypes = {
	metrics: typeOf.arrayOf(
		typeOf.shape({
			id: typeOf.string,
			name: typeOf.string,
			prefix: typeOf.string,
			suffix: typeOf.string,
			space: typeOf.bool,
			allowNegative: typeOf.bool,
			decimalScale: typeOf.number,
		})
	),
	grades: typeOf.arrayOf(
		typeOf.shape({
			id: typeOf.string,
			name: typeOf.string,
			range: typeOf.arrayOf(typeOf.number),
			color: typeOf.string,
		})
	),
};

export default Okr;
