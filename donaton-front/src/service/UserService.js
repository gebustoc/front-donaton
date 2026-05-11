import api from "./api.js";

class UserService {
    
  async getUserById(id) {
    const response = await api.get(`/necesidades/user/${id}`);
    return response.data;
  }

  async register(clienteData) {
    
    const response = await api.post("/necesidades/user", clienteData);
    console.log(response.data)

    if (response.data) {
        localStorage.setItem("token", JSON.stringify({"email": response.data.email,"contrasena": response.data.password}));
    }
    return response.data;
  }

 
  async deleteUsuario(userId) {
    await api.delete(`/logistica/user/${userId}`);
    return true;
  }

  async login(email, contrasena) {
    const response = await api.post(`/necesidades/user/login`, { "email":email, "contrasena":contrasena });
    // not actually a token because not able to figure them out :/
    if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data));
    }
    return response.data;
  }



  
  logout() {
    localStorage.removeItem("token"); 
  }



}

export default new UserService();