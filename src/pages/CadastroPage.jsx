import { styled } from "styled-components";
import { Header } from "../components/outPages/Header";
import  logo from './../assets/logoShortly.svg'



export function CadastroPage(){
    
    return(
        <CsCadastroPage>
            <Header/>
            <img className="logo" src={logo}/>
            <form onSubmit="">
                    <input type="text" name="name" id="name" 
                        placeholder="Nome"/>
                    <input type="email" name="email" id="email" 
                        placeholder="Email"/>
                    <input type="password" name="password" id="password" 
                        placeholder="Senha"/>
                    <input type="password" name="password" id="password" 
                        placeholder="Confirme a senha"/>
                    <button>Criar Conta</button>
            </form>
            
        </CsCadastroPage>
    );
}

const CsCadastroPage = styled.div`
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
    form{
        
        width: 100%;
        height: 55vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;  
        

        input{
            border: none;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            width: 100%;
            height: 15%;
            border-radius: 13px;
            padding: 0 2.7%;
        }
        button{
            border: none;
            color: white;
            background-color: #5D9040;
            width: 25%;
            height: 17%;
            border-radius: 20px;
        }

    }
   
`;