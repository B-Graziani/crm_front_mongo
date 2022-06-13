import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import AllContacts from "./pages/AllContacts";
import AllDocuments from "./pages/AllDocuments";
import AddContact from "./pages/AddContact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contacts" element={<AllContacts />} />
        <Route path="/documents" element={<AllDocuments />} />
        <Route path="/contact" element={<AddContact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
