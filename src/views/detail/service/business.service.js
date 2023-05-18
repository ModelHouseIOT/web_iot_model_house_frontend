import http from "@/core/services/http-common";

export class BusinessService{
    getBusinessByID(id){
        return http.get(`/businessprofile/account/${id}`);
    }
}