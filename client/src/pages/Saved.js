import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ViewBtn from "../components/buttons/viewBtn";
import DeleteBtn from "../components/buttons/deleteBtn";
import { List, ListItem } from "../list";


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

    function handleView (event){
        event.preventDefault();
        const id = event.target.getAttribute("data-id");
    }
    
    function handleDelete (event){
        event.preventDefault();
        const savedId = event.target.getAttribute("data-id");
        deleteSavedBook(savedId)
    }

    return (
        <div className="container-fluid">
            <div ClassName="row">
                <h1>Saved Books</h1>
           
                {savedBooks.length ?  
                (<SavedResults 
                deleteHandler ={deleteHandler}
                viewHandler = {viewHandler}
                savedBooks = {savedBooks}
                />
                ): 
                (<EmptySavedCard/>)
            }
      </div>
    )
}

       

  export default SavedBooks;