'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "@/app/componentes/navbar";
import '../css/registro.css'

export default function Registro() {
  function registro(e) {
    e.preventDefault();
    toast.success("ebaaaaaaa");
  }
  return (
    <div>
      <Navbar/>
      <form onSubmit={registro}>
        <div  className="caixa">
        <p>NOME</p>
        <input type="name" required/>
        <p>EMAIL</p>
        <input type="email" required/>
        <p>SENHA</p>
        <input type="password" required/>
        <p></p>
        <button className="btn">Cadastrar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
