import { Article } from "interfaces/article";
import { useEffect, useState } from "react";
import articleService from "services/article-service";

const useArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [errorArticles, setErrorArticles] = useState('');
    const [isLoadingArticle, setIsLoadingArticle] = useState(false);

    useEffect(() => {
        setIsLoadingArticle(true);

        articleService
            .getAllArticles()
            .then((res) => setArticles(res.data.articles))
            .catch((err) => setErrorArticles(err.message))
            .finally(() => {
                setIsLoadingArticle(false);
            });
    }, []);

    return { articles, errorArticles, isLoadingArticle };
}

export default useArticles;