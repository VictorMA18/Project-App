package com.app.auth.excepciones;

public class UsuarioFoundException extends Exception{

    public UsuarioFoundException(){
        super("EL USUARIO CON ESE USERNAME YA EXISTE EN LA BD, VUELVA A INTENTARLO!!!");
    }

    public UsuarioFoundException(String mensaje){
        super(mensaje);
    }
}
