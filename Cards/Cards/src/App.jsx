import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap5 from "./images/Bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
const App = () => {
  return (
    <>
      <section class="hero is-danger">
        <div class="hero-body">
          <p class="title">KURSLARIM</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                title="Angular"
                img={Angular}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, molestias. At vitae ut rem praesentium impedit possimus eveniet nesciunt exercitationem reprehenderit, doloribus aperiam, nobis animi eius, odio obcaecati ipsam! Expedita!"
              />
            </div>
            <div className="column">
              <Course
                title="Bootstrap 5"
                img={Bootstrap5}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, molestias. At vitae ut rem praesentium impedit possimus eveniet nesciunt exercitationem reprehenderit, doloribus aperiam, nobis animi eius, odio obcaecati ipsam! Expedita!!"
              />
            </div>
            <div className="column">
              <Course
                title="Komple Web"
                img={Kompleweb}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, molestias. At vitae ut rem praesentium impedit possimus eveniet nesciunt exercitationem reprehenderit, doloribus aperiam, nobis animi eius, odio obcaecati ipsam! Expedita!!!"
              />
            </div>
            <div className="column">
              <Course
                title="Backend"
                img={Ccsharp}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, molestias. At vitae ut rem praesentium impedit possimus eveniet nesciunt exercitationem reprehenderit, doloribus aperiam, nobis animi eius, odio obcaecati ipsam! Expedita!!!!"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
