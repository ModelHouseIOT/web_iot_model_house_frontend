import http from "@/core/services/http-common";
export class SearchBusinessService{
    searchRemodeler(){
        return http.get("/businessprofile")
    }
}