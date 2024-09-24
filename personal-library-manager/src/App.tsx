import { Container, Typography } from "@mui/material";
import { BookList } from "./components/BookList";
import "./App.css";

function App() {
  return (
    <Container>
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "4rem",
            lg: "5rem",
            xl: "6rem",
          },
          textDecoration: "underline",
          marginBottom: {
            xs: "3rem",
            sm: "3.5rem",
            md: "5rem",
            lg: "2.5rem",
            xl: "3rem",
          },
          marginTop: {
            xs: "3rem",
            sm: "3.5rem",
            md: "5rem",
            lg: "2.5rem",
            xl: "3rem",
          },
        }}
      >
        Personal Library Manager
      </Typography>
      <BookList />
    </Container>
  );
}

export default App;
