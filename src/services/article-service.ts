import { Article } from 'interfaces/article';
import { Comment } from 'interfaces/comment';
import apiClient from 'services/api';

interface ResponseAllArticles {
    articles: Article[];
    articlesCount: number;
}

interface ResponseArticle {
    article: Article;
}

interface ResponseComments {
    comments: Comment[];
}

class ArticleService {
    getAllArticles() {
        return apiClient.get<ResponseAllArticles>('/articles')
    }
    getArticle(slug: string) {
        return apiClient.get<ResponseArticle>(`/articles/${slug}`)
    }
    getComments(slug: string) {
        return apiClient.get<ResponseComments>(`/articles/${slug}/comments`)
    }
}

export default new ArticleService();