import axios from 'axios';
import { Book } from '../types/Book';

const API_URL = 'http://localhost:3001/books';

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await axios.get<Book[]>(API_URL);
  return response.data;
};

export const addBook = async (book: Omit<Book, 'id'>): Promise<Book> => {
  const response = await axios.post<Book>(API_URL, book);
  return response.data;
};

export const updateBook = async (id: number, book: Partial<Book>): Promise<Book> => {
  const response = await axios.put<Book>(`${API_URL}/${id}`, book);
  return response.data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
