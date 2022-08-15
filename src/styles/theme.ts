import { css } from 'styled-components/macro';

// Fonts
const font = css`
	font-family: 'Helvetica Neue';
	font-size: 30px;
	font-weight: normal;
	line-height: 36px;
	@media (max-width: 620px) {
		font-size: 25px;
		line-height: 30px;
	}
	@media (max-width: 470px) {
		font-size: 20px;
		line-height: 25px;
	}
	@media (max-width: 400px) {
		font-size: 17px;
		line-height: 22px;
	}
	@media (max-width: 380px) {
		font-size: 15px;
		line-height: 20px;
	}
`;
const font30 = css`
	${font}
	font-weight: bold;
`;
const font32 = css`
	${font}
	font-size: 32px;
	font-weight: bold;
	line-height: 38px;
	@media (max-width: 620px) {
		font-size: 25px;
		line-height: 30px;
	}
	@media (max-width: 470px) {
		font-size: 20px;
		line-height: 25px;
	}
	@media (max-width: 400px) {
		font-size: 17px;
		line-height: 22px;
	}
	@media (max-width: 380px) {
		font-size: 15px;
		line-height: 20px;
	}
`;

const font64 = css`
	${font}
	font-size: 64px;
	font-weight: bold;
	line-height: 77px;
	@media (max-width: 620px) {
		font-size: 25px;
		line-height: 30px;
	}
	@media (max-width: 470px) {
		font-size: 20px;
		line-height: 25px;
	}
	@media (max-width: 400px) {
		font-size: 20px;
		line-height: 25px;
	}
	@media (max-width: 380px) {
		font-size: 15px;
		line-height: 20px;
	}
`;

// Color palette
const white = '#FFFFFF';
const black = '#000000';
const lightGrey = '#F2F2F2';
const midGrey = '#707070';
const darkGrey = '#434343';

export default {
	font,
	fontSizes: {
		font30,
		font32,
		font64,
	},
	colors: {
		black,
		white,
		lightGrey,
		midGrey,
		darkGrey,
	},
};

export const themeDark = {
	headerColor: lightGrey,
	textColorHeader: black,
	buttonColor: midGrey,
	bodyColor: black,
	textColor: white,
	borderColor: white,
};

export const themeLight = {
	headerColor: darkGrey,
	textColorHeader: white,
	buttonColor: lightGrey,
	bodyColor: white,
	textColor: black,
	borderColor: black,
};
