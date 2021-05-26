import axios from 'axios'

axios.defaults.baseURL = 'http://open.duyiedu.com'
axios.interceptors.request.use(
  config => {
    config.params = {
      ...config.params,
      appkey: 'missX_1590675685508'
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

export default axios
