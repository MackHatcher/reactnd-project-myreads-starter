import React, { Component } from 'react';
import Updater from './UpdateShelf';
import noImgAvail from './icons/no-image-icon-6.png'

class Book extends Component {

    render() {
        const { book, books, updateShelf } = this.props
        const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noImgAvail 
        const title = book.title ? book.title : "No title is available"
        return (
            <li>
                <div className="book">
                          <div className="book-top">
                            <div 
                                className="book-cover" 
                                style= {{ width: 128, height: 193, backgroundImage: `url(${coverImg})`}}>
                            </div>
                            <Updater
                                book={ book }
                                books={ books }
                                updateShelf={ updateShelf }
                            />     
                          </div>
                          <div className="book-title">{ title }</div>
                          {book.authors && book.authors.map((author, index) => (
                              <div className="book-authors" key={ index }></div>
                          ))} 
                </div>                
            </li>
        )
    }

}

export default Book;