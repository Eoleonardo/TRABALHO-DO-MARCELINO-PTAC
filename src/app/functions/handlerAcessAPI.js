'use server'
const users = [
{
    name:'usuario1',
    email:'usuario1@gmail.com',
    password:'123',
    token:'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},
{
    name:'usuario2',
    email:'usuario2@gmail.com',
    password:'321',
    token:'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},
{
    name:'usuario3',
    email:'usuario3@gmail.com',
    password:'231',
    token:'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}
]

const getUserAuthenticated = (users, user) => {
for (let i = 0; i < users.length; i++){
    if (users[i].email === user.email && users[i].password === user.password) {
        return true;
    }
 }
 return false
}


const getUsers = (user) =>{
const getUserAuthenticated = users.find(u => u.email === user.email && u.password === user.password);
}
export { getUsers, getUserAuthenticated };