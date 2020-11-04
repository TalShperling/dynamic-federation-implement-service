import { addBook, deleteBookById, getAllBooks, getBookById, updateBook } from '../../utils/bookDataSource';
import { IBook } from '../models/books/Book';
import { IBookMutationResponse } from '../models/books/BookMutationResponse';
import { GraphQLResolverMap } from 'apollo-graphql';
import { Reference } from '../models/books/Reference';

export const bookExternalResolvers: GraphQLResolverMap = {
  Book: {
    __resolveReference: async (ref: Reference) => {
      return await getBookById(ref.id);
    },
  },
};

export const booksQueries: GraphQLResolverMap = {
  Query: {
    books: async () => {
      return await getAllBooks();
    },
    book: async (_, { bookId }) => await getBookById(bookId),
  },
};

export const booksMutations: GraphQLResolverMap = {
  Mutation: {
    createBook: async (_, { bookToAdd }) => {
      const duplicatedBook: void | IBook = await getBookById(bookToAdd.id);
      if (duplicatedBook) {
        return {
          success: false,
          message: `ID is already exists, id: ${duplicatedBook.id}`,
          books: await getAllBooks(),
          book: duplicatedBook,
        } as IBookMutationResponse;
      }

      await addBook(bookToAdd);

      return {
        success: true,
        message: 'book was successfully added',
        books: await getAllBooks(),
        book: bookToAdd,
      } as IBookMutationResponse;
    },
    updateBook: async (_, { bookToUpdate }) => {
      const bookInList: IBook | void = await getBookById(bookToUpdate.id);

      if (bookInList) {
        await updateBook(bookToUpdate);

        return {
          success: true,
          message: `Book was updated successfully.`,
          books: await getAllBooks(),
          book: bookInList,
        } as IBookMutationResponse;
      } else {
        return {
          success: false,
          message: 'Book does not exists',
          books: await getAllBooks(),
        } as IBookMutationResponse;
      }
    },
    deleteBook: async (_, { bookIdToDelete }) => {
      let bookToDelete: IBook | void = await getBookById(bookIdToDelete);

      if (bookToDelete) {
        await deleteBookById(bookIdToDelete);

        return {
          success: true,
          message: `Book was deleted successfully.`,
          books: await getAllBooks(),
        };
      } else {
        return {
          success: false,
          message: 'Book Id was not found',
          books: await getAllBooks(),
        };
      }
    },
  },
};
