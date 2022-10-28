import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home1";

const App = () => {
  useEffect(() => {
    document.title = `Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra`;
  });
  return (
    <section>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </section>
  );
};
export default App;

