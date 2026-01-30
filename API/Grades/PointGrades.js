class PointGradesAPI {
    constructor(session) {
        this.session = session
      }

    async getPointGrades() {
        try {
            const response = await this.session.client.get(`${this.session.api.url}/PointGrades`);
            return response.data;
        } catch (error) {
            console.log("[LibrusAPI: PointGrades] School doesn't support this function");
        }
    }

    async getPointGradesCategories() {
        try {
            const response = await this.session.client.get(`${this.session.api.url}/PointGrades/Categories`);
            return response.data;
        } catch (error) {
            console.log("[LibrusAPI: PointGradesCategories] School doesn't support this function");
        }
    }

    async getPointGradesDictionaries() {
        try {
            const response = await this.session.client.get(`${this.session.api.url}/PointGrades/Dictionaries`);
            return response.data;
        } catch (error) {
            console.log("[LibrusAPI: PointGradesDictionaries] School doesn't support this function");
        }
    }

    async getPointGradesAverages() {
        try {
            const response = await this.session.client.get(`${this.session.api.url}/PointGrades/Averages`);
            return response.data;
        } catch (error) {
            console.log("[LibrusAPI: PointGradesAverages] School doesn't support this function");
        }
    }

    async getPointGradesStudentsAverages() {
        try {
            const response = await this.session.client.get(`${this.session.api.url}/PointGrades/StudentsAverages`);
            return response.data;
        } catch (error) {
            console.log("[LibrusAPI: PointGradesAverages] School doesn't support this function");
        }
    }

    async getPointGradesCategoriesAverages() {
        try {
            const response = await this.session.client.get(`${this.session.api.url}/PointGrades/CategoriesAverages`);
            return response.data;
        } catch (error) {
            console.log("[LibrusAPI: PointGradesAverages] School doesn't support this function");
        }
    }
}

module.exports = PointGradesAPI;