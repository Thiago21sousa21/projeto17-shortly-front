import { styled } from "styled-components";
import { Header } from "../components/outPages/Header";
import logo from './../assets/logoShortly.svg'
import { postFormLogin } from "../utils/requestsUtils";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generalContext } from "../contexts/generalContext";


export function LoginPage() {
    const [formLogin, setFormLogin] = useState({ email: '', password: ''});
    const navigate = useNavigate();
    let context = useContext(generalContext);

    const updateFormLogin = (e) => {
        const { id, value } = e.target;
        const newForm = { ...formLogin, [id]: value };
        setFormLogin(newForm);
    }

    const sendFormLogin = (e) => {
        e.preventDefault();
        postFormLogin(formLogin, navigate, context);
    }

    return (
        <CsLoginPage>
            
            <img className="logo" src={logo} />
            <form onSubmit={sendFormLogin}>
                <input type="email" name="email" id="email"
                    onChange={updateFormLogin}
                    value={formLogin['email']}
                    placeholder="Email" />
                <input type="password" name="password" id="password"
                    onChange={updateFormLogin}
                    value={formLogin['password']}
                    placeholder="Senha" />
                <button>Entrar</button>
            </form>

        </CsLoginPage>
    );
}

const CsLoginPage = styled.div`

height: 90vh;
    width: 100%;
    padding: 0 20% 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .logo{
        width: 20vw;
        height: 20vh;
    }
    form{
        //border: 1px solid;
        width: 100%;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3%; 
        

        input{
            border: none;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            width: 100%;
            height: 20%;
            border-radius: 13px;
            padding: 0 2.7%;
        }
        button{
            border: none;
            color: white;
            background-color: #5D9040;
            width: 25%;
            height: 22%;
            border-radius: 20px;
            cursor: pointer;
        }

    }

`;