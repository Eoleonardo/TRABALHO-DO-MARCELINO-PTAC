'use server'

const url ="https://leonascimento.vercel.app"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticated", 
    {
      method:"POST",
      cache:"no-cache",
      headers: {"Content-Type":"application/json"}, 
      body: JSON.stringify(user)
    }
    );
    const userAuth = await responseOfApi.json();
    console.log(userAuth)
    return userAuth;
}

  const getUsers = async (user) => {
   const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
   const userAuth = await responseOfApi.json();
   return userAuth;
  }
  
  
  export { getUsers, getUserAuthenticated };