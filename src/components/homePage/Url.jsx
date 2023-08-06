import { styled } from "styled-components";
import bin from '../../assets/bin.svg'
import axios from "axios";
import { useContext } from "react";
import { generalContext } from "../../contexts/generalContext";
import { getMyUrls } from "../../utils/requestsUtils";

export function Url(props) {
    const {convertion} = props;
    const {id , url, shortUrl , visitCount } = convertion;
    const {config, setMyUrls } = useContext(generalContext);
    



    const deleteUrl = ()=>{
        axios.delete(`${import.meta.env.VITE_API_URL}/urls/${id}`,config)
            .then(res =>{
                console.log(res);
                getMyUrls(config, setMyUrls);
            }).catch(err => console.log(err));
        }

    return (
        <CsUrl>
            <div className="titlesUrls">
                <p className="shorten">{url}</p>
                <p className="short">{shortUrl}</p>
                <p className="visits">Quantidade de visitantes: {visitCount}</p>
            </div>
            <div className="deleteUrl" onClick={deleteUrl} >
                <img src={bin} />
            </div>
        </CsUrl>
    );
}

const CsUrl = styled.div`

    border: 1px solid;
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
        //border: 1px solid;
        background-color: #80CC74;
        padding: 3.5%;
        
        display: flex;
        //flex-direction: column;
        justify-content: space-between;
        align-items: center;
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