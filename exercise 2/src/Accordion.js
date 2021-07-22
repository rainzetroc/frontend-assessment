import React, {useState, useRef, useEffect} from "react";
import "./accordion.css";
import Arrow from "./Arrow";

const Accordion = ({index, data, activeIndex, setIndex}) => {
	const [height, setHeight] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const content = useRef(null);

	useEffect(() => {
		setIsActive(index === activeIndex ? false : true);
	}, [activeIndex, index]);

	useEffect(() => {
		setHeight(isActive ? 0 : content.current.scrollHeight);
	}, [content, isActive]);

	const toggle = () => {
		setIndex(index);
		if (index === activeIndex) setIsActive(!isActive);
	};

	return (
		<>
			<div className="accordion row justify-content-center px-2 my-2 py-1 mx-2">
				<header className="row accordion__header justify-content-center">
					<h3 className="accordion__header__title col-9 col-md-11 my-2">
						{data.title}
					</h3>
					<button
						className="accordion__header__button col"
						onClick={toggle}
					>
						<Arrow class={isActive ? "rotate" : ""} />
					</button>
				</header>
				<div
					className="col-12 accordion__content"
					ref={content}
					dangerouslySetInnerHTML={{__html: data.content}}
					style={{maxHeight: `${height}px`}}
				></div>
			</div>
		</>
	);
};

export default Accordion;
