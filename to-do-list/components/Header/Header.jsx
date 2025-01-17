import { s } from './Header.style';
import {Image, Text} from "react-native";
import  headerLogo  from '@/assets/images/logo.png';

export function Header() {
    return <>
        <Image source={headerLogo} style={s.image} resizeMode="contain" />
        <Text style={s.subtitle}>Tu as probablement un truc à faire</Text>
    </>
}