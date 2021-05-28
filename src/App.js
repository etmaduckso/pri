import Axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyBd9H4JeRLdn_QE28OduTsOfCNJdJ19IM0");


    function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        book +
        "&key=" +
        apiKey +
        "&maxResults=30"
    ).then((data) => {
      console.log(data.data.items);
      setResult(data.data.items);
    });
  }

  return (
    <div className={handleSubmit}>
      <h1>+ LIVROS</h1>

      <form onSubmit="handleSubmit">
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control mt-10"
            placeholder="Qual Livro Deseja?"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Encontrar!
        </button>
      </form>

      {result.map(book =>(
<image src={book.volumesInfo.imageLinks.thumbnail} alt={book.title}/>
      ))}
    </div>
  );
}
