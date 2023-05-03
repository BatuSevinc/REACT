import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import SearchImages from './api';
import ImageList from "./components/ImageList";
function App() {

  const [images,setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
};
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}
export default App;
