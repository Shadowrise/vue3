export default {
  state: {
    books: [
      {
        id: '1',
        title: 'Book. Chapter 1',
        description: 'First page of the book',
        imageId: '1',
        parts: 7,
        level: ['B2', 'C1'],
        rating: 4,
        ratingCount: 100,
        youtubeLinkId: '1'
      },
      {
        id: '2',
        title: 'Book. Chapter 2',
        description: 'Second page of the book',
        imageId: '2',
        parts: 7,
        level: ['A2', 'C1'],
        rating: 3.5,
        ratingCount: 121,
        youtubeLinkId: '2'
      },
      {
        id: '3',
        title: 'Book. Chapter 3',
        description: 'Third page of the book',
        imageId: '3',
        parts: 7,
        level: ['A2'],
        rating: 2,
        ratingCount: 20,
        youtubeLinkId: '3'
      }
    ]
  },
  mutations: {
    setBooks(state, books) {
      state.books = books
    }
  },
  getters: {
    getBooks: books => state.books
  }
}
