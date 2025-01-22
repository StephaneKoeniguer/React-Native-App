import { s } from './Clock.style';
import {Txt} from "../Txt/Txt";
import {nowToHHMM} from "../../services/date-service";
import {useState, useEffect} from "react";

export function Clock() {

    const [time, SetTime] = useState(nowToHHMM());

    useEffect(() => {
        const interval = setInterval(() => SetTime(nowToHHMM()), 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <Txt style={s.time}>{time}</Txt>
        </>
    )
}