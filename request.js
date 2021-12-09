const key = 'b5e58e6cc9d78b2d0ce5fedd174895aa';

// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=your user api';



const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;
    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data;

}
