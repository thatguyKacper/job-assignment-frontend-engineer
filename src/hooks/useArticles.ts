import { Article } from "interfaces/Article";
import { useEffect, useState } from "react";
import articleService from "services/article-service";

const useArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        articleService
            .getAllArticles()
            .then((res) => setArticles(res.data.articles))
            .catch((err) => setError(err.message))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return { articles, error, isLoading };
}

export default useArticles;