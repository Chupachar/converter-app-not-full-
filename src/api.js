const API_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export function getExchange() {
    return fetch(API_URL).then(resp => resp.json())
}


