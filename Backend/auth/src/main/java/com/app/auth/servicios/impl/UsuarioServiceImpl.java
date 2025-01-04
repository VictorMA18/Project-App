package com.app.auth.servicios.impl;

import com.app.auth.entidades.Usuario;
import com.app.auth.entidades.UsuarioRol;
import com.app.auth.excepciones.UsuarioFoundException;
import com.app.auth.repositorios.RolRepository;
import com.app.auth.repositorios.UsuarioRepository;
import com.app.auth.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository;


    @Override
    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception {
        Usuario usuarioLocal = usuarioRepository.findByUsername(usuario.getUsername());
        if(usuarioLocal != null){
            System.out.println("El usuario ya existe");
            throw new UsuarioFoundException("El usuario ya esta presente");
        }
        else {
            for(UsuarioRol usuarioRol: usuarioRoles){
                rolRepository.save(usuarioRol.getRol());

            }
            usuario.getUsuarioRoles().addAll(usuarioRoles);
            usuarioLocal = usuarioRepository.save(usuario);
        }
        return usuarioLocal;
    }

    @Override
    public Usuario obtenerUsuario(String username) {
        return usuarioRepository.findByUsername(username);
    }

    @Override
    public void eliminarUsuario(Long usuarioId) {
        usuarioRepository.deleteById(usuarioId);
    }

    @Override
    public List<Usuario> obtenerUsuarios(){
        return usuarioRepository.findAll();
    }
}
