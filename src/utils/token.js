// 封装token
const key = 'library'
// 设置token
export const setToken = (token) => localStorage.setItem(key, token)

// 获取token
export const getToken = () => localStorage.getItem(key)

// 移除token
export const removeToken = () => localStorage.removeItem(key)
