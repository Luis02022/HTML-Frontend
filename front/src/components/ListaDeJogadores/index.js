// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'

function ListaDeJogadores() {
    const [jogadores, setJogadores] = useState([])

    useEffect(() => {
        const carregarJogadores = async () => {
            try {
                const response = await axios.get('http://localhost:8080/jogador')
                setJogadores(response.data)
            } catch (error) {
                alert('Erro ao buscar jogadores: ', error)
                setJogadores([])
            }
        }
        carregarJogadores()
    }, [])

    return (
        <ul id="listaJogadores" className="lista-jogadores">
            {jogadores.length === 0 ? (
                <li>Nenhum jogador encontrado.</li>
            ) : (
                jogadores.map( jogador => (
                    <li key={jogador.id}>
                        <strong>Nome: </strong> {jogador.nome}<br />
                        <strong>Sexo: </strong> {jogador.sexo}<br />
                        <strong>Idade: </strong> {jogador.idade}<br />
                        <strong>Altura: </strong> {jogador.altura}<br />
                        <strong>Peso: </strong> {jogador.peso}<br />
                        <strong>Posição: </strong> {jogador.posicao}<br />
                        <strong>Camisa: </strong> {jogador.camisa}<br />
                    </li>
                
                ))
            )}
        </ul>
    )
    
}

export default ListaDeJogadores