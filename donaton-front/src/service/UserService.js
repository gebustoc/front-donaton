import api from "./api.js";

class UserService {
    
  async getAllUsers() {
    const response = await api.get("/logistica/user"); 
    return response.data;
  }

  async getUserById(id) {
    const response = await api.get(`/necesidades/user/${id}`);
    return response.data;
  }

  async register(clienteData) {
    
    const response = await api.post("/necesidades/user", clienteData);
    
    if (response.data) {await this.login(clienteData.email, clienteData.contrasena);}
    return response.data;
  }

  async deleteUsuario(userId) {
    await api.delete(`/logistica/user/${userId}`);
    return true;
  }

  async login(email, contrasena) {
    const response = await api.post(`/necesidades/login`, { email, contrasena });

    // not actually a token because not able to figure them out :/
    if (response.data.token) {
        localStorage.setItem("token", response.data);
    }
    return response.data;
  }

  async tokenLogin(obj) {
    const response = await api.post(`/necesidades/login`, obj);
    
    if (response.data.token) {localStorage.setItem("token", response.data)}
    return response.data;
  }

  
  logout() {
    localStorage.removeItem("token"); 
  }

  

}

export default new UserService();