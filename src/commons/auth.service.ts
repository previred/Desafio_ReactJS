import Cookies from 'js-cookie'

class AuthService {
  getAuthHeaders(): any {
    return Cookies.getJSON('auth_headers')
  }
}

export const authService = new AuthService()
