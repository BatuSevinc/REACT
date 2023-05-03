import { useState } from "react";
import "./App.css";

function SearchHeader({ search }) {
    const [value,setValue] = useState('')
  const handleFormSubmit = (event) => {
    search(value);
    event.preventDefault();
  };
  const handleChange =(event) =>{
    setValue(event.target.value)
  } 
  return (
    <div className="searchHeader">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input type="text" value={value} onChange={handleChange}/>
      </form>
    </div>
  );
}
export default SearchHeader;
