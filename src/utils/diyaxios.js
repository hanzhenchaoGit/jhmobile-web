import axios from 'axios'
axios.defaults.timeout = 15000
// code状态码200判断
axios.interceptors.response.use((res) => {
  if (res.status === 654) { // 百度云请求超时检测
    window.alert('请求超时！')
  }
  if (res.status === 401) {
    debugger
    if( data.err_code === '用户不存在'){
      alert('请联系客服,账号未关联到机汇云')
    }else{
      alert('发送失败')
    }
  }
  if (res.data.success === false) {
    if (res.data.msg === '未登陆' && window.location.hash.indexOf('login') === -1) {
      window.location.href = window.location.origin + '/#/login'
    } else {
      window.alert(res.data.msg || '数据返回有误')
    }
    return Promise.reject(res)
  }
  return res
}, (error) => {
  console.log('promise error:' + error)
  return Promise.reject(error)
})
export default axios
