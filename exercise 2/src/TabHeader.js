import React from "react";

const TabsHeader = ({title, activeIndex, index, setIndex}) => {
	const classList = "tabs__header__item col-xl-1 col-md-2 py-3";
	const setActiveIndex = () => {
		setIndex(index);
	};
	return (
		<div
			onClick={setActiveIndex}
			className={
				index === activeIndex
					? `${classList} tabs__header__item--active`
					: `${classList}`
			}
		>
			{title}
		</div>
	);
};

export default TabsHeader;
