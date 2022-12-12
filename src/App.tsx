import React from 'react';
import './App.css';
import HomePage from "./pages/home-page/HomePage";
import {Route, Routes} from "react-router-dom";
import CatalogPage from "./pages/catalog-page/CatalogPage";
import NavigationComponent from "./components/navigation-component/NavigationComponent";

function App() {
  return (
    <>
      <NavigationComponent/>
      <Routes>
        <Route path="/" element={<HomePage text="first shop"/>}/>
        <Route path="/catalog" element={<CatalogPage/>}/>
      </Routes>
    </>
  );
}

export default App;
