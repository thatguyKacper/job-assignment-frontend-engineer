import { Article } from 'interfaces/Article';
import apiClient from 'services/api';

export interface Response {
    articles: Article[];
    articlesCount: number;
}

class ArticleService {
    getAllArticles() {
        return apiClient.get<Response>('/articles')
    }
}

export default new ArticleService();