'use server'

const url ="https://leonascimento.vercel.app"

const getUserAuthenticated = async (user) => {
  console.log(user)
    const responseOfApi = await fetch(url + "/user/authenticated", 
    {
      method:"POST",
      cache:"no-cache",
      headers: {"Content-Type":"Application/json"}, 
      body: JSON.stringify(user)
    }
    );
    const userAuth = await responseOfApi.json();
    console.log(userAuth)
    return userAuth;
}

const postUser = async (user) => {
  try{
   const resposeOfApi = await fetch(url + "/user", {
  method:'POST',
  headers: { 'Content-Type': 'Application/json',},
  body: JSON.stringify(user)
  });
  const userSave = await resposeOfApi.json();
  return userSave;
  }catch {
  return null;
  }
  }

  const updateUser = async (user, id) =>{
    try{
        const responseOfApi = await fetch(url + "/user/" + id, {
            method: 'PUT',
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(user)
        });
        console.log("Indo")
        const userUpdate = await responseOfApi.json();
        console.log(userUpdate)
        return userUpdate;
    }
    catch{
        return null;
    }
}

  const getUsers = async () => {
   const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
   const userAuth = await responseOfApi.json();
   return userAuth;
  }
  
  
  export { getUsers, getUserAuthenticated, postUser, updateUser };