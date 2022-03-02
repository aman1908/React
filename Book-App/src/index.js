import React from "react";
import ReactDOM from "react-dom";
import Book from "./book";
import { data } from "./books";

import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
