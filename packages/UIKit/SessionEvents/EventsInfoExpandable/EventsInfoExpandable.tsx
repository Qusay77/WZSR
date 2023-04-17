import { useState } from "react";
import { InfoExpandableContainer, ShowMore } from "./Blocks";
import InfoBlocks from "./Blocks/InfoBlocks";

const EventsInfoExpandable = () => {
	const [showMore, setShowMore] = useState(false);
	return (
		<InfoExpandableContainer>
			<InfoBlocks showMore={showMore} />
			<ShowMore onClick={() => setShowMore((prev) => !prev)}>
				{showMore ? "Show More" : "Show Less"}
			</ShowMore>
		</InfoExpandableContainer>
	);
};

export default EventsInfoExpandable;
