import http from "@/shared/services/http-common";

export class BusinessDetailService {
    getBusinessByID(id){
        return http.get(`https://localhost:7120/api/v1/businessprofile/account/${id}`);
    }
}