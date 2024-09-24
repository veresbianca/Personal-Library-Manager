import React from "react";
import { useFormik } from "formik";
import { addBook, updateBook } from "../services/bookService";
import { Book } from "../types/Book";
import Grid from "@mui/material/Grid2";
import { TextField, Button, Box } from "@mui/material";

interface BookFormProps {
  onSuccess: () => void;
  bookToEdit?: Book | null; // If this is passed, the form will be in edit mode
}

export const BookForm: React.FC<BookFormProps> = ({
  onSuccess,
  bookToEdit,
}) => {
  const formik = useFormik({
    initialValues: {
      title: bookToEdit?.title ?? "",
      author: bookToEdit?.author ?? "",
      genre: bookToEdit?.genre ?? "",
      description: bookToEdit?.description ?? "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (bookToEdit) {
        // Update book if we're in edit mode
        await updateBook(bookToEdit.id, values);
      } else {
        // Add new book if we're not editing
        await addBook(values);
      }
      onSuccess();
    },
  });

  return (
    <Box
      component="form"
      className="container-styles"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        mb: { xs: 2, sm: 3, md: 4, lg: 5 },
      }}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            required
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            id="author"
            name="author"
            label="Author"
            value={formik.values.author}
            onChange={formik.handleChange}
            required
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            id="genre"
            name="genre"
            label="Genre"
            value={formik.values.genre}
            onChange={formik.handleChange}
            required
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            required
          />
        </Grid>
        <Grid size={12}>
          <Button type="submit" variant="contained" fullWidth>
            {bookToEdit ? "Update Book" : "Add Book"}{" "}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
