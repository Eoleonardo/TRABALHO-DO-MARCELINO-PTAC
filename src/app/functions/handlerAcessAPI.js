'use server'

const url ="https://leonascimento.vercel.app"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticated", 
    {
      method:"POST",
      cache:"no-cache",
      headers: {"Contente-Type":"application/json"}, 
      body: JSON.stringify(user)
    }
    );
    const userAuth = await responseOfApi.json();
    return userAuth;
}
  const getUsers = async () => {
   
  }
  
  
  export { getUsers, getUserAuthenticated };