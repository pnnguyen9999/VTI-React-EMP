import API from "./api";

class EmployeeApi {
    constructor() {
        this.url = "/employees";
    }

    getEmployees = () => {
        return API.get(this.url);
    };

    getEmployeeByID = (id) => {
        return API.get(`${this.url}/${id}`);
    };

    createEmployees = (data) => {
        return API.post(this.url, data);
    };

    updateEmployee = (id, body) => {
        return API.put(`${this.url}/${id}`, body);
    };

    deleteEmployee = (id) => {
        return API.delete(`${this.url}/${id}`);
    };
}

const employeeApi = new EmployeeApi;

export default employeeApi;