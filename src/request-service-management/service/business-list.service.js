import http from "@/shared/services/http-common";
export class BusinessListService {
    searchRemodeler(){
        return http.get("https://localhost:7120/api/v1/businessprofile")
    }
}