import { styled } from "styled-components"
import  logo from './../assets/logoShortly.svg'
import  trofeu from './../assets/trofeu.svg'

export function InitialPage(){
    
    return(
        <CsInitialPage>
            <img className="logo" src={logo}/>
            <div className="containerMain">
                <div className="titleRanking">
                    <img src={trofeu} />Ranking
                </div>
                <div className="playersRanking"></div>
            </div>
            <h2>Crie sua conta para usar nosso serviço! </h2>            
        </CsInitialPage>
    );
}

const CsInitialPage = styled.div`
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
        height: 40vh;
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
            padding: 15px;
            overflow-y: auto;
        }

    }
    h2{
        font-size: 36px;
    }
`;