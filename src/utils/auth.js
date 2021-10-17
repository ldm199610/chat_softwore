import JsBase64 from 'js-base64'

const USER_TOKEN = 'LUMNEIM-TOKEN'
const USER_INFO = 'LUMNEIM-USERINFO'
const USER_SETTING = 'LUMENIM_SETTING'

/**
 * 设置用户授权token
 *
 * @param {String} token
 * @param {Number} expires
 */
export function setToken(token, expires) {
  expires = new Date().getTime() + expires * 1000
  return localStorage.setItem(
    USER_TOKEN,
    JSON.stringify({
      token,
      expires,
    })
  )
}

/**
 * 获取授权token
 */
export function getToken() {
  const result = JSON.parse(
    localStorage.getItem(USER_TOKEN) ||
    JSON.stringify({
      token: '',
      expires: 0,
    })
  )

  return result.token
}

/**
 * 设置用户信息
 *
 * @param {Object} data
 */
export function setUserInfo(data) {
  localStorage.setItem(USER_INFO, JsBase64.Base64.encode(JSON.stringify(data)))
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  const data = JsBase64.Base64.decode(localStorage.getItem(USER_INFO) || '')
  return data ? JSON.parse(data) : {}
}

/**
 * 获取用户本地缓存的设置信息
 */
export function getUserSettingCache() {
  const data = localStorage.getItem(USER_SETTING)
  return data ? JSON.parse(data) : {}
}

/**
 * 用户设置保存到浏览器缓存中
 *
 * @param {Object} state 用户设置相关信息
 */
export function setUserSettingCache(state) {
  localStorage.setItem(USER_SETTING, JSON.stringify(state))
}

/**
 * 删除用户相关缓存信息
 */
export function removeAll() {
  localStorage.removeItem(USER_TOKEN)
  localStorage.removeItem(USER_INFO)
  localStorage.removeItem(USER_SETTING)
}
export function getCurrentMilliSeconds() {
  return Math.round(new Date().getTime());
}

export function AppConfig() {
  return {
    apiUrl: "http://45.88.14.244:8092", // 接口地址
    websocketUrl: "ws://45.88.14.244:5260", //xmpp 主机的 地址
    jitsiServer: "https://meet.server.com/", //jitsi 音视频链接地址
    uploadServer: "http://45.88.14.244:8088/",
    uploadServer2: "http://update.pic1001.com:888/",
    fileServer: "http://pic.uu998122.com:666/",
    apiKey: "BFrCyKG16uekl87m",
    isOpenReceipt: 1,
    isOpenSMSCode: 0, //是否开短信验证码
    registerInviteCode: 0, //注册邀请码  0：关闭 1:一码一用(注册型邀请码)  2：一码多用（推广型邀请码）
    regeditPhoneOrName: 0, // 注册方式 0:手机号注册，1：用户名注册

  };
}