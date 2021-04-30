export const isAuthenticated = () => sessionStorage.getItem('auth');

export const isAdmin = () => {
    const role = sessionStorage.getItem('user');
    return role === 'admin' ? true : false;
}

export const isUser = () => {
    const role = sessionStorage.getItem('user');
    return role === 'user' ? true : false;
}

export const Logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('auth');
}