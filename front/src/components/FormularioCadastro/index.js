// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import logo from '../../assets/images/logo.png'
import axios from 'axios'

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [posicao, setPosicao] = useState('')
    const [camisa, setCamisa] = useState('')

    const navigate = useNavigate()
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarJogador = async () => {
        try {
            const response = await axios.post('http://localhost:8080/jogador', {nome, sexo, idade, altura, peso, posicao, camisa})
            exibirMensagem(response.data.mensagem || 'Jogador cadastrado com sucesso!', 'sucesso')
            setNome('')
            setSexo('')
            setIdade('')
            setAltura('')
            setPeso('')
            setPosicao('')
            setCamisa('')
           
            
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" />
            <h2>Cadastro de jogadores</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarJogador()}}>
                <input 
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input 
                    type="sexo"
                    id="sexo"
                    placeholder="Sexo"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    required
                />
                <input 
                    type="Idade"
                    id="idade"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />

                <input 
                    type="text"
                    id="altura"
                    placeholder="Altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="peso"
                    placeholder="Peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="posicao"
                    placeholder="Posição"
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="camisa"
                    placeholder="Camisa"
                    value={camisa}
                    onChange={(e) => setCamisa(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>

            <button onClick={() => navigate('/jogador')} className="link-jogador">
                Ver jogadores cadastrados
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    )
}

export default FormularioCadastro