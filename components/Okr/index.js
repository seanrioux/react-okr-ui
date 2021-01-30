import React from "react";

import "./style.scss";

export const ConfigContext = React.createContext();
export const ConfigProvider = ConfigContext.Provider;

export const MetricsContext = React.createContext();
export const MetricsProvider = MetricsContext.Provider;

export const DirectionsContext = React.createContext();
export const DirectionsProvider = DirectionsContext.Provider;

const Okr = (props) => {
	return (
		<div className="okr">
			<ConfigProvider value={props.config}>
				<MetricsProvider value={props.metrics}>
					<DirectionsProvider value={props.directions}>
						{props.children}
					</DirectionsProvider>
				</MetricsProvider>
			</ConfigProvider>
		</div>
	);
};

export default Okr;
