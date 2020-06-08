package com.rodrigo.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioControler {

    @Autowired
    UsarioRepository usarioRepository;

    @GetMapping
    public ResponseEntity findAll(){
        return ResponseEntity.ok(usarioRepository.findAll());
    }

    @PostMapping
    public ResponseEntity create(@RequestBody Usuario usuario){
        try {
            Usuario created = usarioRepository.save(usuario);
            return ResponseEntity.ok(created);
        } catch (Exception ex){
            return ResponseEntity.badRequest().body("não deu certo");
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity update(@RequestBody Usuario usuario, @PathVariable(name = "id") Long id){
        if(id == null){
            return ResponseEntity.badRequest().body("seu burro, digita direito");
        }
        Usuario usuarioBank = usarioRepository.getOne(id);

        if(usuarioBank == null){
            return ResponseEntity.notFound().build();
        }

        usuarioBank.setCpf(usuario.getCpf());
        usuarioBank.setEmail(usuario.getEmail());
        usuarioBank.setNome(usuario.getNome());
        usuarioBank.setTelefone(usuario.getTelefone());

        try{
            Usuario usuarioAtualizado = usarioRepository.save(usuarioBank);
            return ResponseEntity.ok(usuarioAtualizado);
        }catch (Exception ex){
            return ResponseEntity.badRequest().body("seu coco");
        }
    }
    @DeleteMapping("/{id}")

    public ResponseEntity delete(@PathVariable(name = "id") Long id){
        if(id == null){
            return ResponseEntity.badRequest().body("deu ruim no id");
        }

        Usuario usuarioBank = usarioRepository.getOne(id);
        if(usuarioBank == null){
            return ResponseEntity.notFound().build();
        }

        try{
            usarioRepository.delete(usuarioBank);
            return ResponseEntity.ok("Usuario excluido com sucesso");

        }catch(Exception ex){
            return ResponseEntity.badRequest().body("tente novamente");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable(name = "id")Long id){
        if(id == null){
            return ResponseEntity.badRequest().body("deu merda");
        }

        Usuario usuarioBank = usarioRepository.getOne(id);

        if(usuarioBank == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(usuarioBank);
    }
}
