import React from 'react'

export const fetchData = async () => {
    try {
        const api = await fetch('https://covid19.mathdro.id/api');
        var response =await api.json();
        console.log('response',response)
    }
    catch (error) {
        console.log(error)
    }
    return response;
}
