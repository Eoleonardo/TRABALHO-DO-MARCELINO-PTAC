'use client'
// Importa o módulo 'ToastContainer' e a função 'toast' da biblioteca react-toastify para exibir notificações de toasts.
import { ToastContainer, toast } from "react-toastify";
// Importa o estilo CSS da biblioteca react-toastify para estilizar as notificações de toasts.
import 'react-toastify/dist/ReactToastify.css'
// Importa o componente Navbar de algum local definido como "@/app/componentes/navbar".
import Navbar from "@/app/componentes/navbar";
// Importa um arquivo de estilo CSS localizado em '../css/alterar.css'.
import '../css/alterar.css'

// Define a função React chamada 'Alterar'.
export default function Alterar() {
  // Define a função 'alterar' que será executada quando o formulário for enviado.
  function alterar (e) {
    // Evita que o formulário seja submetido e a página seja recarregada.
    e.preventDefault();
    // Exibe uma notificação de sucesso utilizando o método 'toast.success' da biblioteca react-toastify.
    toast.success("boa pai");
  }
  // Renderiza o conteúdo da página.
  return (
    <div>
        {/* Renderiza o componente Navbar para exibir uma barra de navegação. */}
        <Navbar/>
      <form onSubmit={alterar}>
        <div className="caixa">
        <p>NOME</p>
        {/* Renderiza um campo de entrada de texto com tipo 'name' e requerido. */}
        <input type="name" required/>
        <p>EMAIL</p>
        {/* Renderiza um campo de entrada de texto com tipo 'email' e requerido. */}
        <input type="email" required/>
        <p>SENHA</p>
        {/* Renderiza um campo de entrada de texto com tipo 'password' e requerido. */}
        <input type="password" required/>
        <p></p>
        {/* Renderiza um botão com a classe 'btn' que será usado para acionar a função 'alterar' quando o formulário for submetido. */}
        <button className="btn">Alterar</button>
        </div>
      </form>
      {/* Renderiza o componente ToastContainer para exibir as notificações de toasts. */}
      <ToastContainer />
    </div>
  );
}
