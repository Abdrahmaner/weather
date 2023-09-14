import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Leyout";
import Users from "./Users";
import JeuDe from "./jeuDe";
import Weather from "./Weather";




const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);



root.render(
   <Weather />
)