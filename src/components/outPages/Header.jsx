import { styled } from "styled-components";

export function Header(){
    
    return(
        <CsHeader>            
            <div className="entrar">Entrar</div>
            <div className="cadastre-se">Cadastrar-se</div>
            <div className="home">Home</div>
            <div className="ranking">Ranking</div>
            <div className="sair">Sair</div>
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
    }
    .cadastre-se{
        color:#9C9C9C;
        margin-left: 10px;       
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