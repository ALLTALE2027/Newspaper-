import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner";

import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // document.title = `${props.category}@NEWS4U`;

  const updateNews = async () => {
    props.Progress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=32ee137e9aa74b9699a72ae8e47bf140&page=${page}&pagesize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    props.Progress(40);
    let parsedData = await data.json();
    props.Progress(70);

    setArticles(parsedData.articles);
    setTotalPages(parsedData.totalResults);
    setLoading(false);

    props.Progress(100);
  };

  useEffect(() => {
    document.title = `${props.category}@NEWS4U`;
    updateNews();
  }, []);

  const handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${
    //   props.category
    // }&apiKey=32ee137e9aa74b9699a72ae8e47bf140&page=${
    //   this.state.page - 1
    // }&pagesize=${props.pageSize}`;

    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });

    // this.setState({ page: this.state.page - 1 });
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    // if (
    //   this.state.page + 1 >
    //   Math.ceil(this.state.totalPages / props.pageSize)
    // ) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=32ee137e9aa74b9699a72ae8e47bf140&page=${
    //     this.state.page + 1
    //   }&pagesize=${props.pageSize}`;

    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }

    // this.setState({ page: this.state.page + 1 });
    setPage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });

    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=32ee137e9aa74b9699a72ae8e47bf140&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    //page+1 is added in url as it was taking some time to update using setPage
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalPages(parsedData.totalResults);

    //   this.setState({
    //     articles: this.state.articles.concat(parsedData.articles), // conact is used to add more news add end as we scroll
    //     totalPages: parsedData.totalResults,
    //   });
  };

  // render() {
  return (
    <div className="container my-3">
      <h2
        className="text-center "
        style={{ margin: "35px 0px", marginTop: "80px" }}
      >
        Top Headlines of the day
      </h2>
      {/* {this.state.loading && <Spinner />} */}

      {/* {loading && <Spinner />} */}
      {/* loading icon */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.lenght !== totalPages}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-1" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    readMore={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-light"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalPages / props.pageSize)
            }
            type="button"
            className="btn btn-light"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div> */}
    </div>
  );
  // }
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
