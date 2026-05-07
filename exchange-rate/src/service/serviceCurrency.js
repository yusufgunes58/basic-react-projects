const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

export const getExchangeRate = async (baseCurrency) => {

    const url = `${BASE_URL}?apikey=${API_KEY}&base_currency=${baseCurrency}`;

    const resp = await fetch(url);
    const info = await resp.json();

    return info.data;

}