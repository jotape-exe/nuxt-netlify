import type { User } from './../models/interface/IUser';

export const useRegisterUser = () => {
  const userState = useState<User>('user', () => ref<User>({usuario: 0, token: '', expiracao: 0, login: ''}))
  return {
      userState
  }
}