import type { Login } from './../interfaces/ILogin';

export const useLogin = () => {

      const loginInput = ref<Login>({usuario: '', senha: ''})

      const login = useState<Login>('login', () => loginInput)

      return{
            login
      }
}