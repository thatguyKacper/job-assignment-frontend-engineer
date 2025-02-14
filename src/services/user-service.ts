
import { Author } from 'interfaces/author';
import apiClient from 'services/api';

interface ResponseProfile {
    profile: Author;
}

interface ResponseUser {
    user: User;
}

export interface RequestUser {
    email: string;
    password: string;
}

export interface User {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}

class UserService {
    getProfile(username: string) {
        return apiClient.get<ResponseProfile>(`/profiles/${username}`)
    }
    loginUser(email: string, password: string) {
        return apiClient.post<ResponseUser>('/users/login', { user: { email, password } })
    }
}

export default new UserService();