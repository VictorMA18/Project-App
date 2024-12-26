package com.app.auth.controladores;

import com.app.auth.entidades.Rol;
import com.app.auth.entidades.Usuario;
import com.app.auth.entidades.UsuarioRol;
import com.app.auth.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/")
    public Usuario guardarUsuario(@RequestBody Usuario usuario) throws Exception{
        usuario.setPerfil("default.png");
        Set<UsuarioRol> usuarioRoles = new HashSet<>();

        Rol rol = new Rol();
        rol.setRolId(2L);
        rol.setNombre("NORMAL");

        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        usuarioRoles.add(usuarioRol);
        return usuarioService.guardarUsuario(usuario, usuarioRoles);
    }

    @GetMapping("/All")
    public List<Usuario> obtenerUsuarios(){
        return usuarioService.obtenerUsuarios();
    }

    @GetMapping("/{username}")
    public Usuario obtenerUsuario(@PathVariable("username") String username){
        return usuarioService.obtenerUsuario(username);
    }

    @DeleteMapping("/{userId}")
    public void eliminarUsuario(@PathVariable("userId") Long usuarioId){
        usuarioService.eliminarUsuario(usuarioId);
    }
}

