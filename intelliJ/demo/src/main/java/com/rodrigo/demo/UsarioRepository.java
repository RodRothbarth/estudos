package com.rodrigo.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsarioRepository extends JpaRepository<Usuario, Long> {
}
