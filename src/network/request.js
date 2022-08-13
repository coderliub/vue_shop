import axios from 'axios'

// 这时instance的返回值就是一个promise
// 传递一个config到模块中进行网络请求,返回一个带有结果的promise
export function request (config) {
  // 1,创建axios的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/private/v1/',
    timeout: 5000
  })

  // 2.axios的拦截器，用axios就是全局拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 2.1请求拦截的作用
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // 3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
    return config
  }, err => {
    // console.log(err);
    return Promise.reject(err)
  })
  // 2.2拦截响应
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    return Promise.reject(err)
  })

  // 发送真正的网络请求
  return instance(config)
}
