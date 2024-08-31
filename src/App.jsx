import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail";
import Category from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/Products";
import About from "./pages/About";
import Slider from "./pages/Slider";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Category />} />
          <Route path="/categories/:id" element={<Detail />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sliders" element={<Slider/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
