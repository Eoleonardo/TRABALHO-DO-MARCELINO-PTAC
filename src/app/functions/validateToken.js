// Importa a função 'decode' do módulo 'jsonwebtoken'
import { decode } from "jsonwebtoken";

// Define uma função chamada 'validateToken' que recebe um parâmetro 'token'
const validateToken = async(token) => {
const secret =
try{
    const isTokenValide = await jwtVerify( token, 
        new TextEncoder().encode(secret))
}












    // Decodifica o token usando a função 'decode' do módulo 'jsonwebtoken'
    const decodedToken = decode(token);

    // Verifica se 'decodedToken' possui um valor (ou seja, se o token é válido)
    if (decodedToken) {
        // Se o token for válido, retorna true
        return true;
    } else {
        // Se o token não for válido, retorna false
        return false;
    }
};

// Exporta a função 'validateToken' para que ela possa ser usada em outros lugares
export { validateToken };
