export const opacityPages = {
	visible: { opacity: 1, transition: { duration: 1.5, delay: 0.3 } },
	hidden: { opacity: 0 },
};
export const movementX1 = {
	visible: { x: 0, transition: { duration: 2 } },
	hidden: { x: 100 },
};

export const movementX2 = {
	visible: { x: 0, transition: { duration: 2 } },
	hidden: { x: -100 },
};
export const movementY = {
	visible: { y: 0, transition: { duration: 2 } },
	hidden: { y: 100 },
};
export const movement = {
	visible: {
		scale: [1, 2, 2, 1, 1],
		borderRadius: ['20%', '20%', '50%', '50%', '20%'],
		transition: { duration: 2.5 },
	},
	hidden: { x: 0 },
};
