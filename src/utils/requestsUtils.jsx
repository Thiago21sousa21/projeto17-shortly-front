import axios from "axios";


export const getRanking = (setRanking) => {
    axios.get(`${import.meta.env.VITE_API_URL}/ranking`)
    .then(res=>{
        setRanking(res.data);
    })
    .catch(err=>{
        console.log(err);
    })
}

export const postNewClient = (formNewClient) => {    
        axios.post(`${import.meta.env.VITE_API_URL}/signup`, formNewClient)
            .then(res=>{
                console.log(res);
                alert(res.data);
            })
            .catch(err=>{
                console.log(err.response.data);
                alert(err.response.data);
            })   
}

export const postFormLogin = (formLogin, navigate, context) => {   
   
        axios.post(`${import.meta.env.VITE_API_URL}/signin`, formLogin)
        .then(res=>{
            const {setToken} = context;
            setToken(res.data.token);
            localStorage.setItem('localToken', res.data.token);
            navigate('/home');            
        })
        .catch(err=>{
            console.log(err);
            alert(err.response.data);
        })
 
}

export const getMyUrls = (setMyUrls) => {   
    const localToken = localStorage.getItem('localToken');
    const localConfig = {headers:{authorization:`Bearer ${localToken}`}}
    axios.get(`${import.meta.env.VITE_API_URL}/users/me`, localConfig)
    .then(res => {
        setMyUrls(res.data.shortenedUrls)
    })
    .catch(err => {
        console.log(err);
    })

}

