import { defineStore } from 'pinia';

export const useRouteStore = defineStore('route', {
  state: () => ({
    lastRoute: null
  }),
  
  actions: {
    setLastRoute(route) {
      this.lastRoute = route;
      // Сохраняем в localStorage
      localStorage.setItem('lastRoute', JSON.stringify(route));
    },
    
    getLastRoute() {
      // Пытаемся получить из localStorage
      const savedRoute = localStorage.getItem('lastRoute');
      if (savedRoute) {
        try {
          return JSON.parse(savedRoute);
        } catch (e) {
          console.error('Error parsing saved route:', e);
          return null;
        }
      }
      return null;
    },
    
    clearLastRoute() {
      this.lastRoute = null;
      localStorage.removeItem('lastRoute');
    }
  }
});