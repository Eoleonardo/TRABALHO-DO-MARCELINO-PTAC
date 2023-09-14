import { getUsers } from "@/app/functions/handlerAcessAPI";
import Navbar from "@/app/componentes/navbar";


export default  function Dashboard() {
   const users = getUsers()
    return (
        <div>
              <Navbar/>
            <h1>Dashboard</h1>    
          
            
            {users?.map((user, index) =>
            <div key={index}>
                <h1>{user.name}</h1>
                <h2>{user.password}</h2>
            </div>
            )}
        </div>
    );
};