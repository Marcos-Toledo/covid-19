import axios from 'axios';

const baseUrl = 'https://coronavirus-19-api.herokuapp.com/countries';

export const getCountry = (country: string) => {
  return axios.get(`${baseUrl}/${country}/`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
}

export const getCountries = () => {
  return axios.get(`${baseUrl}/`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
}
