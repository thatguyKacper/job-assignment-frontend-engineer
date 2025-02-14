import { useEffect, useState } from "react";
import userService, { User } from "services/user-service";

const useLogin = (email: string, password: string) => {
    const [user, setUser] = useState<User>();
    const [errorUser, setErrorUser] = useState('');
    const [isLoadingUser, setIsLoadingUser] = useState(false);

    useEffect(() => {
        setIsLoadingUser(true);

        userService
            .loginUser(email, password)
            .then((res) => setUser(res.data.user))
            .catch((err) => setErrorUser(err.message))
            .finally(() => {
                setIsLoadingUser(false);
            });
    }, []);

    return { user, errorUser, isLoadingUser };
}

export default useLogin;