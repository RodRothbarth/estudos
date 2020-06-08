package com.rodrigo.demo;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
@Entity
@Getter
@Setter
@EqualsAndHashCode
public class Usuario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Preencha o nome do Cliente")
    @NotNull(message = "Preencha o nome do Cliente")
    private String nome;

    private String email;

    private String telefone;

    private String cpf;
}
