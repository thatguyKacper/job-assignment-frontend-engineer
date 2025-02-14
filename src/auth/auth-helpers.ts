import { User } from "services/user-service";

export const isAuthenticated = () => {
    const email = sessionStorage.getItem('email');
    const jwt = sessionStorage.getItem('jwt');

    if (email && jwt) {
        return {
            email: JSON.parse(email),
            token: JSON.parse(jwt),
        };
    } else {
        return false;
    }
};

export const authenticate = (data: User) => {
    sessionStorage.setItem('jwt', JSON.stringify(data.token));
    sessionStorage.setItem('email', JSON.stringify(data.email));
};

export const clearSession = () => {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('email');
};