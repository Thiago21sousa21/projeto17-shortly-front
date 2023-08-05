import { styled } from "styled-components";
import  logo from './../assets/logoShortly.svg'
import  trofeu from './../assets/trofeu.svg'
import { Header } from "../components/outPages/Header";


export function RankingPage(){
    
    return(
        <CsRankingPage>
            <Header/>
             <img className="logo" src={logo}/>
            <div className="containerMain">
                <div className="titleRanking">
                    <img src={trofeu} />Ranking
                </div>
                <div className="playersRanking">
                    <p>1. Fulaninha - 32 links - 1.000 visualizações</p>
                </div>
            </div>
        </CsRankingPage>
    );
}

const CsRankingPage = styled.div`

     //border: 2px solid green;
    height: 90vh;
    width: 100%;
    padding: 0 20% 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .logo{
        //border: 1px solid ;
        width: 180px;
        height: 60px;
    }
    .containerMain{
        //border: 1px solid ;
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .titleRanking{
            width: 100%;
            //border: 1px solid ;
            height: 20%;
            //margin-bottom: 30px;

            display: flex;
            //flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 36px;
        }
        .playersRanking{
            width: 100%;
            //border: 1px solid ;
            height: 70%;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            padding: 15px 5%;
            overflow-y: auto;

            p{
                font-size: 22px;
            }
        }

    }
    

`;