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
    const [errorComments, setErrorComments] = useState('');
    const [isLoadingComments, setIsLoadingComments] = useState(false);


    useEffect(() => {
        setIsLoadingComments(true);

        articleService
            .getComments(slug)
            .then((res) => setComments(res.data.comments))
            .catch((err) => setErrorComments(err.message))
            .finally(() => {
                setIsLoadingComments(false);
            });
    }, []);

    return { comments, errorComments, isLoadingComments };
}

export default useComments;