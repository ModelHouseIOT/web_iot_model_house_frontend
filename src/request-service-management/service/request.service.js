import http from "@/shared/services/http-common";
export class RequestService{
    sendRequest(userId, businessId, data){
        return http.post(`/request/user/${userId}/business/${businessId}`, data)
    }
}