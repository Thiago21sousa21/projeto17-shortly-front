import { styled } from "styled-components";

export function Header(){
    
    return(
        <CsHeader>            
            <div className="entrar">Entrar</div>
            <div className="cadastre-se">Cadastre-se</div>
        </CsHeader>
    );
}

const CsHeader = styled.div`
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
        margin-right: 10px;
    }
    .cadastre-se{
        color:#9C9C9C;
       
    }
`;