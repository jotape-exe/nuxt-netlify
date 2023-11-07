import { useAuth } from '../store/session'

export default defineNuxtRouteMiddleware((to, from) => {
      const auth = useAuth();

      if (auth.isAuthenticated && to.path === '/auth/login') {
        return;
      }
    
      if (to.path.startsWith('/app') && !auth.isAuthenticated) {
        return navigateTo('/auth/login');
      }


})