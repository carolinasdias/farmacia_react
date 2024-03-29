import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import Footer from "./components/footer/Footer"
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[75vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App