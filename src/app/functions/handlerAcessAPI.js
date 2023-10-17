'use server'

const url ="https://aula-17-10-xi.vercel.app"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticate", 
    {
      method:"POST",
      headers: {"Contente-Type":"application/json"}, 
      body: JSON.stringify(user)
    }
    );
    const userAuth =await responseOfApi.json();
    return userAuth;
}
  const getUsers = async () => {
   
  }
  
  
  export { getUsers, getUserAuthenticated };