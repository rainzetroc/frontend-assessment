import React from "react";

const TabContent = ({content, index, activeIndex}) => {
	const classList = "tabs__content__container row";
	return (
		<section
			className={
				index === activeIndex
					? `${classList} tabs__content__container--active`
					: `${classList}`
			}
			dangerouslySetInnerHTML={{__html: content}}
		></section>
	);
};

export default TabContent;
