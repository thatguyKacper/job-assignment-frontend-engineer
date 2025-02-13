import useArticles from "hooks/useArticles";
import Sidebar from "components/Sidebar";
import BaseLayout from "layouts/BaseLayout";
import { Link } from "react-router-dom";

export default function ArticleList() {
  const { articles, error, isLoading } = useArticles();

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

              {error &&
                <div className="article-preview">
                  <h1>Oops! Something went wrong...</h1>
                  <p>{error}</p>
                </div>
              }
              {isLoading &&
                <div className="article-preview">
                  <h1>Loading...</h1>
                  <p>Please wait</p>
                </div>}
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

              {/* <div className="article-preview">
                <div className="article-meta">
                  <a href="/#/profile/ericsimmons">
                    <img src="http://i.imgur.com/Qr71crq.jpg" />
                  </a>
                  <div className="info">
                    <a href="/#/profile/ericsimmons" className="author">
                      Eric Simons
                    </a>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart" /> 29
                  </button>
                </div>
                <a href="/#/how-to-build-webapps-that-scale" className="preview-link">
                  <h1>How to build webapps that scale</h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                </a>
              </div>

              <div className="article-preview">
                <div className="article-meta">
                  <a href="/#/profile/albertpai">
                    <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                  </a>
                  <div className="info">
                    <a href="/#/profile/albertpai" className="author">
                      Albert Pai
                    </a>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart" /> 32
                  </button>
                </div>
                <a href="/#/the-song-you-wont-ever-stop-singing" className="preview-link">
                  <h1>The song you won&lsquo;t ever stop singing. No matter how hard you try.</h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                </a>
              </div> */}
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </ BaseLayout>
  );
}
