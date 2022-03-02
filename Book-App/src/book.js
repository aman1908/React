import React from "react";

const book = ({ imgPath, title, author }) => {
  return (
    <article className="book">
      <img src={imgPath} alt="img" />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontsize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

export default book;
