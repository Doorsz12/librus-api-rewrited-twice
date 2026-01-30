class GradesAPI {
  constructor(session) {
    this.session = session
  }

  async getGrades() {
    try {
      const response = await this.session.client.get(`${this.session.api.url}/Grades`);
      return response.data;
    } catch (error) {
      console.log("[LibrusAPI: Grades] School doesn't support this function");
      throw error;
    }
  }

  async getGradesAverages() {
    const response = await this.session.client.get(`${this.session.api.url}/Grades/Averages`);
    return response.data;
  }

  async getGradesCategoriesAverages() {
    const response = await this.session.client.get(`${this.session.api.url}/Grades/CategoriesAverages`);
    return response.data;
  }

  async getGradesCategories(id) {
    const response = await this.session.client.get(`${this.session.api.url}/Grades/Categories/${String(id)}`);
    return response.data;
  }

  async getGradesComments(id) {
    const response = await this.session.client.get(`${this.session.api.url}/Grades/Comments/${String(id)}`);
    return response.data;
  }

  async getGradesScales() {
    const response = await this.session.client.get(`${this.session.api.url}/Grades/Scales`);
    return response.data;
  }

  async getGradesTypes() {
    const response = await this.session.client.get(`${this.session.api.url}/Grades/Types`);
    return response.data;
  }

  async getGradesUnpreparednessPerSemesterAndSubject() {
    const response = await this.session.client.get(`${this.session.api.url}/Grades/UnpreparednessPerSemesterAndSubject`);
    return response.data;
  }
}

module.exports = GradesAPI;
