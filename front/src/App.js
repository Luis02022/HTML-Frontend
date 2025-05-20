import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import './App.css'; // Para estilos globais, se necessário
import PaginaListaJogadores from './pages/Lista';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaCadastro />} />
        <Route path="/usuarios" element={<PaginaListaJogadores />} />
      </Routes>
    </Router>
  );
}

export default App;