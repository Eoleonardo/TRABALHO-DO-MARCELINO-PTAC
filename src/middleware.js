'use server' // Esta linha parece estar indicando que você está usando um servidor, mas não é uma sintaxe válida em JavaScript. Pode ser um comentário informativo ou um erro de digitação.

import { NextResponse } from "next/server"; // Importa a função NextResponse do módulo "next/server".

import { validateToken } from "./app/functions/validateToken"; // Importa a função validateToken de um arquivo local.

export const middleware = async (request) => { // Define uma função middleware que recebe um objeto "request" como argumento.

    const token = request.cookies.get('token')?.value; // Obtém o valor do cookie chamado 'token'.
    const urlLogin = new URL('/', request.url); // Cria uma nova URL com base na raiz ('/') e na URL da requisição.
    const urlDash = new URL('/pages/dashboard', request.url); // Cria uma nova URL com base em '/pages/dashboard' e na URL da requisição.
    const isTokenValidated = await validateToken(token); // Chama a função validateToken para verificar se o token é válido.

    if (!isTokenValidated || !token) { // Verifica se o token não é válido ou não existe.
        if (request.nextUrl.pathname === '/pages/dashboard' || request.nextUrl.pathname === '/pages/registro' || request.nextUrl.pathname === '/pages/alterar' ) {
            // Verifica se a URL da próxima página é '/pages/dashboard', '/pages/registro' ou '/pages/alterar'.
            return NextResponse.redirect(urlLogin); // Redireciona para a página de login.
        }
    }
    if (isTokenValidated) { // Se o token for válido:
        if (request.nextUrl.pathname === "/"){ // Verifica se a próxima URL é a raiz ('/').
            return NextResponse.redirect(urlDash); // Redireciona para a página de dashboard.
        }
    }
    NextResponse.next(); // Chama a função NextResponse.next() para continuar com a próxima etapa do middleware.
};

export const config = {
    matcher: ['/', '/pages/:path*'] // Define um objeto de configuração com um padrão de correspondência para as URLs.
};
