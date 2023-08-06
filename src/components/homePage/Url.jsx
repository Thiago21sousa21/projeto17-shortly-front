import { styled } from "styled-components";
import bin from '../../assets/bin.svg'
import axios from "axios";
import { useContext } from "react";
import { generalContext } from "../../contexts/generalContext";
import { getMyUrls } from "../../utils/requestsUtils";

export function Url(props) {
    const { convertion } = props;
    const { id, url, shortUrl, visitCount } = convertion;
    const { config, setMyUrls } = useContext(generalContext);




    const deleteUrl = () => {
        axios.delete(`${import.meta.env.VITE_API_URL}/urls/${id}`, config)
            .then(res => {
                console.log(res);
                getMyUrls(config, setMyUrls);
            }).catch(err => console.log(err));
    }

    return (
        <CsUrl>
            
                <a className="titlesUrls"  href={`${import.meta.env.VITE_API_URL}/urls/open/${shortUrl}`} target="_blank" onClick={()=>getMyUrls(config, setMyUrls)}>
                    <p className="shorten">{url}</p>
                    <p className="short">{shortUrl}</p>
                    <p className="visits">Quantidade de visitantes: {visitCount}</p>
                </a>
            
            <div className="deleteUrl" onClick={deleteUrl} >
                <img src={bin} />
            </div>
        </CsUrl>
    );
}

const CsUrl = styled.div`

    //border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
    width: 100%;                
    height: 13.2%;
    margin-bottom: 6%;
    border-radius: 12px;
    overflow: hidden;

    display: flex;
    //flex-direction: column;
    //justify-content: center;
    align-items: center;
    .titlesUrls{
        width: 85%;
        height: 100%;
        border: none;
        background-color: #80CC74;
        padding: 3.5%;
        
        
        display: flex;
        //flex-direction: column;
        justify-content: space-between;
        align-items: center;      
        text-decoration: none;
        color: white;
        overflow: hidden;
        
    }
    .deleteUrl{
        cursor: pointer;
        height: 100%;
        width: 15%;
        //border: 3px solid red;
        display: flex;
        //flex-direction: column;
        justify-content: center;
        align-items: center;  
    }

`;