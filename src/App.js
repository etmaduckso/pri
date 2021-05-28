import { useState } from "react";
import "./styles.css";

export default function App() {






  const [Books,setBook] = useState("");
  const [result,setResult] = useState([]);
  
  
  function handleChange(event){
  
  
  }
  
  function handleSubmit(event){
  
  
  
  }
  
    return (
  <div className={handleSubmit}>
  
  <h1>+ LIVROS</h1>
  
      <form onSubmit="handleSubmit">
               <div class="form-group">
        
                <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Search for Books" autoComplete="off"/>
  
              </div>
              <button type="submit" className="btn btn-danger">Search</button>
  
      </form>
  
  
  



</div>
  );
}
