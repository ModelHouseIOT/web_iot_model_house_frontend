import http from "@/shared/services/http-common";
export class UserSignInService{
    signIn(data){
        return http.post("/account/sign-in", data);
    }
}