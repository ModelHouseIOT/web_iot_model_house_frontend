import axios from "axios";

export class ProjectListService {
    getProjectListByBusinessId(businessId){
        return axios.get(`http://localhost:8080/api/v1/project/business/${businessId}`);
    }
    getProjectById(projectId){
        return axios.get(`http://localhost:8080/api/v1/project/profile/${projectId}`);
    }
}