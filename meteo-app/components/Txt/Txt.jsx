import {Text, useWindowDimensions} from 'react-native';
import { s } from './Txt.style';

export function Txt({children, style}) {
    const {height} =  useWindowDimensions();
    const fontSize = style?.fontSize || s.text.fontSize;

    return(
        <Text style={[s.text, style, {fontSize: fontSize * (1/height) *  height}]}>
            {children}
        </Text>
    )
}