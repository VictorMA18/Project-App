package com.app.auth.controladores;

import com.app.auth.configuraciones.JwtUtils;
import com.app.auth.entidades.JwtRequest;
import com.app.auth.entidades.JwtResponse;
import com.app.auth.entidades.Usuario;
import com.app.auth.servicios.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generarToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        try {
            autenticar(jwtRequest.getUsername(), jwtRequest.getPassword());
        }catch (Exception e) {
            e.printStackTrace();
            throw new Exception("USUARIO NO ENCONTRADO");
        }
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void autenticar(String username, String password) throws Exception {

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        }catch (DisabledException disabledException){
            throw new Exception("USUARIO DESHABILITADO " + disabledException.getMessage());
        }catch (BadCredentialsException badCredentialsException){
            throw new Exception("CREDENCIALES INVALIDAS " + badCredentialsException.getMessage());
        }

    }

    @GetMapping("/actual-usuario")
    public ResponseEntity<?> obtenerUsuarioActual(Principal principal) {

        String username = principal.getName();
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
        return ResponseEntity.ok(userDetails);
    }
}
