import {
  post,
  get,
  postQuery
} from '@/utils/request'
import {
  EncryptUtils
} from '@/utils/encryptUtils'
let CryptoJS = require("crypto-js")
// 登录服务接口
export const ServeLogin = obj => {
  let macValue = obj.apiKey + obj.areaCode + obj.account + obj.salt;
  obj.mac = EncryptUtils.encryptMacToBase64(macValue, EncryptUtils.buildLoginPassword(obj.password));
  var objParam = {};
  objParam.areaCode = obj.areaCode;
  objParam.account = obj.account;
  objParam.salt = obj.salt;
  objParam.deviceId = "web";
  objParam.mac = obj.mac;
  objParam.access_token = '';
  objParam.secret = obj.apiKey + EncryptUtils.paramKeySort(obj) + obj.salt
  objParam.secret = EncryptUtils.encryptMacToBase64(objParam.secret, CryptoJS.enc.Base64.parse(''));
  console.log(objParam.secret, '---objParam');
  return postQuery('/api/auth/getLoginCode', objParam)
}

// 注册服务接口
export const ServeRegister = data => {
  return post('/api/v1/auth/register', data)
}

// 退出登录服务接口
export const ServeLogout = data => {
  return post('/api/v1/auth/logout', data)
}

// 刷新登录Token服务接口
export const ServeRefreshToken = () => {
  return post('/api/v1/auth/refresh-token')
}

// 修改密码服务接口
export const ServeUpdatePassword = data => {
  return post('/api/v1/users/change-password', data)
}

// 修改手机号服务接口
export const ServeUpdateMobile = data => {
  return post('/api/v1/users/change-mobile', data)
}

// 修改手机号服务接口
export const ServeUpdateEmail = data => {
  return post('/api/v1/users/change-email', data)
}

// 发送手机号修改验证码服务接口
export const ServeSendMobileCode = data => {
  return post('/api/v1/users/send-mobile-code', data)
}

// 发送找回密码验证码
export const ServeSendVerifyCode = data => {
  return post('/api/v1/auth/send-verify-code', data)
}

// 找回密码服务
export const ServeForgetPassword = data => {
  return post('/api/v1/auth/forget-password', data)
}

// 搜索用户信息服务接口
export const ServeSearchUser = data => {
  return post('/api/v1/users/search-user', data)
}

// 修改个人信息服务接口
export const ServeUpdateUserDetail = data => {
  return post('/api/v1/users/edit-user-detail', data)
}

// 查询用户信息服务接口
export const ServeGetUserDetail = () => {
  return get('/api/v1/users/detail')
}

// 获取用户相关设置信息
export const ServeGetUserSetting = () => {
  return get('/api/v1/users/setting')
}

// 发送邮箱验证码服务接口
export const ServeSendEmailCode = data => {
  return post('/api/v1/users/send-change-email-code', data)
}