import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async(url) => {
    const {data} = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '55e3c0d90bmshc158acc3b16f07bp19c729jsn03b427b18134'
        }
    })

    return data;
}