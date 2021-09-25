import { Dimensions, PixelRatio } from "react-native";

const {width, height} = Dimensions.get('window')

const widthToDp = (prop : number) =>{
	let givenWidth  = 
		typeof prop === 'number' ? prop : parseFloat(prop)

		return PixelRatio.roundToNearestPixel((width*givenWidth)/100);

} 


const heightToDp = (prop : number) =>{
	let givenHeight  = 
		typeof prop === 'number' ? prop : parseFloat(prop)

		return PixelRatio.roundToNearestPixel((height*givenHeight)/100);

} 

export {heightToDp,	widthToDp}