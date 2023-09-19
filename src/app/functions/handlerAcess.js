// Importando a biblioteca 'Cookies' do pacote 'js-cookie'
import Cookies from "js-cookie";

// Importando a função 'validateToken' do arquivo './validateToken'
import { validateToken } from "./validateToken";

// Importando a função 'getUserAuthenticated' do arquivo './handlerAcessAPI'
import { getUserAuthenticated } from "./handlerAcessAPI";

// Definindo uma função assíncrona chamada 'handlerAcessUser' que recebe um parâmetro 'user'
const handlerAcessUser = async (user) => {

    // Chama a função 'getUserAuthenticated' com o argumento 'user' e aguarda sua conclusão
    const userAuth = await getUserAuthenticated(user);
    
    // Chama a função 'validateToken' com o token obtido de 'userAuth' e armazena o resultado em 'isTokenValidate'
    const isTokenValidate = validateToken(userAuth.token);
    
    // Verifica se 'isTokenValidate' é verdadeiro
    if (isTokenValidate) {
        // Se for verdadeiro, define um cookie chamado 'token' com o valor do token obtido de 'userAuth' e configura a expiração para 1 dia
        Cookies.set('token', userAuth.token, { expires: 1 });
    }
    
    // Retorna o objeto 'userAuth'
    return userAuth;
}

// Exporta a função 'handlerAcessUser' como padrão para que possa ser importada em outros lugares
export default handlerAcessUser;
