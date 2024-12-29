function requireAuth(to, from, next) {
    const isAuthenticated = localStorage.getItem('auth_token');
    if (!isAuthenticated) {
      return next('/login');
    }
    next();
  }
  