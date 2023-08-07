import { styled } from "styled-components";
import { Header } from "../components/outPages/Header";
import  logo from './../assets/logoShortly.svg'
import { useState } from "react";
import { postNewClient } from "../utils/requestsUtils";



export function CadastroPage(){
const [formNewClient, setFormNewClient] = useState({name:'', email:'', password:'', confirmPassword: ''})

const updateFormNewClient = (e)=>{
    const {id, value} = e.target;
    const newForm = {...formNewClient, [id]: value};
    setFormNewClient(newForm);
}

    const sendNewClient = (e)=>{
        e.preventDefault();
        postNewClient(formNewClient);
    }
    
    return(
        <CsCadastroPage>
            <Header/>
            <img className="logo" src={logo}/>
            <form onSubmit={sendNewClient}>
                    <input type="text" name="name" id="name" 
                        onChange={updateFormNewClient}
                        value={formNewClient['name']}
                        placeholder="Nome"/>
                    <input type="email" name="email" id="email" 
                        onChange={updateFormNewClient}
                        value={formNewClient['email']}
                        placeholder="Email"/>
                    <input type="password" name="password" id="password" 
                        onChange={updateFormNewClient}
                        value={formNewClient['password']}
                        placeholder="Senha"/>
                    <input type="password" name="password" id="confirmPassword" 
                        onChange={updateFormNewClient}
                        value={formNewClient['confirmPassword']}
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
        width: 20vw;
        height: 20vh;
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