import axios from 'axios';

// Axios
async function fetchData(url: string) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro na requisição:', error.message);
        } else {
            console.error('Erro desconhecido:', error);
        }
    }
}

fetchData('http://localhost:8080/users');