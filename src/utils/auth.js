export const isAuthenticated = () => sessionStorage.getItem('auth');

export const Logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('auth');
}