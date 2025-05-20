// src\pages\Lista\index.js

import ListaDeUsuarios from '../../components/ListaDeJogadores'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaJogadores() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-lista-jogadores'>
            <div className='container'>
                <h2>Lista de jogadores</h2>
                <ListaDeUsuarios />
                <button onClick={() => navigate('/')} className='link-voltar'>
                    Cadastrar jogador
                </button>
            </div>
        </div>
    )
}

export default PaginaListaJogadores