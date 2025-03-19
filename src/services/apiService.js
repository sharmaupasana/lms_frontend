import { API_BASE_URL } from '../constants/utils';

export async function getRequest(url) {
    var finalUrl = `${API_BASE_URL}${url}`
    var datas = await fetch(finalUrl)
    var response = await datas.json()
    return response
}   

export async function postRequest(url, data) {
    var finalUrl = `${API_BASE_URL}${url}`
    var datas = await fetch(finalUrl,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
    })
    var response = await datas.json()
    return response
}