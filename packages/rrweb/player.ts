import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
const events = [
	{
		type: 3,
		data: {
			source: 1,
			positions: [{ x: 256, y: 6, id: 35, timeOffset: 0 }],
		},
		timestamp: 1657012350677,
	},
	{
		type: 3,
		data: {
			source: 1,
			positions: [
				{ x: 171, y: 65, id: 22, timeOffset: -463 },
				{ x: 131, y: 119, id: 50, timeOffset: -411 },
				{ x: 128, y: 120, id: 50, timeOffset: -323 },
				{ x: 107, y: 142, id: 3, timeOffset: -271 },
			],
		},
		timestamp: 1657012351191,
	},
	{
		type: 3,
		data: {
			source: 1,
			positions: [{ x: 109, y: 148, id: 3, timeOffset: 0 }],
		},
		timestamp: 1657012351764,
	},
	{
		type: 3,
		data: {
			source: 1,
			positions: [
				{ x: 239, y: 135, id: 3, timeOffset: -1352 },
				{ x: 314, y: 132, id: 50, timeOffset: -1300 },
				{ x: 382, y: 124, id: 50, timeOffset: -1248 },
				{ x: 393, y: 110, id: 47, timeOffset: -1196 },
				{ x: 390, y: 35, id: 39, timeOffset: -1144 },
			],
		},
		timestamp: 1657012353168,
	},
];
const Player = new rrwebPlayer({
	target: document.body, // customizable root element
	props: {
		events,
	},
});

export default Player;
