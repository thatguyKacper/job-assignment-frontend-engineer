import { Author } from "interfaces/author";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "services/user-service";

interface RouteParams {
    username: string
}

const useProfile = () => {
    const { username } = useParams<RouteParams>();
    const [profile, setProfile] = useState<Author>();
    const [errorProfile, setErrorProfile] = useState('');
    const [isLoadingProfile, setIsLoadingProfile] = useState(false);


    useEffect(() => {
        setIsLoadingProfile(true);

        userService
            .getProfile(username)
            .then((res) => setProfile(res.data.profile))
            .catch((err) => setErrorProfile(err.message))
            .finally(() => {
                setIsLoadingProfile(false);
            });
    }, []);

    return { profile, errorProfile, isLoadingProfile };
}

export default useProfile;