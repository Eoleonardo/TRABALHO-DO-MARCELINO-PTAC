'use server'
const users = [
{
    name:'LEONARDO', email:'leo@gmail.com', password:'123',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},
{
    name:'VINI', email:'vini@gmail.com', password:'456',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},
{
    name:'NATHAN', email:'nat@gmail.com', password:'789',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}
]

// Definindo uma função chamada 'getUserAuthenticated' que recebe um objeto 'user' como argumento
const getUserAuthenticated = (user) => {
    // Inicializa uma variável vazia 'userAuth'
    let userAuth = {};
  
    // Loop for para percorrer o array 'users'
    for (let i = 0; i < users.length; i++) {
      // Verifica se o email e a senha do usuário correspondem a um dos objetos no array 'users'
      if (users[i].email === user.email && users[i].password === user.password) {
        // Se a correspondência for encontrada, atribui o objeto de usuário autenticado à variável 'userAuth'
        return (userAuth = users[i]);
      }
    }
  
    // Se nenhum usuário for encontrado, 'userAuth' permanecerá vazio e será retornado
    return userAuth;
  };
  
  // Definindo uma função chamada 'getUsers' que retorna o array 'users'
  const getUsers = () => {
    return users;
  };
  
  // Exportando as funções 'getUsers' e 'getUserAuthenticated' para uso em outros módulos
  export { getUsers, getUserAuthenticated };