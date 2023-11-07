import { defineStore } from 'pinia';

export const useAuth = defineStore('auth', () => {
  
  const token = ref(localStorage.getItem('token') as any )
  const user = ref(JSON.parse(localStorage.getItem('user') as any))

  function setToken(tokenValue: any) {
    localStorage.setItem('token', tokenValue)
    token.value = tokenValue
  }

  function setUsuario(userValue: any) {
    localStorage.setItem('user', JSON.stringify(userValue))
    user.value = userValue
  }

  const isAuthenticated = computed(() => {
    return token.value && user.value
  })

  const fullName = computed(() => {
    if (user.value) {
      return user.value.firstName + ' ' + user.value.lastName
    }
    return ''
  })

  async function checkToken() {
    const jwtPayload = JSON.parse(window.atob(token.value.split('.')[1]))
    const expirado = Date.now() >= jwtPayload.exp * 1000
    console.log('token expirado', expirado)
    return !expirado
  }

  function clear() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    token.value = ''
    user.value = ''
  }

  return {
    token,
    user,
    setToken,
    setUsuario,
    checkToken,
    isAuthenticated,
    fullName,
    clear,
  }
})
