import axios from '@/axios.js'

var api = {
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getMenuList (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  getContainerList (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  getProvinceList (params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  getCityList (params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  },
  getMeituanList (params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  getLogin (params) {
    return axios.get('/api/meituan/login', { params })
  },
  getRegister (params) {
    return axios.get('/api/meituan/register', params)
  },
  getProducts () {
    return axios.get('/api/meituan/product/detail.json')
  }
}

export default api
