import userService from "services/user-service";

export function signin(email: string, password: string) {
    return userService.loginUser(email, password)
        .then(res => {
            return res.data.user;
        })
        .catch(error => {
            throw error;
        });
}