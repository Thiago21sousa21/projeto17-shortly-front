import { styled } from "styled-components";
import logo from './../assets/logoShortly.svg'

import { generalContext } from "../contexts/generalContext";
import { useContext, useEffect, useState } from "react";
import { Url } from "../components/homePage/Url";
import axios from "axios";
import { getMyUrls } from "../utils/requestsUtils";
import { useNavigate } from "react-router-dom";


export function HomePage() {
   
    const {config, token, setToken,myUrls, setMyUrls  } = useContext(generalContext);
    const [inputUrl, setInputUrl] = useState({url:''});
    const navigate = useNavigate();
    const localToken = localStorage.getItem('localToken');
    const localConfig = {headers:{authorization:`Bearer ${localToken}`}}

         
    if(localToken){
        useEffect(() => { 
            getMyUrls(setMyUrls);
        }, []);      
    }
    
    const toShorten = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/urls/shorten`, inputUrl, localConfig)
            .then(res=>{
                console.log(res);
                getMyUrls(setMyUrls);
                setInputUrl({url:''})
            }).catch(err=>console.log(err));

    }
    const updateInput = (e)=>{
        const {value, id} = e.target;        
        const newValue = {...inputUrl, [id]: value};    
        setInputUrl(newValue);
    }

    return (
        <CsHomePage>

            <img className="logo" src={logo} />
            <div className="containerMain">
                <form onSubmit={toShorten} className="containerShorten">
                    <input type="url" name="url" id="url"
                        onChange={updateInput} 
                        value={inputUrl['url']}/>
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

   // border: 5px solid green;
     height: 90vh;
    width: 100%;
    padding: 0 20% 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    .containerMain{
        //border: 1px solid ;
        padding: 15px;
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .containerShorten{
            width: 100%;
            //border: 1px solid ;
            
            height: 14%;
            //margin-bottom: 30px;
            padding: 10px;

            display: flex;
            //flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 36px;
            border-radius: 12px;
            overflow: hidden;

            input{
                width: 70%;
                height: 100%;
                border-radius: 12px;
                border:none;
                box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 8px ;
            }

            button{
                width: 22.5%;
                height: 100%;
                background-color: #5D9040;
                color: white;
                border:none;
                border-radius: 12px;
                cursor: pointer;
            }
        }
        .containerUrls{
            width: 100%;
            //border: 1px solid ;
            height: 80%;
            //border-radius: 20px;
           // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            //padding: 15px 5%;
            overflow-y: auto;
        }

    }
    .logo{
        width: 20vw;
        height: 20vh;
    }
`;