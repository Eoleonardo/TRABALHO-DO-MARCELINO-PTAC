'use client' 
// Isso parece ser um comentário, mas é incomum. Pode ser um erro de digitação. Deve ser 'use strict' para ativar o modo estrito do JavaScript.
import { ToastContainer, toast } from "react-toastify"; // Importa os componentes ToastContainer e toast do módulo react-toastify.

import 'react-toastify/dist/ReactToastify.css'; // Importa os estilos CSS para o react-toastify.

import Navbar from "@/app/componentes/navbar"; // Importa o componente Navbar de um caminho específico no projeto.
import '../css/registro.css'; // Importa o arquivo CSS de estilo para esta página.

export default function Registro() { // Define um componente de função chamado Registro.
  function registro(e) { // Define uma função chamada registro que recebe um evento 'e' como argumento.
    e.preventDefault(); // Impede o comportamento padrão do evento (no caso, o envio do formulário).
    toast.success("ebaaaaaaa"); // Exibe um toast de sucesso com a mensagem "ebaaaaaaa".
  }
  return (
    <div>
      <Navbar/>
      <form onSubmit={registro}> 
        <div className="caixa"> 
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
