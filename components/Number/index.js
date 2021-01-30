import React, { useContext } from "react";
import Format from "react-number-format";

const Number = (props) => {
	return (
		<Format
			value={props.children}
			displayType={props.type}
			thousandSeparator={true}
			prefix={props.metric.prefix}
			suffix={props.metric.suffix}
			allowNegative={props.metric.allowNegative}
			decimalScale={props.metric.decimalScale}
		/>
	);
};

export default Number;
