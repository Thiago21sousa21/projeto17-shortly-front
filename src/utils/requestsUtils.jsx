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
            })
            .catch(err=>{
                console.log(err.response.data);
            })   
}

export const postFormLogin = (formLogin, navigate, context) => {   
   
        axios.post(`${import.meta.env.VITE_API_URL}/signin`, formLogin)
        .then(res=>{
            const {setToken} = context;
            setToken(res.data.token);
            navigate('/home');            
        })
        .catch(err=>{
            console.log(err);
        })
 
}

export const getMyUrls = (config, setMyUrls) => {   

    axios.get(`${import.meta.env.VITE_API_URL}/users/me`, config)
    .then(res => {
        console.log(res.data);
        setMyUrls(res.data.shortenedUrls)
    })
    .catch(err => {
        console.log(err);
    })

}