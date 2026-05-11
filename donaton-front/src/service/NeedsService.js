import api from "./api.js";

class NeedsService {
    async getAllNeeds() {
      const response = await api.get("/necesidades/Needs"); 
      return response.data;
    }

}

export default new NeedsService();