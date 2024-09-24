import React, { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { deleteBook } from "../services/bookService";
import { Book } from "../types/Book";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { BookForm } from "./BookForm";

export const BookList: React.FC = () => {
  const { books, isLoading, isError, mutate } = useBooks();
  const [bookToEdit, setBookToEdit] = useState<Book | null>(null);

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    mutate();
  };

  const handleEdit = (book: Book) => {
    setBookToEdit(book);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading books</div>;

  return (
    <>
      <BookForm
        onSuccess={() => {
          mutate();
          setBookToEdit(null);
        }}
        bookToEdit={bookToEdit}
      />
      <List
        className="container-styles"
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2.25rem",
              md: "3rem",
              xl: "5rem",
            },
            margin: {
              xs: "1.5rem",
              sm: "2.25rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "3rem",
            },
          }}
        >
          Books
        </Typography>
        {books && books.length > 0 ? (
          books?.map((book: Book, index: number) => (
            <ListItem
              key={book.id}
              sx={{
                padding: "0",
              }}
            >
              <ListItemText
                primary={`${index + 1}. ${book.title}`}
                secondary={`${book.author} - ${book.genre}`}
              />
              <Button color="primary" onClick={() => handleEdit(book)}>
                Edit
              </Button>
              <Button color="error" onClick={() => handleDelete(book.id)}>
                Delete
              </Button>
            </ListItem>
          ))
        ) : (
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ textAlign: "center", marginTop: 2 }}
          >
            No books found. Please add some books to your library.
          </Typography>
        )}
      </List>
    </>
  );
};
