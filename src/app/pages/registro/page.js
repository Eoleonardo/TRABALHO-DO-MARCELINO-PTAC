'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "@/app/componentes/navbar";

export default function Registro() {
  function registro(e) {
    e.preventDefault();
    toast.success("ebaaaaaaa");
  }
  return (
    <div>
      <Navbar/>
      <form onSubmit={registro}>
        <p>NOME</p>
        <input type="name" required/>
        <p>EMAIL</p>
        <input type="email" required/>
        <p>SENHA</p>
        <input type="password" required/>
        <p></p>
        <button>Cadastrar</button>
      </form>
      <ToastContainer />
    </div>
  );
}
