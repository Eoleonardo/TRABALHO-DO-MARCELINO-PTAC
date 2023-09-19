'use client'
// Importa a função useState do React para gerenciar o estado do componente.
import { useState } from "react";
// Importa a função handlerAcessUser de um arquivo externo.
import handlerAcessUser from "./functions/handlerAcess";
// Importa o hook useRouter do Next.js para lidar com navegação.
import { useRouter } from "next/navigation";
// Importa componentes relacionados a notificações (toasts).
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Importa um arquivo de estilo CSS.
import './pages/css/login.css'

// Define o componente Login como um componente funcional.
export default function Login() {
  // Define um estado inicial para o usuário com email e senha vazios.
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  // Obtém as funções push e refresh do hook useRouter.
  const { push, refresh } = useRouter();

  // Define uma função assíncrona para lidar com o evento de login.
  const handlerLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário.
    try {
      // Chama a função handlerAcessUser passando o estado do usuário como argumento.
      const userAuth = await handlerAcessUser(user);
      // Verifica se o objeto retornado possui um token.
      if (userAuth.token === undefined) {
        toast.error("Erro novamente"); // Exibe uma notificação de erro.
      }
      // Redireciona para a página '/pages/dashboard'.
      push('/pages/dashboard');
    } catch {
      toast.error("Erro de novo, poxa"); // Exibe uma notificação de erro em caso de exceção.
    }
  }

  // Renderiza o componente de login.
  return (
    <div className="caixa">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <input
          placeholder='leo@gmail.com'
          type="email"
          // Atualiza o estado do usuário quando o campo de email é alterado.
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='123'
          type='password'
          // Atualiza o estado do usuário quando o campo de senha é alterado.
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="btn">Entrar</button>
      </form>
      {/* Renderiza o componente ToastContainer para exibir notificações. */}
      <ToastContainer/>
    </div>
  )
}
