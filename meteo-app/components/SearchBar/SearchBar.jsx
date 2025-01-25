import { s } from './SearchBar.style';
import {TextInput} from "react-native";

export function SearchBar({onSubit}) {
    return <TextInput
        style= {s.input}
        onSubmitEditing={onSubit}
        placeholder= "Cherche une ville"
    />
}