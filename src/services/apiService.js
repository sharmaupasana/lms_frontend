import { API_BASE_URL } from '../constants/utils';

export async function getRequest(url) {
    var finalUrl = `${API_BASE_URL}${url}`
    var datas = await fetch(finalUrl)
    var actualData = await datas.json()
    return actualData
}   