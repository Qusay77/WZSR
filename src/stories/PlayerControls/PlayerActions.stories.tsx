import type { Meta, StoryObj } from "@storybook/react";
import TimeLineActions, {
	PlayActions,
	PlayerProgress,
} from "packages/UIKit/TimeLineActions/TimeLineActions";

const meta = {
	title: "PlayerControls/TimeLineActions",
	component: TimeLineActions,
	parameters: {
		layout: "fullscreen",
		controls: {
			exclude: /.*/g,
		},
	},
} satisfies Meta<typeof TimeLineActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const PlayAndPauseActions: Story = {
	render: () => <PlayActions />,
};
export const PlayerProgressText: Story = {
	render: () => <PlayerProgress />,
};
