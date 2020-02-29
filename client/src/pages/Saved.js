// import React, { useState, useEffect } from "react";
// import API from "../utils/API";
// import ViewBtn from "../components/buttons/viewBtn";
// import DeleteBtn from "../components/buttons/deleteBtn";
// import { List, ListItem } from "../list";
// import DeleteBtn from "../components/buttons/deleteBtn";
// import ViewBtn from "../components/buttons/viewBtn";


// const SavedBooks = () => {
    
    // const [savedBooks, setSavedBooks] = useState("");    

    // useEffect(() => {
    //     loadSavedBooks();
    //   }, []);

    // const loadSavedBooks = async () => {
    //     try {
    //         const response = await API.getBooks();
    //          setSavedBooks(response.data);
    //     } catch (error) {
    //         console.group("LOAD BOOKS");
    //         console.log(error);
    //         console.groupEnd();
    //     }
    //  };
    
    // const deleteSavedBook = async (savedId) => {
    //   try {
    //         await API.deleteBook(savedId);
    //         loadSavedBooks();
    //   } catch(error) {
    //         console.group("DELETE A BOOK");
    //         console.log(error);
    //         console.groupEnd();
    //   }
    // };

    // const handleView = (event) => {
    //     event.preventDefault();
    //     const id = event.target.getAttribute("data-id");
    // }
    
    // const handleDelete = (event) => {
    //     event.preventDefault();
    //     const savedId = event.target.getAttribute("data-id");
    //     deleteSavedBook(savedId)
    // }

    // return (
    //     <div className="container-fluid">
    //         <div ClassName="row">
    //             <h1>Saved Books</h1>
    //              <List>
    //                 {savedBooks.length ?  
    //                 (<ListItem>
    //                 <DeleteBtn handleDelete ={handleDelete} />
    //                 <ViewBtn handleView = {handleView} />
    //                 </ListItem>
    //                 ):(
    //                     <h3>No Results to Display</h3>
    //                 )}
    //             </List>
    //         </div>
    //     </div>
    // )
// }

       

//   export default SavedBooks;