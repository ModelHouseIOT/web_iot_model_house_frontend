import http from "@/shared/services/http-common";
export class EditProfileService{
    profileByUserId(userId){
        return http.get(`/user/${userId}/user_profile`);
    }
    updateProfileByUserId(userId){
        return http.put(`/user_profile/${userId}`);
    }
}