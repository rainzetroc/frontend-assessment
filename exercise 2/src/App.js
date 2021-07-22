import React, {useState} from "react";
import Accordion from "./Accordion";
import data from "./data.json";
import useWindowSize from "./useWindowSIze";
import TabsContainer from "./TabsContainer";

function App() {
	const [activeIndex, setActiveIndex] = useState(0);
	const screenWidth = useWindowSize();

	const toggleActiveAccordion = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="app container-fluid">
			{screenWidth <= 767 ? (
				data.map((item, index) => (
					<Accordion
						data={item}
						index={index}
						activeIndex={activeIndex}
						setIndex={toggleActiveAccordion}
						key={index}
					/>
				))
			) : (
				<TabsContainer
					data={data}
					setIndex={toggleActiveAccordion}
					activeIndex={activeIndex}
				/>
			)}
		</div>
	);
}

export default App;
