import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export function HeaderOn(){
    const navigate = useNavigate();
    
    return(
        <CsHeaderOn>            
            <div className="home" onClick={()=>navigate('/home')}>Home</div>
            <div className="ranking" onClick={()=>navigate('/ranking')}>Ranking</div>
            <div className="sair" onClick={()=>navigate('/')}>Sair</div>
        </CsHeaderOn>
    );
}

const CsHeaderOn = styled.div`
    //border: 2px solid green;
    width: 100%;
    height: 10vh;
    position: fixed;
    left: 0;
    top: 0;

    padding: 0 10%;

    display: flex;
    //flex-direction: column;
    justify-content: end;
    align-items: end;

    .entrar{
        color:#5D9040;
    }
    .cadastre-se{
        color:#9C9C9C;
        margin-left: 10px;       
    }
    .home{
        color:#9C9C9C;
        margin-left: 10px;  
        cursor: pointer;        
    }
    .ranking{
        color:#9C9C9C;
        margin-left: 10px; 
        cursor: pointer;         
    }
    .sair{
        color:#9C9C9C;
        margin-left: 10px; 
        cursor: pointer;      
    }
`;