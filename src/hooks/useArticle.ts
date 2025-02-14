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
    const [errorArticle, setErrorArticle] = useState('');
    const [isLoadingArticle, setIsLoadingArticle] = useState(false);


    useEffect(() => {
        setIsLoadingArticle(true);

        articleService
            .getArticle(slug)
            .then((res) => setArticle(res.data.article))
            .catch((err) => setErrorArticle(err.message))
            .finally(() => {
                setIsLoadingArticle(false);
            });
    }, []);

    return { article, errorArticle, isLoadingArticle };
}

export default useArticle;