import axios from "axios";

export default {
  // Gets all books
  getSaved: function () {
    return axios.get("http://afternoon-plains-47834.herokuapp.com/api/books/");
  },
  // Gets the book with the given id
  searchBook: function (search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("http://afternoon-plains-47834.herokuapp.com/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("http://afternoon-plains-47834.herokuapp.com/api/books/", bookData);
  }
};
