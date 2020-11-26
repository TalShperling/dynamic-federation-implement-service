import { IBook } from '../graphql/models/books/Book';

let books: IBook[] = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    category: {
      name: 'Hey1',
    },
    episode: {
      pages: 30,
    },
  },
  {
    id: 2,
    title: 'Jurassic Park',
    category: {
      name: 'Hey2',
    },
    episode: {
      pages: 10,
    },
  },
];

const getAllBooks = async (): Promise<IBook[]> => {
  return books;
};

const getBookById = async (bookId: number): Promise<IBook | void> => {
  return books.find((book) => book.id === bookId);
};

const addBook = async (newBook: IBook): Promise<void> => {
  books.push(newBook);
};

const deleteBookById = async (bookId: number): Promise<void> => {
  books = books.filter((book: IBook) => book.id !== bookId);
};

const updateBook = async (updatedBook: IBook): Promise<void> => {
  let book: IBook | void = await getBookById(updatedBook.id);
  Object.assign(book, updatedBook);
};

export { getAllBooks, getBookById, addBook, deleteBookById, updateBook };
