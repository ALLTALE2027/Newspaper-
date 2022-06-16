import React, { Component } from "react";

const NewsItem = (props) => {
  // export class NewsItem extends Component {
  // render() {
  let { title, description, imageUrl, readMore, author, date } = props; //this.props is replaced with props

  return (
    <div>
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unkown"} ,on{" "}
              {new Date(date).toLocaleTimeString()}
              {/* date is converted to GMT date using DATE method */}
            </small>
          </p>
          <a
            href={readMore}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More on the news
          </a>
        </div>
      </div>
    </div>
  );
  // }
};

export default NewsItem;
