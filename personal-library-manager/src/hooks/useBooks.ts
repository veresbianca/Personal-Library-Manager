import useSWR from 'swr';
import { fetchBooks } from '../services/bookService';
import { Book } from '../types/Book';

export const useBooks = () => {
  const { data, error, mutate } = useSWR<Book[]>('books', fetchBooks);

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};
