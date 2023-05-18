import http from "@/core/services/http-common" ;
export class UserRegisterService {

    register(data){
        return http.post("/account/sign-up", data);
    }
}