package com.app.auth.excepciones;

public class UsuarioNotFoundException extends Exception{

    public UsuarioNotFoundException(){
        super("EL USUARIO CON ESE USERNAME NO EXISTE EN LA BD, VUELVA A INTENTARLO!!!");
    }

    public UsuarioNotFoundException(String mensaje){
        super(mensaje);
    }
}
