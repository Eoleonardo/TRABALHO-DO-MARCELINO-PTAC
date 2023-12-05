'use client'

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/app/componentes/navbar";
import '../css/alterar.css';
import { getUsers, updateUser } from "@/app/functions/handlerAcessAPI";
import { useState } from "react";
import {useRouter} from 'next/navigation';

export default function Alterar({params}) {

  const [user, setUser] = useState({
name:'',
email:'',
password:''
  });

  const { push } = useRouter();

 const alterar= async (e) =>{
    e.preventDefault();
    try{
    await updateUser(user, params.id);
    await new Promesi((resolve) => {
      toast.success("boaa altero");
      setTimeout(resolve, 5000);
    });
    return push("/pages/dashboard") 
  }
  catch{
     return toast.error("erro")
  }
};

  return (
    <div>
      <Navbar />
      <form onSubmit={alterar}>
        <div className="caixa">
          <p>NOME</p>
          <input type="text" required />
          <p>EMAIL</p>
          <input type="email" required />
          <p>SENHA</p>
          <input type="password" required />
          <p></p>
          <button className="btn">Alterar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
