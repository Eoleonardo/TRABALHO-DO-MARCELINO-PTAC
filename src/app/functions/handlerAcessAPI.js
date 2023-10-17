'use server'

const url ="https://aula-17-10-xi.vercel.app"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticate");
}
  const getUsers = async () => {
   
  }
  
  
  export { getUsers, getUserAuthenticated };