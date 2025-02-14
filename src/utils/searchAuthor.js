export function searchAuthor(articles, authorName) {
    const matchingAuthors = [];
    for (const article of articles) {
        if (article.author.username === authorName) {
            matchingAuthors.push(article);
        }
    }
    return matchingAuthors;
}