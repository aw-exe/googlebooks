import React, { useState } from "react";
import ViewBtn from "../components/buttons/viewBtn";
import SaveBtn from "../components/buttons/saveBtn";
import { List, ListItem } from "../list";
import { Input, FormBtn } from "../components/form";
import axios from 'axios'


const SearchBooks = () => {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey] = useState("AIzaSyCNCEuQcLrTPtE2VI-sPe1vltdPICVHS1I");
  
    function handleChange(event){
      const book = event.target.value;
  
      setBook(book);
    }
  
    function handleSubmit(event){
      event.preventDefault();
  
      axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=20")
        .then(data => {
          setResult(data.data.items || []);
        }
      )
    }
  
    return (
        <div className="container-fluid">
            <div ClassName="row">
                <h1>Book Search</h1>
                <form onSubmit={handleSubmit}>
                    <Input type="text" onChange={handleChange} placeholder="Search for books"/>
                    <FormBtn type="submit">Search</FormBtn>
                </form>
           
                {book.length ? (
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
                        <SaveBtn />
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

  export default SearchBooks;
