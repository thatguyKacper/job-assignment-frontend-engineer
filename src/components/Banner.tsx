import { Article } from "interfaces/article";

export default function Banner(title: string, username: string, image: string, createdAt: string, following: number, favoritedCount: number) {

    return (
        <div className="banner">
            <div className="container">
                <h1>{title}</h1>

                <div className="article-meta">
                    <a href={`/#/profile/${username}`}>
                        <img src={image} />
                    </a>
                    <div className="info">
                        <a href={`/#/profile/${username}`} className="author">
                            {username}
                        </a>
                        <span className="date">{createdAt}</span>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary">
                        <i className="ion-plus-round" />
                        &nbsp; Follow {username} <span className="counter">({following})</span>
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-sm btn-outline-primary">
                        <i className="ion-heart" />
                        &nbsp; Favorite Post <span className="counter">({favoritedCount})</span>
                    </button>
                </div>
            </div>
        </div>
    )
}