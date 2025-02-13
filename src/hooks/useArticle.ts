import { Article } from "interfaces/article";
import { useEffect, useState } from "react";
import articleService from "services/article-service";
import { useParams } from "react-router-dom";

interface RouteParams {
    slug: string
}

const useArticle = () => {
    const { slug } = useParams<RouteParams>();
    const [article, setArticle] = useState<Article>();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);

        articleService
            .getArticle(slug)
            .then((res) => setArticle(res.data.article))
            .catch((err) => setError(err.message))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return { article, error, isLoading };
}

export default useArticle;