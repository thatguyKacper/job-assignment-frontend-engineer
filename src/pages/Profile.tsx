import Error from "components/Error";
import Loader from "components/Loader";
import useArticles from "hooks/useArticles";
import useProfile from "hooks/useProfile";
import { Article } from "interfaces/article";
import BaseLayout from "layouts/BaseLayout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchAuthor } from "utils/searchAuthor";

export default function Profile() {
  const [posts, setPosts] = useState<Article[]>([]);
  const { profile, errorProfile, isLoadingProfile } = useProfile();
  const { articles, errorArticles, isLoadingArticle } = useArticles();

  useEffect(() => {
    const match = searchAuthor(articles, profile?.username);

    setPosts(match);
  }, [articles, profile?.username]);

  return (
    <BaseLayout>
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">

              {errorProfile &&
                <Error error={errorProfile} />
              }
              {isLoadingProfile &&
                <Loader />
              }

              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={profile?.image} className="user-img" />
                <h4>{profile?.username}</h4>
                <p>
                  {profile?.bio}
                </p>
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-plus-round" />
                  &nbsp; Follow {profile?.username}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      My Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Favorited Articles
                    </a>
                  </li>
                </ul>
              </div>

              {errorArticles &&
                <Error error={errorArticles} />
              }
              {isLoadingArticle &&
                <Loader />
              }

              {posts.map((post: Article) => (
                <div className="article-preview">
                  <div className="article-meta">
                    <Link to={`/profile/${post.author.username}`}>
                      <img src={post.author.image} />
                    </Link>
                    <div className="info">
                      <Link to={`/profile/${post.author.username}`} className="author">
                        {post.author.username}
                      </Link>
                      <span className="date">{post.createdAt}</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                      <i className="ion-heart" /> {post.favoritedCount}
                    </button>
                  </div>
                  <Link to={`/articles/${post.slug}`} className="preview-link">
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <span>Read more...</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ BaseLayout>
  );
}
