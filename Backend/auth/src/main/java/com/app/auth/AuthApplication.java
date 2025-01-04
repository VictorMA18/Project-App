package com.app.auth;

import com.app.auth.entidades.Rol;
import com.app.auth.entidades.Usuario;
import com.app.auth.entidades.UsuarioRol;
import com.app.auth.excepciones.UsuarioFoundException;
import com.app.auth.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class AuthApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(AuthApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*try {
			Usuario usuario = new Usuario();
			usuario.setNombre("Victor");
			usuario.setApellido("Mamani Anahua");
			usuario.setUsername("victor");
			usuario.setPassword(bCryptPasswordEncoder.encode("123456"));
			usuario.setEmail("vma@gmail.com");
			usuario.setTelefono("999888787");
			usuario.setPerfil("foto.png");

			Rol rol = new Rol();
			rol.setRolId(1L);
			rol.setNombre("ADMIN");

			Set<UsuarioRol> usuarioRoles = new HashSet<>();
			UsuarioRol usuarioRol = new UsuarioRol();
			usuarioRol.setRol(rol);
			usuarioRol.setUsuario(usuario);
			usuarioRoles.add(usuarioRol);

			Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario, usuarioRoles);
			System.out.println(usuarioGuardado.getUsername());
		} catch (UsuarioFoundException e) {
			e.printStackTrace();
		}*/
	}
}
