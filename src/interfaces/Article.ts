export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritedCount: number;
    author: {
        username: string;
        bio: string;
        image: string;
        following: boolean;
    };
}