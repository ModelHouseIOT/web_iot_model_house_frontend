<script>
import {RequestService} from "@/request-service-management/service/request.service";
import {ref} from "vue";
import {BusinessListService} from "@/request-service-management/service/business-list.service";
import {AccountService} from "@/request-service-management/service/account-service";

export default {
  name: "Request",
  data(){
    return {
      businessRequest: null,
      businessProfileService: null,
      accountService: null,
      requestsCompleted: null,
      requestsInProcess: null,
      requestsPending: null,
      businessId: null,
      active: ref(0),
    }
  },
  created() {
    console.log("hola");
    this.businessRequest = new RequestService();
    this.businessProfileService = new BusinessListService();
    this.accountService = new AccountService();
    if(JSON.parse(localStorage.getItem("account")).role === "business"){
      this.accountService.accountByUserId(JSON.parse(localStorage.getItem("account")).id).then((res)=>{
        console.log("holli");
        this.businessProfileService.searchBusinessProfile(res.data.id).then(res=>{
          this.businessId = res.data.id;
          console.log(res.data);
          this.businessRequest.getRequestsByBusinessId(res.data.id, "CREATED").then(result=>{
            this.requestsCompleted = result.data;
          });
          this.businessRequest.getRequestsByBusinessId(res.data.id, "IN_PROCESS").then(result=>{
            this.requestsInProcess = result.data;
            console.log(this.requestsInProcess);
          });
          this.businessRequest.getRequestsByBusinessId(res.data.id, "PENDING").then(result=>{
            this.requestsPending = result.data;
            console.log(this.requestsPending);
          });
          this.businessRequest.getRequestsByBusinessId(res.data.id, "CANCELED").then(result=> {
            this.requestsPending = result.data;
          });
        });
      })
    }
  }
}

</script>

<template>
  <TabView v-model:activeIndex="active" style="margin: 150px 50px 0px 50px;" >
    <TabPanel style="background-color: cornflowerblue; padding: 10px 15px;" header="RECENT REQUESTS" >
      <div style="display: grid; grid-template-columns: repeat(3, 1fr)">
        <div v-for="(item, index) in this.requestsPending" :key="item.id" >
          <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); border-radius: 8px; margin: auto;
           height: 200px; margin-bottom: 30px;">
            <img alt="user profile image" :src="item.userProfile.image" style="height: 50px; width: 50px;"/>
            <p><b>Request created by </b> {{item.userProfile.firstName}}</p>
            <Button icon="pi pi-check" label="Save" />
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel style="background-color: yellowgreen; padding: 10px 15px;" header="COMING PROJECTS">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr)">
          <div v-for="(item, index) in this.requestsCompleted" :key="item.id" >
              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); border-radius: 8px; width: 80%; margin: auto;
           height: 200px; margin-bottom: 30px;">
                  <img alt="user profile image" :src="item.userProfile.image" style="height: 50px; width: 50px;"/>
                  <p><b>Request created by </b> {{item.userProfile.firstName}}</p>
                  <Button icon="pi pi-check" label="Save" />
              </div>
          </div>
      </div>
    </TabPanel>
    <TabPanel style="background-color: green; padding: 10px 15px;" header="IN PROCESS PROJECTS">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr)">
          <div v-for="(item, index) in this.requestsInProcess" :key="item.id" >
              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); border-radius: 8px; width: 90%; margin: auto;
           height: 200px; margin-bottom: 30px;">
                  <img alt="user profile image" :src="item.userProfile.image" style="height: 50px; width: 50px;"/>
                  <p><b>Request created by </b> {{item.userProfile.firstName}}</p>
                  <Button icon="pi pi-check" label="Save" />
              </div>
          </div>
      </div>
    </TabPanel>


  </TabView>
</template>

<style scoped>
</style>