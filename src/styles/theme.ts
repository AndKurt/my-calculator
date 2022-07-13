import { css } from 'styled-components/macro'

// Fonts
const font = css`
	font-family: 'Helvetica Neue';
	font-weight: normal;
	font-size: 30px;
	line-height: 36px;
`
const font30 = css`
	${font}
	font-weight: bold;
`
const font32 = css`
	${font}
	font-size: 32px;
	line-height: 38px;
	font-weight: bold;
`

const font64 = css`
	${font}
	font-size: 64px;
	line-height: 77px;
	font-weight: bold;
`

// Color palette
const white = '#FFFFFF'
const black = '#000000'
const lightGrey = '#F2F2F2'
const midGrey = '#707070'
const darkGrey = '#434343'

export default {
	font,
	//spaces: [0, 4, 8, 16, 32, 64, 128],
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
}
