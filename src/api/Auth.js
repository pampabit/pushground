import Config from '../Config'
const Auth = {
  login,
  me,
  token,
  logout
}
export default Auth

function login(email, password) {
  if ( email && password ) {
    let fakeUser = {
      user: {name: 'PushGround User'},
      token: '123456789'
    }
    setSessionCookies(fakeUser)
    return fakeUser
  } else {
    return false
  }
}

function logout() {
  removeSessionCookies()
  return true
}

function me() {
  return localStorage['user']
}

function token() {
  return localStorage['token']
}

function setSessionCookies(data) {
  localStorage['user'] = JSON.stringify(data.user)
  localStorage['token'] = data.token
}

function removeSessionCookies(json) {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}
