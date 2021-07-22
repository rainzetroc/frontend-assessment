import React from "react";
import "./tabs-container.css";
import TabsHeader from "./TabHeader";
import TabContent from "./TabContent";

const TabsContainer = ({data, setIndex, activeIndex}) => {
	return (
		<>
			<div className="tabs row">
				<header className="tabs__header row mx-0">
					{data.map((item, index) => (
						<TabsHeader
							title={item.title}
							activeIndex={activeIndex}
							index={index}
							setIndex={setIndex}
							key={index}
						/>
					))}
				</header>
				<main className="tabs__content row mx-2 my-1">
					{data.map((item, index) => (
						<TabContent
							content={item.content}
							index={index}
							activeIndex={activeIndex}
							key={index}
						/>
					))}
				</main>
			</div>
		</>
	);
};

export default TabsContainer;
