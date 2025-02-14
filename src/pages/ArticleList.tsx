import useArticles from "hooks/useArticles";
import Sidebar from "components/Sidebar";
import BaseLayout from "layouts/BaseLayout";
import { Link } from "react-router-dom";
import Error from "components/Error";
import Loader from "components/Loader";

export default function ArticleList() {
  const { articles, errorArticles, isLoadingArticle } = useArticles();

  return (
    <BaseLayout>
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">

              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link disabled" href="">
                      Your Feed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>

              <div className="article-preview">
                {errorArticles &&
                  <Error error={errorArticles} />
                }
                {isLoadingArticle &&
                  <Loader />
                }
              </div>

              {articles.map(article => (
                <div className="article-preview">
                  <div className="article-meta">
                    <Link to={`/profile/${article.author.username}`}>
                      <img src={`/#/profile/${article.author.image}`} />
                    </Link>
                    <div className="info">
                      <Link to={`/profile/${article.author.username}`} className="author">
                        {article.author.username}
                      </Link>
                      <span className="date">{article.createdAt}</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                      <i className="ion-heart" /> {article.favoritedCount}
                    </button>
                  </div>
                  <Link to={`/${article.slug}`} className="preview-link">
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                  </Link>
                </div>
              ))}
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </ BaseLayout>
  );
}
