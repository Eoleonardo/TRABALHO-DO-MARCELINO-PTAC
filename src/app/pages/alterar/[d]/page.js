'use client'

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/app/componentes/navbar";
import '../css/alterar.css';

export default function Alterar() {
  function alterar(e) {
    e.preventDefault();
    toast.success("boa pai");
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={alterar}>
        <div className="caixa">
          <p>NOME</p>
          <input type="text" required />
          <p>EMAIL</p>
          <input type="email" required />
          <p>SENHA</p>
          <input type="password" required />
          <p></p>
          <button className="btn">Alterar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

