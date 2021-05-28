import Axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function App() {


  const [Books,setBook] = useState("");
  const [result,setResult] = useState([]);
  const [apiKey,setApiKey] = useState("AIzaSyAk6-GfKEDjnsCIp0vrK3psAt_vrSKb61E");
  
  
  function handleChange(event){
  
    const book = event.target.value;
    setBook(book);
  }
  
  function handleSubmit(event){
  
    event.preventDefault();
      Axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40").then(data => {
console.log(data);
      })
  }
  
    return (
  <div className={handleSubmit}>
  
  <h1>+ LIVROS</h1>
  
      <form onSubmit="handleSubmit">
               <div className="form-group">
        
                <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Search for Books" autoComplete="off"/>
  
              </div>
              <button type="submit" className="btn btn-danger">Search</button>
  
      </form>
  
  
  



</div>
  );
}
