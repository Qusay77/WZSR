import type { Meta, StoryObj } from "@storybook/react";
import SessionEvents, {
	SRHeader,
	EventsInfoExpandable,
} from "packages/UIKit/SessionEvents";
import SessionTimeLine from "packages/UIKit/SessionEvents/SessionTimeLine";

const meta = {
	title: "SessionEvents/Side",
	component: SessionEvents,
	parameters: {
		layout: "fullscreen",
		controls: {
			exclude: /.*/g,
		},
	},
} satisfies Meta<typeof SessionEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const Header: Story = {
	render: () => <SRHeader />,
};

export const InfoExpandable: Story = {
	render: () => <EventsInfoExpandable />,
};
export const SessionEventsTimeLine: Story = {
	render: () => <SessionTimeLine />,
};
