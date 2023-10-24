// Importa a função getUsers do módulo "@/app/functions/handlerAcessAPI"
import { getUsers } from "@/app/functions/handlerAcessAPI";

// Importa o componente Navbar do módulo "@/app/componentes/navbar"
import Navbar from "@/app/componentes/navbar";

// Importa o arquivo de estilo CSS "home.css" localizado na pasta "../css"
import '../css/home.css'

// Define e exporta a função Dashboard como um componente React
export default async function Dashboard() {
    
    // Chama a função getUsers para obter a lista de usuários
    const users = await getUsers();
    
    // Renderiza o componente Dashboard
    return (
        <div>
            {/* Renderiza o componente Navbar */}
            <Navbar/>

            {/* Mapeia a lista de usuários (se existir) e renderiza informações de cada usuário */}
            {users?.map((user, index) =>
                <div key={index}>
                    <h1>{user.name} {user.password}</h1>
                </div>
            )}
        </div>
    );
};
