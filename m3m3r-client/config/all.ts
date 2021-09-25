import { heightToDp } from "./responsive";

export default {
	defaultTheme: {
		dark: false,
		colors: {
			primary: "#66A36E",
			background: "#fff",
			card: "#FCFCFC",
			text: "#242124",
			border: "#F3F3F3",
			notification: "#E18989",
		},
	},
	heights: {
		bottomNavBar: heightToDp(8),
		topNavBar: heightToDp(12.5),
	},
};
