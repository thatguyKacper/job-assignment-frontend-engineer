import Error from "components/Error";
import Loader from "components/Loader";
import useArticle from "hooks/useArticle";
import useComments from "hooks/useComments";
import BaseLayout from "layouts/BaseLayout";
import { Link } from "react-router-dom";

export default function Article() {
  const { article, errorArticle, isLoadingArticle } = useArticle();
  const { comments, errorComments, isLoadingComments } = useComments();

  return (
    <BaseLayout>
      <div className="article-page">
        <div className="banner">

          {errorArticle &&
            <Error error={errorArticle} />
          }
          {isLoadingArticle &&
            <Loader />
          }

          <div className="container">
            <h1>{article?.title}</h1>

            <div className="article-meta">
              <Link to={`/profile/${article?.author.username}`}>
                <img src={article?.author.image} />
              </Link>
              <div className="info">
                <Link to={`/profile/${article?.author.username}`} className="author">
                  {article?.author.username}
                </Link>
                <span className="date">{article?.createdAt}</span>
              </div>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round" />
                &nbsp; Follow {article?.author.username} <span className="counter">({article?.author.following})</span>
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart" />
                &nbsp; Favorite Post <span className="counter">({article?.favoritedCount})</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <p>{article?.description}</p>
              <h2 id="introducing-ionic">{article?.title}</h2>
              <p>{article?.body}</p>
            </div>
          </div>

          <hr />

          <div className="article-actions">
            <div className="article-meta">
              <Link to={`/profile/${article?.author.username}`}>
                <img src={`/profile/${article?.author.image}`} />
              </Link>
              <div className="info">
                <Link to={`/profile/${article?.author.username}`} className="author">
                  {article?.author.username}
                </Link>
                <span className="date">{article?.createdAt}</span>
              </div>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round" />
                &nbsp; Follow {article?.author.username}
              </button>
              &nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart" />
                &nbsp; Favorite Post <span className="counter">({article?.author.following})</span>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <form className="card comment-form">
                <div className="card-block">
                  <textarea className="form-control" placeholder="Write a comment..." rows={3} />
                </div>
                <div className="card-footer">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  <button className="btn btn-sm btn-primary">Post Comment</button>
                </div>
              </form>

              {errorComments &&
                <Error error={errorComments} />
              }
              {isLoadingComments &&
                <Loader />
              }


              {comments.map((comment) => {
                <div className="card">
                  <div className="card-block">
                    <p className="card-text">{comment.body}</p>
                  </div>
                  <div className="card-footer">
                    <Link to={`/profile/${comment.author.username}`} className="comment-author">
                      <img src={comment.author.image} className="comment-author-img" />
                    </Link>
                    &nbsp;
                    <Link to={`/profile/${comment.author.username}`} className="comment-author">
                      {comment.author.username}
                    </Link>
                    <span className="date-posted">{comment.createdAt}</span>
                  </div>
                </div>
              })}

              {/* <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="/#/profile/jacobschmidt" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="/#/profile/jacobschmidt" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                  <a href="/#/profile/jacobschmidt" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="/#/profile/jacobschmidt" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                  <span className="mod-options">
                    <i className="ion-edit" />
                    <i className="ion-trash-a" />
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
