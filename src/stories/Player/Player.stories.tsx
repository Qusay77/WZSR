import type { Meta, StoryObj } from "@storybook/react";
import PlayerBlock from "packages/UIKit/Player";

const meta = {
	title: "Player/Basic",
	component: PlayerBlock,
	parameters: {
		layout: "flex",
		controls: {
			exclude: /.*/g,
		},
	},
} satisfies Meta<typeof PlayerBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
