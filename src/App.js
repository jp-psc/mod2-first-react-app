import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/search" component={Search} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


