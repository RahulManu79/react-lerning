import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup
const Books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "I Love You to the Moon and Back Board book",
    author: "by Amelia Hepworth",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL300_SR300,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {Books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
