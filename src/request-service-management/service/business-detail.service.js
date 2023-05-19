import http from "@/shared/services/http-common";

export class BusinessDetailService {
    getBusinessByID(id){
        return http.get(`/businessprofile/account/${id}`);
    }
}