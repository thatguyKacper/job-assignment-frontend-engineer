
import { Author } from 'interfaces/author';
import apiClient from 'services/api';

interface ResponseProfile {
    profile: Author;
}

class UserService {
    getProfile(username: string) {
        return apiClient.get<ResponseProfile>(`/profiles/${username}`)
    }
}

export default new UserService();