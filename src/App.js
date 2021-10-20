import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom';
import './App.css'
import SearchPage from './components/SearchPage';
import BooksList from './components/BooksList';

class BooksApp extends React.Component {
 
    render() {
      return (
        <div className="app">
          <Route path="/" exact component={BooksList} />
          <Route path="/search" component={SearchPage}/>
        </div>
      );
    }
}

export default BooksApp
