import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const booksList = [
    {
      topic: "JavaScript",
      books: [
        {
          name: "Elequent JavaScript",
          rating: "4/5"
        },
        {
          name: "You Dont Know JS",
          rating: "3.5/5"
        }
      ]
    },

    {
      topic: "Business",
      books: [
        {
          name: "Never Split the Difference",
          rating: "4/5"
        },
        {
          name: "Loonshots",
          rating: "3/5"
        },
        {
          name: "Psychology of Money",
          rating: "4/5"
        }
      ]
    },
    {
      topic: "Fiction",
      books: [
        {
          name: "Lord of the Rings",
          rating: "5/5"
        },
        {
          name: "Harry Potter and the Sorcerer's Stone",
          rating: "3.9/5"
        }
      ]
    }
  ];
  const [list, setList] = useState([]);

  const clickHandler = async (bookList) => {
    await setList(bookList.books);
  };

  return (
    <div className="App">
      <h1>goodbooks</h1>
      <p>Check out my favourite books. Select a genre to start.</p>
      {booksList.map((list) => {
        return (
          <button key={list.topic} onClick={() => clickHandler(list)}>
            {list.topic}
          </button>
        );
      })}
      <hr />
      {list.map((book) => {
        return (
          <div key={book.name} className="box">
            <h3>{book.name}</h3>
            <p>{book.rating}</p>
          </div>
        );
      })}
    </div>
  );
}
