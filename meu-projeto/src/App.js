import './App.css';
import logo from './assets/images/logo.webp'
import UserInput from './conponents/Userinput'
import UserList from './conponents/UserList';
import './App.css';
import { useState } from 'react';

function App() {
  
    const [usuarios, setUsuarios] = useState(['Marta', 'Maria', 'José'])    
    
    const adicionarUsuarios = (novoUsuario) => {
      if(usuarios.includes(novoUsuario)){
        alert('Usuário já existe na lista')
        return;
      }
      setUsuarios([...usuarios,novoUsuario])
    }
  
    return (
      <div  className='App'>
        <img src={logo} alt='Logo da Empresa'/>
        <hr>Meu app</hr>
        <hr/>
        <UserInput onAddUser={adicionarUsuarios}/>
        <hr/>
        <UserList usuarios={usuarios}/>
      </div>
  );
}

export default App;
