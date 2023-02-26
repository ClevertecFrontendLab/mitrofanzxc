import { TBookState } from '../slices.types';

export const initialState: TBookState = {
  bookData: {
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
  },
  isLoading: false,
  isError: false,
};
