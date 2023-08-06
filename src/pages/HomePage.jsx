import { styled } from "styled-components";
import logo from './../assets/logoShortly.svg'

import { generalContext } from "../contexts/generalContext";
import { useContext, useEffect, useState } from "react";
import { Url } from "../components/homePage/Url";
import axios from "axios";
import { getMyUrls } from "../utils/requestsUtils";


export function HomePage() {
   
    const {config, token, myUrls, setMyUrls  } = useContext(generalContext);
    console.log(config, token)
    const toShorten = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        getMyUrls(config, setMyUrls)
    }, []);

    return (
        <CsHomePage>

            <img className="logo" src={logo} />
            <div className="containerMain">
                <form onSubmit={toShorten} className="containerShorten">
                    <input type="url" name="name" id="url" />
                    <button className="shorten">Encurtar Link</button>
                </form>
                <div className="containerUrls">
                
                   { myUrls && myUrls.map( convUrl => {
                    return <Url key={convUrl.id} convertion = {convUrl}/>
                   })}

                </div>
            </div>


        </CsHomePage>
    );
}

const CsHomePage = styled.div`

    border: 5px solid green;
     height: 90vh;
    width: 100%;
    padding: 0 20% 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .containerMain{
        border: 1px solid ;
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .containerShorten{
            width: 100%;
            border: 1px solid ;
            height: 11%;
            //margin-bottom: 30px;

            display: flex;
            //flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 36px;

            input{
                width: 70%;
                height: 100%;
            }

            button{
                width: 22.5%;
                height: 100%;
                background-color: #5D9040;
                color: white;
            }
        }
        .containerUrls{
            width: 100%;
            border: 1px solid ;
            height: 80%;
            //border-radius: 20px;
           // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            //padding: 15px 5%;
            overflow-y: auto;
        }

    }
`;