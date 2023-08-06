import axios from "axios";
import { useEffect, useState } from "react";



export const getRanking = (setRanking) => {
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/ranking`)
            .then(res=>{
                setRanking(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);
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

export const postFormLogin = (formLogin, navigate) => {   
    axios.post(`${import.meta.env.VITE_API_URL}/signin`, formLogin)
        .then(res=>{
            console.log(res);
            navigate('/home');
            
        })
        .catch(err=>{
            console.log(err.response.data);
        })   
}