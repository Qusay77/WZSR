import { useState, useEffect } from "react";

const useDimensions = (ref: HTMLDivElement | null) => {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			if (ref) {
				setDimensions({
					width: ref.offsetWidth,
					height: ref.offsetHeight,
				});
			}
		};

		const resizeObserver = new ResizeObserver(() => updateDimensions());
		if (ref) {
			resizeObserver.observe(ref);
		}

		updateDimensions();

		return () => {
			if (ref) {
				resizeObserver.unobserve(ref);
			}
		};
	}, [ref]);

	return dimensions;
};

export default useDimensions;
