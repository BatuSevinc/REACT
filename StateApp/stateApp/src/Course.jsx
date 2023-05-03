import React from "react";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
import './Course.css'
const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  Kompleweb
};

function Course({courseName}) {
  return (
    <div>
      <img className="imgCourse" src={courseMap[courseName]} alt="" />
    </div>
  );
}
export default Course;
