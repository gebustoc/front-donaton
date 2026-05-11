import api from "./api.js";

class UserService {
    
  async getAllUsers() {
    const response = await api.get("/logistica/user"); 
    return response.data;
  }

  async getUserById(id) {
    const response = await api.get(`/logistica/user/${id}`);
    return response.data;
  }

  async register(clienteData) {
    
    const response = await api.post("/logistica/user", clienteData);
    
    if (response.data && clienteData.contrasena) {
      await this.login(clienteData.email, clienteData.contrasena);
    }
    return response.data;
  }

  async deleteUsuario(userId) {
    await api.delete(`/logistica/user/${userId}`);
    return true;
  }

  async login(email, contrasena) {
    const response = await api.post(`/clientes/login`, { email, contrasena });

    // not actually a token because not able to figure them out :/
    if (response.data.token) {
        localStorage.setItem("token", response.data);
    }
    return response.data;
  }

  async tokenLogin(obj) {
    const response = await api.post(`/clientes/login`, obj);
    
    if (response.data.token) {localStorage.setItem("token", response.data)}
    return response.data;
  }

  
  logout() {
    localStorage.removeItem("token"); 
  }

  

}

export default new UserService();