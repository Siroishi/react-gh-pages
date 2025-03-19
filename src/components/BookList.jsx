import React from "react";
import books from "./booklist.json";
import "./bookList.css"; // Імпортуємо CSS

const BookList = () => {
    const booksArray = Object.values(books); // Перетворюємо об'єкт у масив

    return (
        <div className="book-list">
            <h1>📚 Список книг</h1>
            <ul>
                {booksArray.map((book, index) => (
                    <li key={index}>
                        <strong>{book.title}</strong>
                        <span>{book.author} ({book.year})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
