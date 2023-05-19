import http from "@/shared/services/http-common" ;
export class UserSignUpService {

    register(data){
        return http.post("/account/sign-up", data);
    }
}