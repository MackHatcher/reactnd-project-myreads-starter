import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {

    state = {
        query: '',
        newBooksArray: [],
        searchError: false
    }

    getBooks = (e) => {

        const query = e.target.value
        

         if (query) {
            if (query.length > 0) {
                BooksAPI.search(query).then((books)=> {
                {this.setState({newBooksArray: books, searchError: false})}
                })
                }else this.setState({newBooksArray: [], searchError: false})  
            } 
    }

    render() {

        const { newBooksArray, searchError } = this.state
        const { books, updateShelf } = this.props

        return (
            <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search"  to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                onChange={ this.getBooks }
                
              />
            </div>
          </div>
          <div className="search-books-results">
            { newBooksArray.length > 0 && (
              <div>
                <div className=''>
                  <h3>Search returned { newBooksArray.length } books </h3>
                </div>
                <ol className="books-grid">
                  {newBooksArray.map((book) => (
                    <Book
                      book={ book }
                      books={ books }
                      key={ book.id }
                      updateShelf={ updateShelf }
                    />
                  ))}
                </ol>
              </div>
            )}
            { searchError  && (
              <div>
                <div className=''>
                  <h3>Hmm.. There doesn't seem to be anything here... :( Please try a different term!</h3>
                  </div>
                </div>
            )}
          </div>
        </div>
      )}
}

export default SearchPage;