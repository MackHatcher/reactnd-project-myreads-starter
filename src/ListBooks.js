import React, { Component } from 'react';
import BookShelf from './BookShelf';

import './App.css' 

class BookList extends Component {
    
    state = {shelfUpdate: false}

    render() {
        const { books, updateShelf } = this.props
        const categories = [{ type: 'currentlyReading', title: 'Currently Reading' },
                            { type: 'wantToRead', title: 'Wish to Read' },
                            { type: 'read', title: 'Read' }]
        return (
            <div className="list-books-content">
                {categories.map((shelf, index) => {
                    const shelfItems = books.filter (book => book.shelf === shelf.type)
                    return (
                        <div className="bookshelf">
                            <h2 className="bookshelf-title"></h2>
                            <div className="bookshelf-books">
                                <BookShelf
                                    books={ shelfItems }
                                    updateShelf= { updateShelf }
                                />    
                            </div>
                        </div>
                            )
                        })}
            </div>
        )
    }
}

export default BookList