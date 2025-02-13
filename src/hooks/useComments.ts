import { useEffect, useState } from "react";
import articleService from "services/article-service";
import { useParams } from "react-router-dom";
import { Comment } from "interfaces/comment";

interface RouteParams {
    slug: string
}

const useComments = () => {
    const { slug } = useParams<RouteParams>();
    const [comments, setComments] = useState<Comment[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);

        articleService
            .getComments(slug)
            .then((res) => setComments(res.data.comments))
            .catch((err) => setError(err.message))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return { comments, error, isLoading };
}

export default useComments;