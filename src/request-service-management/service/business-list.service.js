import http from "@/shared/services/http-common";
export class BusinessListService {
    searchRemodeler(){
        return http.get("/businessprofile")
    }
}