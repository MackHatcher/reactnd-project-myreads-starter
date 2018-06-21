import React from 'react'
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import './App.css';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state =  { books: [] 
    }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(response => {

    newBook.shelf = newShelf

    let updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

    updatedBooks.push(newBook);
    this.setState({ books: updatedBooks})
  })
  }      
    
    
  

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route path="/search" render={( { history }) => (
          <SearchPage
            books={ books }
            updateShelf={ this.updateShelf }
          />
        )} />
        <Route exact  path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <ListBooks
            books={ books }
            updateShelf={ this.updateShelf }
        />
          <div className="open-search">
            <Link to="/search">Search</Link>
          
          </div>
        </div>
        )} />         
      </div>
    )          
  }
}           

export default BooksApp
