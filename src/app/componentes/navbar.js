'use client'
// Importa a função validateToken do arquivo "../functions/validateToken".
import { validateToken } from "../functions/validateToken";
// Importa o módulo "Cookies" para lidar com cookies no navegador.
import Cookies from "js-cookie";
// Importa a função useRouter do módulo "next/navigation" para gerenciar a rota da página.
import { useRouter } from "next/navigation";
// Importa o arquivo CSS de estilo para a barra de navegação.
import '../pages/css/navbar.css'

// Define o componente Navbar.
export default function Navbar() {
    // Obtém as funções push e refresh do objeto de roteamento (router).
    const { push, refresh } = useRouter();
    
    // Define uma função assíncrona chamada RemoveCookies que será executada ao clicar no botão "LIMPAR".
    const RemoveCookies = async (e) => {
        // Impede o comportamento padrão do evento (neste caso, a navegação para outra página).
        e.preventDefault();
        // Remove o cookie chamado 'token'.
        Cookies.remove('token');
        // Remove o item de armazenamento local (localStorage) chamado 'name'.
        localStorage.removeItem('name');
        // Atualiza a rota para a página raiz '/'.
        refresh('/')
    }

    // Renderiza o componente Navbar.
    return (
        <div>
            <ul class="navbar" role="navigation">
                {/* Cria links para diferentes páginas */}
                <li><a href='/pages/alterar'>Alterar</a></li>
                <li><a href='/pages/dashboard'>Home</a></li>
                <li><a href='/pages/registro'>Registro</a></li>
                {/* Cria um botão "LIMPAR" que chama a função RemoveCookies ao ser clicado. */}
                <li><button class="clear" onClick={RemoveCookies}>LIMPAR</button></li>
            </ul>
        </div>
    )
}
