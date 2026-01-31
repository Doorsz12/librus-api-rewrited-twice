class StudentAPI {
  constructor(session) {
      this.session = session
  }

  async getMe() {
    try {
      const response = await this.session.client.get(`${this.session.api.url}/Me`);
      return response.data;
    } catch (error) {
      console.error("[LibrusAPI: Me] School doesn't support this function", error);
      throw error;
    }
  }
  async getNotes() {
    try {
      const response = await this.session.client.get(`${this.session.api.url}/Notes`);
      return response.data;
    } catch (error) {
      console.error("[LibrusAPI: Notes] School doesn't support this function", error);
      throw error;
    }
  }
}

module.exports = StudentAPI;