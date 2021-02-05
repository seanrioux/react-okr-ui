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

const Okr = (props) => {
	return (
		<div className="okr">
			<ConfigProvider value={props.config}>
				<MetricsProvider value={props.metrics}>
					<DirectionsProvider value={props.directions}>
						<GradesProvider value={props.grades}>
							{props.children}
						</GradesProvider>
					</DirectionsProvider>
				</MetricsProvider>
			</ConfigProvider>
		</div>
	);
};

Okr.typeOf = {
	/**
	 * Test
	 */
	metrics: typeOf.arrayOf(
		typeOf.shape({
			id: typeOf.string,
		})
	),
};

export default Okr;
