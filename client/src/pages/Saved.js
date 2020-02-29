import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ViewBtn from "../components/buttons/viewBtn";
import DeleteBtn from "../components/buttons/deleteBtn";
import { List, ListItem } from "../list";
import axios from 'axios'


const SavedBooks = () => {
    
    const [savedBooks, setSavedBooks] = useState("");


    useEffect(() => {
        loadSavedBooks();
      }, []);

    const loadSavedBooks = async () => {
        try {
            const response = await API.getBooks();
             setSavedBooks(response.data);
        } catch (error) {
            console.group("LOAD BOOKS");
            console.log(error);
            console.groupEnd();
        }
     };
    
    const deleteSavedBook = async (savedId) => {
      try {
            await API.deleteBook(savedId);
            loadSavedBooks();
      } catch(error) {
            console.group("DELETE A BOOK");
            console.log(error);
            console.groupEnd();
      }
    };

  
    return (
        <div className="container-fluid">
            <div ClassName="row">
                <h1>Saved Books</h1>
                {savedBooks.length ? (
                    <List>
                    {result.map(book => (
                        <ListItem key={book._id}>
                        <p>
                            <strong>
                            {book.volumeInfo.title} 
                            </strong>

                            {book.volumeInfo.subtitle}
                            {book.volumeInfo.authors}
                            {book.volumeInfo.description}
                            {book.volumeInfo.imageLinks &&
                               (<img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />)
                            }
                        </p>
                        
                        <ViewBtn url={book.volumeInfo.previewLink} />
                        <DeleteBtn />
                        </ListItem>
                    ))}
                    </List>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </div>
        </div>
    
    );
  }

  export default SavedBooks;
