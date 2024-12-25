import axios from "axios";

const BD_REST_API = "http://localhost:8080/usuarios";

class UsuarioService{
    getAllUsers(){
      return axios.get(`${BD_REST_API}/All`)
    }
    createUser(usuario){
      return axios.post(`${BD_REST_API}/`, usuario)
    }
}

export default new UsuarioService();