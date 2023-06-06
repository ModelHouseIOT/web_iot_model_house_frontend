import http from "@/shared/services/http-common";
export class RequestService{
    sendRequest(userId, businessId, data){
        return http.post(`/request/user/${userId}/business/${businessId}`, data)
    }
    getRequestsByBusinessId(businessId, status){
        console.log(`/request/business/${businessId}/status/${status}`);
        return http.get(`/request/business/${businessId}/status/${status}`)
    }
    getRequestsByUserId(userId, status){
        return http.get(`/request/user/${userId}/status/${status}`)
    }
}