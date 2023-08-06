import { useLocation } from "react-router-dom";
import { HeaderOn } from "./HeaderOn";
import { HeaderOff } from "./HeaderOff";

export function Header(){
    const location = useLocation().pathname;
    const on = '/home' || '/ranking'
    
    return(
        <>
             {location === on ? <HeaderOn/> : <HeaderOff/>}
        </>
       
    );
}