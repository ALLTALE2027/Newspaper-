import "./App.css";

import React, { Component, useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

const App = () => {
  // c = "your name";    // dont have to use let
  const [progress, setProgress] = useState(10);

  // render() {
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                Progress={setProgress}
                key="general"
                pageSize={9}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                Progress={setProgress}
                key="business"
                pageSize={9}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                Progress={setProgress}
                key="entertainment"
                pageSize={9}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                Progress={setProgress}
                key="health"
                pageSize={9}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                Progress={setProgress}
                key="science"
                pageSize={9}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                Progress={setProgress}
                key="sports"
                pageSize={9}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                Progress={setProgress}
                key="technology"
                pageSize={9}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
  // }
};

export default App;
