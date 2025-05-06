import { useState } from 'react';
import './App.css';
import supermario from './supermario.png';

function App() {
  // Permite adicionar estado ao componente (monitorar mudanças no conteúdo
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'José']);

  const adicionarUsuario = () => {
    // Verificando se o novo usuário já existe na lista
    if(usuarios.includes(usuario)){
      alert('Usuário já existe na lista');
      return;
    }

    setUsuarios([...usuarios, usuario]);// Adicionar novo usuário na lista, mantendo os anteriores
    setUsuario('');// Limpar campo de entrada
  }
  return (
    <div className='App'>
      <img src = {supermario} className='logo'/>
    <h1>Lista de usuarios</h1>
    
    <hr/>
    <h2> Adicionar usuário</h2>
    <input 
    type='text'
    placeholder='Digite o nome do usuário'
    value = {usuario}
    onChange={(e) => setUsuario(e.target.value)}
    />
    <button onClick={adicionarUsuario}>Adicionar</button>
    <h/>
    <h2>Lista de usuarios</h2>
    <ol>
      {usuarios.map((usuario, index) => (
        <li key={index}>{usuario}</li>
      ))}
    </ol>
</div>
  );
}

export default App;
