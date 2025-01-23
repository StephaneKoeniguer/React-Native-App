import { s } from './Forecast.style';
import {Txt} from "../../components/Txt/Txt";
import {Container} from "@/components/Container/Container";
import {useRoute} from "@react-navigation/native";

export function Forecast({}) {

    const {params} = useRoute();

    console.log(params);

    return (
        <Container>
            <Txt>Forecast</Txt>
        </Container>
    )
}