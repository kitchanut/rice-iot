import axios from 'axios'
const config = useRuntimeConfig();
export const HOSTNAME = config.serverUrl

export async function request(method: string, url: string, data: {}, auth = false,) {
  const token = localStorage.getItem('token')
  const prophetId = localStorage.getItem('prophet_id')
  const shopId = localStorage.getItem('shop_id')

  const headers: any = {}
  if (token) {
    headers['Authorization'] = 'Bearer ' + token
  }
  if (prophetId) {
    headers['prophetId'] = prophetId
  }
  if (shopId) {
    headers['shopId'] = shopId
  }
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    })
    return response
  } catch (error) {
    return error
  }
}
