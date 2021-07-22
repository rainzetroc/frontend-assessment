import {useState, useEffect} from "react";

const useWindowSize = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowWidth;
};

export default useWindowSize;
