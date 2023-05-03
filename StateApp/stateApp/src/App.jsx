import React, { useState } from "react";
import Course from "./Course.jsx";
import './App.css';
function getRandomCourse(){
  const courseArray = ['Angular','Bootstrap','Ccsharp','Kompleweb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

const App = () => {
  const [courses,setCourses] = useState([])

    const handleClick = ()=>{
    setCourses([...courses,getRandomCourse()])
  }
 const courseList = courses.map((course,index)=>{
      return  <Course key={index} courseName={course} />
})
  return (

    <div className="App">
      <button onClick={handleClick} className="courseButton">Kurs Ekle</button>
      <div className="courseList">{courseList}</div>
    </div>
  );
};

export default App;
