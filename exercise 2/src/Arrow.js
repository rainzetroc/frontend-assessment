import React from "react";
import "./arrow.css";

const Arrow = (props) => {
	return (
		<svg
			className={props.class}
			xmlns="http://www.w3.org/2000/svg"
			height="30px"
			viewBox="0 0 24 24"
			width="30px"
			fill="#000000"
		>
			<path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
			<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
		</svg>
	);
};

export default Arrow;
