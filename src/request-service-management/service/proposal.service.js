import http from "@/shared/services/http-common";
export class RequestService {
    createProposal(requestId, data) {
        return http.post(`/request/${requestId}/proposal`, data);
    }
    createProjectActivity(proposalId, data){
        return http.post(`proposal/${proposalId}/project_activity`, data);
    }
    getProposal(requestId) {
        return http.post(`/request/${requestId}/proposal`);
    }
    getProjectActivity(proposalId){
        return http.post(`proposal/${proposalId}/project_activity`);
    }
}
