package com.example.aula.repository;

import com.example.aula.model.Jogador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Jogador, Long> {
    Optional<Jogador> findByCamisa(String camisa);
}
