import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export function HeaderOff(){
    const navigate = useNavigate();
    
    return(
        <CsHeaderOff>            
            <div className="entrar" onClick={()=>navigate('/login')}>Entrar</div>
            <div className="cadastre-se" onClick={()=>navigate('/cadastro')}>Cadastrar-se</div>
        </CsHeaderOff>
    );
}

const CsHeaderOff = styled.div`
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
        cursor: pointer;
    }
    .cadastre-se{
        color:#9C9C9C;
        margin-left: 10px; 
        cursor: pointer;      
    }
    .home{
        color:#9C9C9C;
        margin-left: 10px;       
    }
    .ranking{
        color:#9C9C9C;
        margin-left: 10px; 
             
    }
    .sair{
        color:#9C9C9C;
        margin-left: 10px;       
    }
`;