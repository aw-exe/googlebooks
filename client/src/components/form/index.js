import React, {useState} from "react";
import reactDOM from 'react-dom';
import axios from 'axios';

// This file exports the book search form on the top of the search page. 

export function Form () {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey] = useState("AIzaSyCNCEuQcLrTPtE2VI-sPe1vltdPICVHS1I");

  function handleChange(event){
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event){
    event.preventDefault();

    axios.get("GET https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=20")
      .then(data => {
        setResult(data.data.items);
      }
    )
  }

  return (
    <div className="container">
      <h1>Book Search</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group mt-10">
              <input 
                type="text" onChange={handleChange} 
                className="form-control" 
                placeholder="Search for books"
              />
            </div>

            <button type="submit" className="btn btn-success">Search</button>
        </form>

      {result.map(book => (
        <a target="_blank" href={book.volumeInfo.previewLink}></a>
        <div src={book.volumeInfo.title} />
        <div src={book.volumeInfo.subtitle} />
        <div src={book.volumeInfo.authors} />
        <div src={book.volumeInfo.description} />
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
      ))}
    </div>
  )
}



// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input type= "text" className="form-control" {...props} placeholder="Search for books"/>
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children} Search
//     </button>
//   );
// }
