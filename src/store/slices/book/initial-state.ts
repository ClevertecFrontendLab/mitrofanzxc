import { BookState } from '../slices.types';

export const BOOK_WITH_INITIAL_DATA = {
  id: 0,
  title: '',
  rating: 0,
  issueYear: '',
  description: '',
  publish: '',
  pages: '',
  cover: '',
  weight: '',
  format: '',
  ISBN: '',
  producer: '',
  authors: [],
  images: [],
  categories: [],
  comments: [
    {
      id: '',
      rating: 0,
      text: '',
      createdAt: '',
      user: {
        commentUserId: 0,
        firstName: '',
        lastName: '',
        avatarUrl: '',
      },
    },
  ],
  booking: null,
  delivery: null,
  histories: [],
};

export const initialState: BookState = {
  bookData: BOOK_WITH_INITIAL_DATA,
  isLoading: false,
  isError: false,
};
